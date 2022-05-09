/*
   Accessing the backend api we created and displaying json data to an html page.
      - Open for discussion but this would be the best way without involving any framework
      - And They strongly recommended the use of DOM.
*/

const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'http://localhost:4000/dev/api/fans', true) //Accessing out BackEnd API...
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(fan => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')
      

      const h1 = document.createElement('h4')
      h1.textContent = fan.FanName

      const list = document.createElement('ul')

      const ele1 = document.createElement('li')
      const anch = document.createElement('a')
      anch.href = 'http://localhost:4000/dev/api/fans/' + fan.FanId
      anch.textContent = `Fan Name: ${fan.FanName}`
      ele1.appendChild(anch)
      const ele3 = document.createElement('li')
      ele3.textContent = `Fan Model: ${fan.FanModel}`
      const ele4 = document.createElement('li')
      ele4.textContent = `FanMaxRPM: ${fan.FanMaxRPM}`

      list.appendChild(ele1)
      list.appendChild(ele3)
      list.appendChild(ele4)
      
      const ele2 = document.createElement('img')
      ele2.src = `https://res.cloudinary.com/ngoveps/image/upload/v1652030338${fan.ImageURI}` //I stored these dummy images in Cloudinary (https://cloudinary.com/) //Free Media Cloud Storage
      ele2.alt = 'FanImage'

      container.appendChild(card)
      //card.appendChild(h1)
      card.appendChild(ele2)
      card.appendChild(list)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()

function topnav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }