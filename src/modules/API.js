const remoteURL = "http://localhost:8088"

export default {
  get(database, id) {
    return fetch(`${remoteURL}/${database}/${id}`).then(data => data.json())
  },
  getAll(database) {
    return fetch(`${remoteURL}/${database}`).then(data => data.json())
  },
  delete (database, id) {
    return fetch(`http://localhost:8088/${database}/${id}`, {
        method: "DELETE"
    })
    .then(data => data.json())
    .then(() => fetch(`http://localhost:8088/${database}`))
    .then(data => data.json())
}

}