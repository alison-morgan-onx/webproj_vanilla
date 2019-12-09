const express = require('express')
const path = require('path')
const PORT = 8000
const app = express()

app.listen(PORT, () => {
    console.log("listening on port:", PORT)
})

app.use(express.static(path.join(__dirname, 'public')))