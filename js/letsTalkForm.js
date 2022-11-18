


function scrollTopFunction(position) {
  document.body.scrollTop = position;
  document.documentElement.scrollTop = position;
}

let loaderFunction = document.getElementById('loader')

function openLoader(spnnerClass = 'spinner-display', selector = 'body', loaderId = 'loader') {
  let loaderFunction = document.getElementById(loaderId)
  let getBody = document.querySelector(selector);
  loaderFunction.classList.add(spnnerClass);
  getBody.classList.add('body-cover');
}
function hideLoader(spnnerClass = 'spinner-display', selector = 'body', loaderId = 'loader') {
  let loaderFunction = document.getElementById(loaderId)
  let getBody = document.querySelector(selector);
  loaderFunction.classList.remove(spnnerClass)
  getBody.classList.remove('body-cover');
}

let popupFunction = document.getElementById('pop-up')
function openPopup() {
  popupFunction.classList.add('open-popup')
}
function closePopup() {
  popupFunction.classList.remove('open-popup')
}

const formEl = document.querySelector('.form')
formEl && formEl.addEventListener('submit', event => {
  event.preventDefault()
  const formData = new FormData(formEl)
  const data = Object.fromEntries(formData)
  openLoader()
  setTimeout(hideLoader, 5000)
  scrollTopFunction(40)
  fetch('https://wyreng.xyz/socials/contact/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(res => {
    hideLoader();
    if (res.ok) {
      return res.json();
    }

    throw new Error('Something went wrong');
  })
    .then(data => {
      formEl.reset()
      openPopup()
    })
    .catch(error =>alert('something went wrong while processing the request, please try again'));
});

const letsTalk = document.querySelector('.lets-talk-form')

letsTalk && letsTalk.addEventListener('submit', event => {
  console.log('this is the add event listener here oooo ', letsTalk)
  event.preventDefault()
  const success = document.querySelector('.w-form-done');
  const failure = document.querySelector('.w-form-fail');
  const formData = new FormData(letsTalk)
  const data = Object.fromEntries(formData)
  openLoader('spinner-display', '.footer__form-container', 'loader-talk')
  fetch('https://wyreng.xyz/socials/lets_talk/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(res => {
    hideLoader('spinner-display', '.footer__form-container', 'loader-talk')
    if (res.ok) {
      success.classList.add('spinner-display')
      return res.json();
    }
    throw new Error('Something went wrong');
  })
    .then(data => {
      
      letsTalk.reset()
    })
    .catch(error => failure.classList.add('spinner-display'));
});