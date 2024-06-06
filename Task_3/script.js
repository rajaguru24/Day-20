
// Fetch the data from the API
fetch("https://api.disneyapi.dev/character")
  .then((response) => response.json())
  .then((ele) => {
    const tempData = ele.data;
    console.log(tempData);
    // Get the container element
    const container = document.getElementById("container");
    // Loop through the fetched data
    tempData.forEach((dataItem) => {
      console.log("Inside loop:", dataItem);
    
    // Create a new card element
    const card = document.createElement("div");
    const image = document.createElement("img");
    const name1 = document.createElement("h5");
    const cardBody = document.createElement("div");
    const characterId = document.createElement("h5");
    const films = document.createElement("h5");
    const tvShows = document.createElement("h5");
    const createdAt = document.createElement("h5");  


      card.classList.add("card-loop", "card","m-4", "bg-info");
      card.style.width = "18rem";

      image.classList.add("image", "card-img-top","py-4","rounded-5");
      image.src = dataItem.imageUrl;
      image.alt = "Country Flag";

      name1.classList.add("name", "card-title","text-center","fw-bolder");
      name1.textContent = `Name: ${dataItem.name}`;

      cardBody.classList.add("card-body");

      characterId.classList.add("id", "card-text","text-center","fw-bolder");
      characterId.textContent = `ID: ${dataItem._id}`;

      films.classList.add("flim", "card-text","text-center","fw-bolder");
      films.textContent = `Film: ${dataItem.films}`;

      tvShows.classList.add("tv-show", "card-text","text-center","fw-bolder");
      tvShows.textContent = `TV Shows: ${dataItem.tvShows.join(", ")}`;

      createdAt.classList.add("create", "card-text","text-center","fw-bolder");
      createdAt.textContent = `CreatedAt: ${dataItem.createdAt}`;

      // Append elements to card and card body
      card.appendChild(image);
      card.appendChild(name1);
      cardBody.appendChild(characterId);
      cardBody.appendChild(films);
      cardBody.appendChild(tvShows);
      cardBody.appendChild(createdAt);
      card.appendChild(cardBody);

      // Append the card to the container
      container.appendChild(card);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
