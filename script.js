const getFactBtn = document.querySelector('#getFactBtn');
const factParagraph = document.querySelector('#fact');

function getNumberFact() {
  return fetch('http://numbersapi.com/random')
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .catch(error => {
      console.error(error);
    });
}

getFactBtn.addEventListener('click', () => {
  getNumberFact()
    .then(fact => {
      factParagraph.textContent = fact;
    })
    .catch(error => {
      console.error(error);
    });
});