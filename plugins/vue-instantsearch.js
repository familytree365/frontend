export default function (context, inject) {
  const appId = 'SZEW42EG32'
  const apiKey = '1cb012681351f6a27e7c0133a9f20021'

  inject('dataApi', {
    getHome
  })
  async function getHome(homeId) {
    const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`,{
      headers: {
        'X-Algolia-API-Key': apiKey,
        'X-Algolia-Application-Id': appId
      }
    })
    const data = await response.json()
    return data
  }
}
