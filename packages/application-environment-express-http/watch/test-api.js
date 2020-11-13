// https://swagger.io/specification/

module.exports = {
  openapi: '3.0.3', // REQUIRED
  info: {
    title: 'Test API', // REQUIRED
    description: 'Test Open Api specification for testing basic functionality.',
    // URL to terms of service.  TODO: can middleware handle this?
    // termsOfService: ''
    contact: {
      name: 'Organization',
      // URL for contact.  TODO: can middleware handle this?
      // url: '',
      email: 'sample-org@example.org'
    },
    license: {
      name: 'MIT' // REQUIRED
      // URL for license.  TODO: can middleware handle this?
      // url: ''
    },
    version: '0.0.1' // REQUIRED, info version
  },
  servers: [{
    url: 'http://localhost:3000' // REQUIRED
    // description: 'Sample Org Server',
    // variables: [
    //   {
    //     enum: [''],
    //     default: '', // REQUIRED
    //     description: ''
    //   }
    // ]
  }],
  paths: { // REQUIRED
    '/api/hello-world': {
      // $ref: '#/other/path-item-object',
      summary: 'Hello World',
      description: 'Respond with fixed message "Hello World".',
      get: {
        // tags: ['tag'],
        // summary: 'API GET',
        // description: 'Sample api GET',
        // externalDocs: {
        //   description: 'Sample external documentation.',
        //   url: 'http://example.org' // REQUIRED
        // },
        operationId: 'apiHelloWorldGet', // MUST be unique within document
        // parameters: [
        //   { $ref: '#/components/parameters/name' }
        // ],
        // requestBody: { $ref: '#/components/requestBodies/name' },
        responses: {
          // '4XX': { $ref: '#/components/responses/name'},
          // '5XX': { $ref: '#/components/responses/name'},
          default: { $ref: '#/components/responses/hello-world' }
        }
        // callbacks: {
        //   'callback-unique-name': { $ref: '#/components/callbacks/name' }
        // },
        // deprecated: false,
        // security: [
        //   { 'security-schema-name': [] }
        // ],
        // servers: [{}]
      }
      // put: {},
      // post: {},
      // delete: {},
      // options: {},
      // head: {},
      // patch: {},
      // trace: {},
      // servers: [{}],
      // parameters: [
      //   {
      //     $ref: '#/components/parameters/name'
      //   }
      // ]
    },
    '/api/hello-bob': {
      // $ref: '#/other/path-item-object',
      summary: 'Hello Bob',
      description: 'Respond with fixed message "Hello Bob".',
      get: {
        // tags: ['tag'],
        // summary: 'API GET',
        // description: 'Sample api GET',
        // externalDocs: {
        //   description: 'Sample external documentation.',
        //   url: 'http://example.org' // REQUIRED
        // },
        operationId: 'apiHelloBobGet', // MUST be unique within document
        // parameters: [
        //   { $ref: '#/components/parameters/name' }
        // ],
        // requestBody: { $ref: '#/components/requestBodies/name' },
        responses: {
          // '4XX': { $ref: '#/components/responses/name'},
          // '5XX': { $ref: '#/components/responses/name'},
          default: { $ref: '#/components/responses/hello-bob' }
        }
        // callbacks: {
        //   'callback-unique-name': { $ref: '#/components/callbacks/name' }
        // },
        // deprecated: false,
        // security: [
        //   { 'security-schema-name': [] }
        // ],
        // servers: [{}]
      }
      // put: {},
      // post: {},
      // delete: {},
      // options: {},
      // head: {},
      // patch: {},
      // trace: {},
      // servers: [{}],
      // parameters: [
      //   {
      //     $ref: '#/components/parameters/name'
      //   }
      // ]
    }
  },
  components: {
    schemas: {
      text: {
        type: 'string'
      } // JSON schema Object + extensions
    },
    responses: {
      'hello-world': {
        description: 'Hello World Response',
        // headers: {
        //   'custom-header': { $ref: '#/components/headers/name' }
        // },
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/text' },
            examples: {
              basic: { $ref: '#/components/examples/hello-world' }
            }
          }
        }
        // links: {
        //   'link-name': { $ref: '#/components/links/name' }
        // }
      },
      'hello-bob': {
        description: 'Hello Bob Response',
        // headers: {
        //   'custom-header': { $ref: '#/components/headers/name' }
        // },
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/text' },
            examples: {
              basic: { $ref: '#/components/examples/hello-bob' }
            }
          }
        }
        // links: {
        //   'link-name': { $ref: '#/components/links/name' }
        // }
      }
    },
    // parameters: {
    //   'name': {
    //     name: '', // REQUIRED
    //     in: '', // REQUIRED, [path, query, header, cookie]
    //     description: '',
    //     required: false, // if (in===path) must be true
    //     deprecated: false,
    //     allowEmptyValue: false,
    //     // matrix, label, form, simple, spaceDelimited, pipeDelimited, deepObject
    //     style: '', // path || header == simple, query || cookie == form
    //     explode: false, // style == form ->  default true
    //     allowReserved: false, // in == query
    //     schema: { // exlusive with content
    //       $ref: '#/components/schemas/name'
    //     },
    //     content: { // exclusive with schema
    //       'text/*': {
    //         schema: { $ref: '#/components/schemas/name' },
    //         examples: {
    //           'content-example-name': { $ref: '#/components/examples/name' }
    //         }
    //       }
    //     },
    //     examples: {
    //       'example-name': { $ref: '#/components/examples/name' }
    //     }
    //   }
    // },
    examples: {
      'hello-world': {
        summary: 'Hello World Example',
        description: 'Hello World Example',
        value: '"Hello World!!"' // literal as long as it can be placed in json/yaml,
        // externalValue: 'http://example.org' // url to unescapable example
      },
      'hello-bob': {
        summary: 'Hello Bob Example',
        description: 'Hello Bob Example',
        value: '"Hello Bob!!"' // literal as long as it can be placed in json/yaml,
        // externalValue: 'http://example.org' // url to unescapable example
      }
    }
    // requestBodies: {
    //   'name': {
    //     description: 'Sample Request Body',
    //     content: { // REQUIRED
    //       'media-type': {
    //         schema: { $ref: '#/components/schemas/name' },
    //         examples: {
    //           'content-example-name': { $ref: '#/components/examples/name' }
    //         },
    //         encoding: {
    //           'schema-property-name': {
    //             contentType: 'text/*',
    //             headers: {
    //               'header-name': { $ref: '#/components/parameters/name' }
    //             }
    //           }
    //         }
    //       }
    //     },
    //     required: false
    //   }
    // },
    // headers: {
    //   'name': {
    //     description: '',
    //     required: false,
    //     deprecated: false,
    //     allowEmptyValue: false,
    //     // must be supported by where in==header
    //     style: '',
    //     explode: false,
    //     schema: { $ref: '#/components/schemas/name' }, // exlusive with content
    //     content: { // exclusive with schema
    //       'text/*': {
    //         schema: { $ref: '#/components/schemas/name' },
    //         examples: {
    //           'content-example-name': { $ref: '#/components/examples/name' }
    //         }
    //       }
    //     },
    //     examples: {
    //       'example-name': { $ref: '#/components/examples/name' }
    //     }
    //   }
    // },
    // securitySchemes: {
    //   'name': {
    //     type: '', // REQUIRED, ["apiKey", "http", "oauth2", "openIdConnect"]
    //     description: 'Sample Security Schemes.',
    //     // type == apiKey
    //     name: '', // REQUIRED, match with in allowed values
    //     in: '', // REQUIRED, ["query", "header", "cookie"]
    //     // type == http
    //     scheme: '', // REQUIRED, https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml
    //     bearerFormat: 'bearer',
    //     // type == oauth2
    //     flows: {
    //       implicit: {
    //         authorizationUrl: '', // REQUIRED
    //         refreshUrl: '',
    //         scopes: { // REQUIRED
    //           'scope': 'scope description'
    //         }
    //       },
    //       password: {
    //         tokenUrl: '', // REQUIRED
    //         refreshUrl: '',
    //         scopes: { // REQUIRED
    //           'scope': 'scope description'
    //         }
    //       },
    //       clientCredentials: {
    //         tokenUrl: '', // REQUIRED
    //         refreshUrl: '',
    //         scopes: { // REQUIRED
    //           'scope': 'scope description'
    //         }
    //       },
    //       authorizationCode: {
    //         authorizationUrl: '', // REQUIRED
    //         tokenUrl: '', // REQUIRED
    //         refreshUrl: '',
    //         scopes: { // REQUIRED
    //           'scope': 'scope description'
    //         }
    //       }
    //     },
    //     // type == openIdConnect
    //     openIdConnectUrl: 'http://example.org' // REQUIRED
    //   }
    // },
    // links: {
    //   'name': {
    //     operationRef: '', // external to document, exlusive with operationId
    //     operationId: '',  // relative to document, exlusive with operationRef
    //     parameters: {
    //       'name': 'constant or expression'
    //     },
    //     requestBody: 'constant or expression',
    //     description: 'Sample link.',
    //     server: {
    //       url: 'http://example.org', // REQUIRED
    //       description: 'Sample Org Server'
    //       // variables: [
    //       //   {
    //       //     enum: [''],
    //       //     default: '', // REQUIRED
    //       //     description: ''
    //       //   }
    //       // ]
    //     }
    //   }
    // },
    // callbacks: {
    //   'name': {
    //     '{expression}': { /* Path Item Object */ }
    //   }
    // }
  }
  // security: [
  //   { 'security-schema-name': [] }
  // ],
  // tags: [
  //   {
  //     name: 'tag-name', // REQUIRED
  //     description: 'Sample tag',
  //     externalDocs: {
  //       description: 'Sample external documentation.',
  //       url: 'http://example.org' // REQUIRED
  //     }
  //   }
  // ],
  // externalDocs: {
  //   description: 'Sample external documentation.',
  //   url: 'http://example.org' // REQUIRED
  // }
}
