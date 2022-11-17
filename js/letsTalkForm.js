


function scrollTopFunction(position) {
  document.body.scrollTop = position;
  document.documentElement.scrollTop = position;
}

let loaderFunction = document.getElementById('loader')
function openLoader() {
  loaderFunction.classList.add('spinner-display')
}
function hideLoader() {
  loaderFunction.classList.remove('spinner-display')
}

let popupFunction = document.getElementById('pop-up')
function openPopup() {
  popupFunction.classList.add('open-popup')
}
function closePopup() {
  popupFunction.classList.remove('open-popup')
}

const formEl=document.querySelector('.form')    
formEl.addEventListener('submit', event => {
  event.preventDefault()  
  const formData = new FormData(formEl)
  const data = Object.fromEntries(formData)
  openLoader()
  setTimeout(hideLoader, 5000)
  // openPopup()
  scrollTopFunction(40)
  // fetch('https://wyreng.xyz/socials/contact/', {
  //   method: 'POST',
  //   headers: {
  //    'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data)
  // }).then(res => res.json())
  //   .then(data => {formEl.reset()
  //     openPopup()
  // })
  //   .catch(error => console.log(error)); 
});

const letsTalk = document.querySelector('.lets-talk-form')

letsTalk.addEventListener('submit', event => {
  event.preventDefault()
  const formData = new FormData(letsTalk)
  const data = Object.fromEntries(formData)
  openLoader()
  setTimeout(hideLoader, 5000)
  // openPopup()
  scrollTopFunction(40)
  // fetch('https://wyreng.xyz/socials/lets_talk/', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data)
  // }).then(res => res.json())
  //   .then(data => {
  //     letsTalk.reset()
  //     alert('Welcome! its always our pleasure to serve you')
  //   })
  //   .catch(error => console.log(error));
});