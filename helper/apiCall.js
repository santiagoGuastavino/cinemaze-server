const defaultURL = process.env.NEXT_PUBLIC_DEFAULT_URL

export default function getRequest (url, callback) {
  fetch(defaultURL + url)
    .then(res => res.json())
    .then(data => callback(data))
    .catch(err => console.log('err', err))
}
