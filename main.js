// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


document.addEventListener('DOMContentLoaded', () => {
  const likeButtons = document.querySelectorAll('.like-glyph');

  likeButtons.forEach((likeButton) => {
    likeButton.addEventListener('click', () => {
      mimicServerCall() // Simulate a server call
        .then(() => {
          if (likeButton.innerText === EMPTY_HEART) {
            likeButton.innerText = FULL_HEART;
            likeButton.classList.add('activated-heart');
          } else {
            likeButton.innerText = EMPTY_HEART;
            likeButton.classList.remove('activated-heart');
          }
        })
        .catch((error) => {
          // Handle the error here, e.g., display an error message to the user
          console.error('Error:', error);
        });
    });
  });
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
