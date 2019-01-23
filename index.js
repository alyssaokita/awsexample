const express = require('express')
const app = express()
const fs = require('fs')
const http = require('http')
const https = require('https')

app.use(express.static('public'))
// app.get('/', (req, res) => {
//   res.send('HEY DUDE!')
// })

// TODO: parameterize locations and ports to env
const KEY_PATH = '/etc/letsencrypt/live/bakercodelife.com/privkey.pem';
const CERT_PATH = '/etc/letsencrypt/live/bakercodelife.com/cert.pem';
const options = {
    key: fs.readFileSync(KEY_PATH, 'utf-8'),
    cert: fs.readFileSync(CERT_PATH, 'utf-8')
}

const httpsPort = 433
const httpPort = 80
const httpsServer = https.createServer(options, app)
const httpServer = http.createServer(app)

httpsServer.listen(httpsPort, () => {
    console.log(`HTTPS listening on port ${httpsPort}`)
})

httpServer.listen(httpPort, () => {
    console.log(`HTTP listening on port ${httpPort}`)
})