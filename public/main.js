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
  document.getElementById('1-4').innerHTML = activePhrases[3]
  document.getElementById('1-5').innerHTML = activePhrases[4]

  document.getElementById('2-1').innerHTML = activePhrases[5]
  document.getElementById('2-2').innerHTML = activePhrases[6]
  document.getElementById('2-3').innerHTML = activePhrases[7]
  document.getElementById('2-4').innerHTML = activePhrases[8]
  document.getElementById('2-5').innerHTML = activePhrases[9]

  document.getElementById('3-1').innerHTML = activePhrases[10]
  document.getElementById('3-2').innerHTML = activePhrases[11]
  document.getElementById('3-4').innerHTML = activePhrases[12]
  document.getElementById('3-5').innerHTML = activePhrases[13]

  document.getElementById('4-1').innerHTML = activePhrases[14]
  document.getElementById('4-2').innerHTML = activePhrases[15]
  document.getElementById('4-3').innerHTML = activePhrases[16]
  document.getElementById('4-4').innerHTML = activePhrases[17]
  document.getElementById('4-5').innerHTML = activePhrases[18]

  document.getElementById('5-1').innerHTML = activePhrases[19]
  document.getElementById('5-2').innerHTML = activePhrases[20]
  document.getElementById('5-3').innerHTML = activePhrases[21]
  document.getElementById('5-4').innerHTML = activePhrases[22]
  document.getElementById('5-5').innerHTML = activePhrases[23]
  return true
}

window.onload = function() {
  newCard()
}
