const qs = require('querystring')

exports.handler = async (event, context) => {
  const payload = qs.parse(event.body)
  const who = payload.text

  const response = `HEJ! HEJ! HEJ! HEJ! HEJ! HEJ! <${who}> <${who}> <${who}> <${who}> <${who}> <${who}> <${who}> <${who}> <${who}> <${who}> <${who}> <${who}> <${who}> <${who}> <${who}> <${who}>`

  return {
    statusCode: 200,
    body: JSON.stringify({
      text: response,
      response_type: 'in_channel'
    })
  }
}
