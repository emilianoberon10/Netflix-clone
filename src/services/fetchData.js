async function getData(url) {
  const request = await fetch(url)
  const data = await request.json()
  return data
}
export default getData
