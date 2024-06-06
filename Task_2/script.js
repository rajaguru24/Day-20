// getValue function to get value from input

function getValue() {
  let getWord = document.getElementsByClassName("form-control")[0];
  let inputWord = getWord.value.toLowerCase();
  fetchData(inputWord);
}

// function to retrieve data from api

function fetchData(input) {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
    .then((data) => {
      if (data.status === 200) {
        return data.json();
      }
    })
    .then((response) => {
      displayData(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

// function displayData for displaying the data retrieved from api

function displayData(response) {
  let containerData = document.getElementsByClassName("container")[0];
  containerData.innerHTML = "";

  let cardData = `
    
    <h2>Word : ${response[0].word}</h2>
    <p class="mt-3"><b>Meaning</b>: ${response[0].meanings[0].definitions[0].definition}</p>
    <p><b>Part of speech</b>: ${response[0].meanings[0].partOfSpeech}</p>
<div class="mt-3"><h5>Audio : </h5>
    <audio controls class="mr-5 pr-5">
<source src="${response[0].phonetics[0].audio}" type="audio/ogg">
Your browser does not support the audio element.
</audio></div><br>
<div class="bg-info mt-3 text-center p-2 ml-5"><a href="${response[0].sourceUrls}" target="_blank"><span class="click">Click here </span></a>to learn more</div></div>
    
    `;

  containerData.insertAdjacentHTML("beforeend", cardData);
}

// addEventListener for click event of button
let buttonClick = document.getElementsByClassName("btn-outline-primary")[0];
buttonClick.addEventListener("click", getValue);