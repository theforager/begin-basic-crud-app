// Enable secure sessions, express-style middleware, and more:
// https://docs.begin.com/en/functions/http/
//
let arc = require('@architect/functions')
let parseBody = arc.http.helpers.bodyParser

// HTTP function
exports.handler = async function http(req) {
  console.log(req)
  let body = parseBody(req) // Pass the entire request object
  let name = body.name  // 'Patrick'
  let response = name + ' is a boss'
  return {
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: response
  }
}
