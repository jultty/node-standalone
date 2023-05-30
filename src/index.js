import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.status(200).send('Up and running')
})

const server = app.listen(3000, () => {
  console.log('Server started')
})

export default server
