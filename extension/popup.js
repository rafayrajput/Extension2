const jokeBtn = document.getElementById('joke-btn');
const jokeText = document.getElementById('joke-text');

jokeBtn.addEventListener('click', getJoke);

function getJoke() {
  fetch('https://official-joke-api.appspot.com/jokes/random')
    .then(response => response.json())
    .then(data => {
      jokeText.textContent = data.setup + ' ' + data.punchline;
    })
    .catch(error => {
      jokeText.textContent = 'Oops! Something went wrong. Please try again later.';
      console.error('Error fetching joke:', error);
    });
}