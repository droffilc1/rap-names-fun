const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
  'j cole': {
    'age': 37,
    birthName: 'Jermaine Lamarr Cole',
    birthLoaction: 'Frankfurt, Germany'
  },
  '21 savage': {
    'age': 29,
    birthName: 'Shéyaa Bin Abraham-Joseph',
    birthLoaction: 'London, England'
  },
  'kendrick lamar': {
    'age': 35,
    birthName: 'Kendrick Lamar Duckworth',
    birthLoaction: 'Compton, Carlifonia, USA'
  },
  'unknown': {
    'unknown': 'unknown',
    'unkown': 'unknown',
    'unknown': 'unkwon'
  }
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req, res) => {
  const rappersName = req.params.rapperName.toLowerCase();
  if (rappers[rappersName]) {
    res.json(rappers[rappersName])
  } else {
    res.json(rappers['unknown'])
  }
  // res.json(rappers)
})

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}! You bettter go catch it!`);
})