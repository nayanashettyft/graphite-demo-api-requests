const fetch = require('node-fetch');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const requestLoop = setInterval(function(){
  const id = getRandomInt(20)
  fetch(`http://localhost:3001/${id}`)
    .then(res => console.log(res.url, ' : ', res.status))
    // .then(res => res.json())
    // .then(json => console.log(json));
}, 10000);
