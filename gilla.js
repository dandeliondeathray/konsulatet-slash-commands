const qs = require('querystring')

exports.handler = async (event, context) => {
  const payload = qs.parse(event.body)
  const whatwelike = payload.text
  const response = [
    `Killar gillar ${whatwelike}!`,
    `Tjejer gillar ${whatwelike}!`,
    `Alla gillar ${whatwelike}!`,
    `${whatwelike}! ${whatwelike}! ${whatwelike}!`
  ].join('\n')

  return {
    statusCode: 200,
    body: JSON.stringify({
      text: response,
      response_type: 'in_channel'
    })
  }
}
