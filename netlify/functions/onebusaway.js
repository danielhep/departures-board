const fetch = require('node-fetch')

exports.handler = async function ({ queryStringParameters }, context) {
  const baseUrl = 'http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/'
  const { stop_id } = queryStringParameters
  const apiKey = process.env.OBA_API_KEY

  const url = `${baseUrl}/${stop_id}.json?key=${apiKey}`
  const resp = await fetch(url)

  return {
    statusCode: 200,
    body: JSON.stringify({ resp })
  }
}
