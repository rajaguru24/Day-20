// Fetching the data from the API
fetch("https://api.disneyapi.dev/character")
  .then((response) => response.json()).then((e) => {
    const tyData = e.data;
    console.log(tyData);
    
    const container = document.getElementById("container")
    tyData.forEach((object) => {
      console.log("res", object);    
    
    const card = document.createElement("div");
    card.classList.add("card-loop", "card", "mx-5", "bg-success","text-light");
     card.style.width = "25rem";

    const image = document.createElement("img");
    image.classList.add("image", "card-img-top","py-4");
      image.src = object.imageUrl;
      image.alt = "name";
      card.append(image);      

      const name1 = document.createElement("h4");
      name1.classList.add("name", "card-title","text-center","text-uppercase","fw-bold","fst-italic",);
      name1.textContent = `Name: ${object.name}`;
      card.append(name1);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
      card.append(cardBody);

    const characterId = document.createElement("h4");
    characterId.classList.add("id", "card-text","text-center","fst-italic");
      characterId.textContent = `ID: ${object._id}`;
      cardBody.append(characterId);      

    const films = document.createElement("h4");
    films.classList.add("flim", "card-text","text-center","fst-italic");
    films.textContent = `Film: ${object.films}`;
      cardBody.append(films);    

    const tvShows = document.createElement("h4");
    tvShows.classList.add("tv-show", "card-text","text-center","fst-italic");
    tvShows.textContent = `TV Shows: ${object.tvShows.join(", ")}`;
      cardBody.append(tvShows);

    const createdAt = document.createElement("h4"); 
    createdAt.classList.add("create", "card-text","text-center","fst-italic");
    createdAt.textContent = `CreatedAt: ${object.createdAt}`;
      cardBody.append(createdAt);

      const updatedAt = document.createElement("h4"); 
      updatedAt.classList.add("create", "card-text","text-center","fst-italic");
      updatedAt.textContent = `updatedAt: ${object.updatedAt}`;
      cardBody.append(updatedAt);
      container.append(card);
    });
  })
  .catch((error) => console.log(error));