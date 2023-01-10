
const letsTalk = document.querySelector('.lets-talk-form')

letsTalk.addEventListener('submit', event => {
  event.preventDefault()
  const formData = new FormData(letsTalk)
  const data = Object.fromEntries(formData)
  fetch('https://wyreng.xyz/socials/lets_talk/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
    .then(data => {
      letsTalk.reset()
      alert('Welcome! its always our pleasure to serve you')
    })
    .catch(error => console.log(error));
});