/* global $ */

  var words = ['office', 'table', 'lamp', 'school', 'project']
  var currentWord = this.getRandomWord()
  // slpit is taking the current word and breaking it to letters and putting comma between the letters..
  var currentWordLetters = currentWord.split('')
  var guesses = []
  // var deadCount = 0
  var images = $('.images')
  var counter = 0

// it's storing the alphabets as well it is making it to lower case letters.
  function storage () {
    storeAlphabet = $(this).attr('id').toLowerCase()
    console.log(storeAlphabet)
  }

  $('.alphabet').on('click', storage)
// alphabet.on('click')

  //this is the placeholder for the current word in the console.
  function placeHolder () {
    for (let i = 0; i < currentWordLetters.length; i++) {
      if (currentWordLetters[i] !== ' ') {
        $('.currentWord').append('_')
        console.log('ran')
      }
    }
  }
//map is sorting through the words and giving me a random word every time i click new game.
//also when the incorrect letters are guessed, they start appering next to "guesses", however
//if the letters are correct, the word starts appeirng in the (_ _ _ _)
  placeHolder()
  var wordWithBlanks
  getRandomWord()
  function showWord () {
    var lettersWithBlanks = currentWordLetters.map(function (letter) {
      if (guesses.includes(letter)) {
        return letter
      } else {
        return '_'
      }
    })
// taking everything that is in a array and pushing the together.
    wordWithBlanks = lettersWithBlanks.join('')
    $('.currentWord').text(wordWithBlanks)
  }
  // this is joining the letters from html and JS which bot h apper on my web site.
  function usedLetters () {
    var lettersNotinUse = currentWordLetters.join('')
    $('#guesses').text(guesses)
  }
  // this is an alert when we win
  function checkforWin () {
    if (wordWithBlanks === currentWord) {
      alert('you win')
    }
  }
// this funciton is calling for random words to come up after clicking the enter button.
  function getRandomWord () {
    var randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex]
  }
  // this is attaching my alphabets from my html to my JS. It's making the buttons clickable.
  $('#guesses').html(`Guesses: ${guesses}`)
  $('.alphabet').click(function () {

//This section the messages have been created in order for the player to know
//if they have won or lost the game.
    guesses.push(storeAlphabet)
    console.log(guesses)
    showWord()
    usedLetters()
    if (currentWordLetters.includes(storeAlphabet)) {
      showWord()
      $('#message').text('correct letter')
      checkforWin()
    } else {
      $('#message').text('Not the right letter')

      counter++
      randerMan()
    }
  })
//below are the images. with each wrong guess the image changes to the next one. 
  var randerMan = function () {
    switch (counter) {
      case 1:
        images.css('background-image', "url('images/hangman1.png')")
        break
      case 2:
        images.css('background-image', "url('images/hangman2.png')")
        break
      case 3:
        images.css('background-image', "url('images/hangman3.png')")
        break
      case 4:
        images.css('background-image', "url('images/hangman4.png')")
        break
      case 5:
        images.css('background-image', "url('images/hangman5.png')")
        break
      case 6:
        images.css('background-image', "url('images/hangman6.png')")
        alert('Game Over!')
    }
  }
//this function is reloading the page when "new game" is clicked.
  $('#startGame1').on('click', replay)
  function replay () {
    location.reload()
  }
