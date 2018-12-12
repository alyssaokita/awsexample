const express = require('express')
const app = express()

app.use(express.static('public'))
// app.get('/', (req, res) => {
//   res.send('HEY DUDE!')
// })
app.listen(3000, () => console.log('Server running on port 3000'))