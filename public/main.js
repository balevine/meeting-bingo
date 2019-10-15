async function newCard() {
  // refresh state a bit
  var phraseBank = [...phrases]
  fillNewCard(phraseBank)
  return true
}

async function fillNewCard(phraseBank) {
  var activePhrases = await getPhrases(phraseBank)
  fillPhrases(activePhrases)
  return true
}

async function getPhrases(phraseBank) {
  let activePhrases = []
  let randomPhrase, randomIndex
  for (let step = 0; step < 8; step++) {
    randomIndex = Math.floor(Math.random() * phraseBank.length)
    // take it away
    randomPhrase = phraseBank.splice(randomIndex, 1)
    activePhrases.push(randomPhrase[0])
  }
  return activePhrases
}

async function fillPhrases(activePhrases) {
  document.getElementById('1-1').innerHTML = activePhrases[0]
  document.getElementById('1-2').innerHTML = activePhrases[1]
  document.getElementById('1-3').innerHTML = activePhrases[2]

  document.getElementById('2-1').innerHTML = activePhrases[3]

  document.getElementById('2-3').innerHTML = activePhrases[4]

  document.getElementById('3-1').innerHTML = activePhrases[5]
  document.getElementById('3-2').innerHTML = activePhrases[6]
  document.getElementById('3-3').innerHTML = activePhrases[7]
  return true
}

window.onload = function() {
  newCard()
}
