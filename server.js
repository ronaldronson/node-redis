const express = require('express')
const redis = require('redis')

const app = express()
const client = redis.createClient()

app.set('port', process.env.PORT || 3000)

app.post('/:key/:val', (req, res) => {
  client.set(req.params.key, req.params.val, (err, val) => {
    res.send(err ? err : 'key saved: ' + val)
  })
})

app.get('/:key', (req, res) => {
  client.get(req.params.key, (err, val) => {
    res.send(err ? err : val)
  })
})

app.delete('/:key', (req, res) => {
  client.del(req.params.key, (err, val) => {
    res.send(err ? err : 'key deleted ' + val)
  })
})

client.on('error', (err) => {
  console.log('Redis: ' + err)
})

app.on('error', (err) => {
  console.log('Express: ' + err)
});

app.listen(app.get('port'), () => {
  console.log('Node is running on port', app.get('port'))
})
