const express = require('express')
const app = express()
const _ = require('lodash')
const fetch = require('node-fetch')
// TODO : replace with https://apitools.dev/swagger-parser/
const $RefParser = require('@apidevtools/json-schema-ref-parser')
const MimeMatcher = require('mime-matcher').default
const Ajv = require('ajv')
const ajv = new Ajv()

const middleware = require('../lib/spec-middleware.js')
const spec = require('../watch/test-api.js')

const port = 3000

let server
let deref

describe('express E2E', () => {
  beforeAll(() => {
    return Promise.all([
      $RefParser.dereference(spec).then((d) => {
        deref = d
      }),
      new Promise((resolve, reject) => {
        app.use(middleware([spec]))

        server = app.listen(port, resolve)
      })
    ])
  })

  afterAll(() => {
    return new Promise((resolve, reject) => {
      if (server) {
        server.close(resolve)
      } else {
        resolve('No Server')
      }
    })
  })

  describe('open API', () => {
    const table = _(spec.paths)
      .flatMap((pathItem, path) => {
        return _(pathItem)
          .pick(['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace'])
          .map((operation, method) => {
            return [operation.operationId, method.toUpperCase(), path]
          })
          .value()
      })
      .value()

    it.each(table)('%s : success : %s %s', async (operationId, method, path) => {
    // TODO : account for parameters
      const response = await fetch(`http://localhost:${port}${path}`, { method })

      expect(response.ok).toBeTrue()

      const contentType = response.headers.get('content-type')

      // TODO : account for other responses
      const contentMatches = _.filter(
        _.get(deref, `paths["${path}"].${method.toLowerCase()}.responses.default.content`),
        (content, mimeType) => {
          return new MimeMatcher(mimeType).match(contentType)
        }
      )

      expect(contentMatches).toHaveLength(1)

      const validator = ajv.compile(contentMatches[0].schema)
      const body = await response.json()
      const valid = validator(body)
      if (!valid) {
        console.log(validator.errors)
      }
      expect(valid).toBeTrue()
    })
  })
})
