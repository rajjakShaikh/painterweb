// Works Page

// Define an array of works with their information
const works = [
     {
       title: "The Starry Night",
       artist: "Vincent van Gogh",
       year: 1889,
       image: "./images"
     },
     {
       title: "The Persistence of Memory",
       artist: "Salvador Dali",
       year: 1931,
       image: "images/persistence-of-memory.jpg"
     },
     {
       title: "Girl with a Pearl Earring",
       artist: "Johannes Vermeer",
       year: 1665,
       image: "images/girl-with-pearl-earring.jpg"
     },
     {
       title: "The Kiss",
       artist: "Gustav Klimt",
       year: 1908,
       image: "images/the-kiss.jpg"
     },
     {
       title: "Campbell's Soup Cans",
       artist: "Andy Warhol",
       year: 1962,
       image: "images/campbells-soup-cans.jpg"
     },
     {
       title: "The Birth of Venus",
       artist: "Sandro Botticelli",
       year: 1485,
       image: "images/birth-of-venus.jpg"
     }
   ];
   
   // Get a reference to the works container
   const worksContainer = document.getElementById("works-container");
   
   // Loop through the works array and create a card for each work
   for (let i = 0; i < works.length; i++) {
     const work = works[i];
   
     // Create a div to hold the work card
     const card = document.createElement("div");
     card.classList.add("card");
   
     // Create an image element for the work and set its source
     const image = document.createElement("img");
     image.setAttribute("src", work.image);
     image.setAttribute("alt", work.title);
   
     // Add the image to the card
     card.appendChild(image);
   
     // Add a click event listener to the card that takes the user to the work item page
     card.addEventListener("click", function() {
       window.location.href = "work-item.html";
     });
   
     // Add the card to the works container
     worksContainer.appendChild(card);
   }
   
   function toggleMenu() {
     const menu = document.getElementById("nav-menu");
     menu.classList.toggle("show");
   }
   