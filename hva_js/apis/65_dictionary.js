

function fetchMeaning() {
    const word = document.getElementById('wordInput').value;
    const output = document.getElementById('output');
    output.innerHTML = '';
  
    if (!word) {
      output.innerHTML = '<p class="error">Please enter a word to search!</p>';
      return;
    }
  
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Word not found');
        }
        return response.json();
      })
      .then((data) => {
        displayResults(data);
      })
      .catch((error) => {
        output.innerHTML = `<p class="error">${error.message}</p>`;
      });
  }
  


function displayResults(data) {
    const output = document.getElementById('output');
    const wordInfo = data[0]; 
    const { word,meanings } = wordInfo;
  
    let html = `<h2>${word}</h2>`;
    meanings.forEach((meaning) => {
      html += `
        <div class="meaning">
          <h4>Part of Speech: ${meaning.partOfSpeech}</h4>
          <ul>
            ${meaning.definitions
              .map(
                (definition) => `
                <li>
                  <strong>Definition:</strong> ${definition.definition}
                  ${definition.example ? `<p><strong>Example:</strong> "${definition.example}"</p>` : ''}
                  
                </li>`
              )
              .join('')}
          </ul>
        </div>`;
    });
  
    output.innerHTML = html;

}










