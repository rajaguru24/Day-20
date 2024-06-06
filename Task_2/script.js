// function to get the entered value from search box
function getValue() {
  let getWord = document.getElementsByClassName("form-control")[0];
  let inputWord = getWord.value.toLowerCase();
  fetchData(inputWord);
}

// function to retrieve data from api
function fetchData(input) {
  fetch(`https://api-thirukkural.vercel.app/api?num=${input}`)
    .then((data) => {
      if (data.status === 200) {
        return data.json();
      }
    })
    .then((response) => {
      displayData(response);
      console.log(response.sect_tam);
    })
    .catch((err) => {
      console.log(err);
    });
}

// function to display the data from the recieved response
function displayData(response) {
  let containerData = document.getElementsByClassName("container")[0];
  containerData.innerHTML = "";

  let cardData = `
  <div class=" card-header bg-dark p-2 text-center text-white" id="countryName"><h3>திருக்குறள்</h3></div>
    <div class = "border border-dark p-3" >
    <h4><b>குறள் எண் : </b>${response.number}</h4><br>
    <h4><b>பால் : </b>${response.sect_tam}</h4><br>
    <h4><b>அதிகாரம் : </b>${response.chap_tam}</h4><br>
    <div><h4><b>குறள் : </b></h4><p><h4><b>"${response.line1}</b></h4>
    <h4><b>${response.line2}"</b></h4></p></div><br>
    <div><h4><b>விளக்கம் :</b></h4><p><h4>${response.tam_exp}</h4></p></div></div><br><br><br>
    
   
    <div class=" card-header bg-dark p-2 text-center text-white" id="countryName"><h3>Thirukural</h3></div>
    <div class = "border border-dark p-3" >
    <h4><b>Kural No : </b>${response.number}</h4><br>
    <h4><b>Section : </b>${response.sect_eng}</h4><br>
    <h4><b>Chapter : </b>${response.chap_eng}</h4><br>
    <div><h4><b>Kural : </b></h4><p><h4><b>${response.eng}</b></h4>
    </p></div><br>
    <div><h4><b>Explanation :</b></h4><p><h4>${response.eng_exp}</h4></p></div></div>  
    `;

  containerData.insertAdjacentHTML("beforeend", cardData);
}

// addEventListener for button to invoke the getValue function
let button = document.getElementsByClassName("btn-outline-primary")[0];
button.addEventListener("click", getValue);