/**
 * Express middleware to route requests according to supplied specifications.
 * @module @cb/application-environment-express-http
 */
// docs : https://github.com/anttiviljami/openapi-backend/blob/master/DOCS.md
const OpenAPIBackend = require('openapi-backend').OpenAPIBackend
const _ = require('lodash')

/**
 * Supply specification documents that comply with OpenAPI version 3.
 * @param  {Object[]} specs Specifications to use.
 * @return {Function}
 * @see https://swagger.io/specification/
 */
module.exports = function setup (specs) {
  // TODO: express middleware for ["apiKey", "http", "oauth2", "openIdConnect"] security
  //   found at : spec.security
  //   operation overrides at : spec.paths.{/}.{method}.security
  //   handle information : spec.components.securitySchemes
  //   1. create security handlers
  //   2. apply handlers globally
  //   3. handlers need to be overridable per path + method

  return specs.map((spec) => {
    const handlers = {}

    _(spec.paths)
      .flatMapDeep((path) => {
        return _(path).pick([
          'get',
          'put',
          'post',
          'delete',
          'options',
          'head',
          'patch',
          'trace'
        ])
          .map('operationId')
          .values()
      })
      .forEach((operationId) => {
        // TODO : Add Handlers
        handlers[operationId] = (context, req, res) => {
          // respond with example
          const responseContent = context.operation.responses.default.content

          const mediaType = Object.keys(responseContent)[0]
          res.set('Content-Type', mediaType)
          res.status(200).send(responseContent[mediaType].examples.basic.value)
        }
      })

    const api = new OpenAPIBackend({
      definition: spec
    })

    api.register(handlers)

    api.register('notFound', (context, req, res) => res.status(404).end())

    api.init()

    return (req, res) => api.handleRequest(req, req, res)
  })
}
