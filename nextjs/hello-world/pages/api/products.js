//POST

function teste(req, res) {
  if(req.method !== 'POST') {
    res.status(404)
    res.end()
  } 

  res.status(200)
}

export default teste