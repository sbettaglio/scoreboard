const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}
const teamOneName = () => {
  const nameOfTeam = document.querySelector('.team-1-input').value
  document.querySelector('.team-1-name').textContent = nameOfTeam
}
const teamTwoName = () => {
  const nameOfTeam = document.querySelector('.team-2-input').value
  document.querySelector('.team-2-name').textContent = nameOfTeam
}

const addTeamOne = () => {
  const total = document.querySelector('.team-1-score').textContent
  console.log(total)
  const newTotal = parseInt(total) + 1
  console.log(newTotal)
  document.querySelector('.team-1-score').textContent = newTotal
}
const addTeamTwo = () => {
  const total = document.querySelector('.team-2-score').textContent
  console.log(total)
  const newTotal = parseInt(total) + 1
  console.log(newTotal)
  document.querySelector('.team-2-score').textContent = newTotal
}
const subtractTeamOne = () => {
  const total = document.querySelector('.team-1-score').textContent
  console.log(total)
  const newTotal = parseInt(total) - 1
  console.log(newTotal)
  document.querySelector('.team-1-score').textContent = newTotal
}
const subtractTeamTwo = () => {
  const total = document.querySelector('.team-2-score').textContent
  console.log(total)
  const newTotal = parseInt(total) - 1
  console.log(newTotal)
  document.querySelector('.team-2-score').textContent = newTotal
}

document.addEventListener('DOMContentLoaded', main)
document
  .querySelector('.update-team-1-name')
  .addEventListener('click', teamOneName)
document
  .querySelector('.update-team-2-name')
  .addEventListener('click', teamTwoName)
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addTeamOne)
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subtractTeamOne)
document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addTeamTwo)
document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subtractTeamTwo)
