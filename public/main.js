const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}
const updateTeamName = (nameInput, teamName) => {
  const nameOfTeam = document.querySelector(nameInput).value
  document.querySelector(teamName).textContent = nameOfTeam
}
const teamOne = () => {
  updateTeamName('.team-1-input', '.team-1-name')
}
const teamTwo = () => {
  updateTeamName('.team-2-input', '.team-2-name')
}

const addScore = (score, name) => {
  if (parseInt(document.querySelector(score).textContent) < '21') {
    const total = document.querySelector(score).textContent
    const newTotal = parseInt(total) + 1
    document.querySelector(score).textContent = newTotal
    checkForWinner()
  }
}

const checkForWinner = () => {
  if (document.querySelector('.team-1-score').textContent === '21') {
    document.querySelector('.update-team-1-name').disabled = true
    document.querySelector('.update-team-2-name').disabled = true
    document.querySelector('.team-1-add-1-button').disabled = true
    document.querySelector('.team-1-subtract-1-button').disabled = true
    document.querySelector('.team-2-add-1-button').disabled = true
    document.querySelector('.team-2-subtract-1-button').disabled = true
    document.querySelector('.team-1-name').textContent += ' is the winner!'
    document.querySelector('.one').style.background = 'red'
    document.querySelector('.team-1-score').style.color = 'blue'
  } else if (document.querySelector('.team-2-score').textContent === '21') {
    document.querySelector('.update-team-1-name').disabled = true
    document.querySelector('.update-team-2-name').disabled = true
    document.querySelector('.team-1-add-1-button').disabled = true
    document.querySelector('.team-1-subtract-1-button').disabled = true
    document.querySelector('.team-2-add-1-button').disabled = true
    document.querySelector('.team-2-subtract-1-button').disabled = true
    document.querySelector('.team-2-name').textContent += ' is the winner!'
    document.querySelector('.two').style.background = 'red'
    document.querySelector('.team-2-score').style.color = 'blue'
  }
}
const addTeamOne = () => {
  addScore('.team-1-score')
}
const addTeamTwo = () => {
  addScore('.team-2-score')
}

const subtractTeam = score => {
  if (document.querySelector(score).textContent > 0) {
    const total = document.querySelector(score).textContent
    console.log(total)
    const newTotal = parseInt(total) - 1
    console.log(newTotal)
    document.querySelector(score).textContent = newTotal
  }
}
const subtractTeamOne = () => {
  subtractTeam('.team-1-score')
}
const subtractTeamTwo = () => {
  subtractTeam('.team-2-score')
}
const reset = () => {
  document.querySelector('.update-team-1-name').disabled = false
  document.querySelector('.update-team-2-name').disabled = false
  document.querySelector('.team-1-add-1-button').disabled = false
  document.querySelector('.team-1-subtract-1-button').disabled = false
  document.querySelector('.team-2-add-1-button').disabled = false
  document.querySelector('.team-2-subtract-1-button').disabled = false
  document.querySelector('.team-1-score').textContent = '0'
  document.querySelector('.team-2-score').textContent = '0'
  document.querySelector('.team-1-name').textContent = 'Input Name'
  document.querySelector('.team-2-name').textContent = 'Input Name'
  document.querySelector('.two').style.background = 'whitesmoke'
  document.querySelector('.team-2-score').style.color = 'black'
  document.querySelector('.one').style.background = 'whitesmoke'
  document.querySelector('.team-1-score').style.color = 'black'
}
const startGame = () => {
  document.querySelector('.first').style.background = 'green'
}
const startSecondHalf = () => {
  document.querySelector('.second').style.background = 'green'
  document.querySelector('.first').style.background = 'red'
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.update-team-1-name').addEventListener('click', teamOne)
document.querySelector('.update-team-2-name').addEventListener('click', teamTwo)
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
document.querySelector('.reset').addEventListener('click', reset)

document.querySelector('.start-first').addEventListener('click', startGame)

document
  .querySelector('.start-second')
  .addEventListener('click', startSecondHalf)
