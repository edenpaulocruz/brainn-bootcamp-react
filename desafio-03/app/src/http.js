const request = (url, options) =>
  fetch(url, options)
    .then(result => result.json())
    .catch(error => ({ error: true, message: error.message }))

const createRequest = (method) => (url, data) => request(url, {
  method,
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(data)
})

export const get = request
export const post = createRequest('POST')
export const del = createRequest('DELETE')