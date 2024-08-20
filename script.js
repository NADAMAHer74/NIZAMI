// Array of objects containing titles and image filenames
const posters = [
  { title: "Mortal Kombat <br> 20 April <br> 18+", image: "mortal kombat.jpg" },
  { title: "Bliss <br> 20 April <br> 12+", image: "bliss.png" },
  { title: "After the rain <br> 20 April <br> 18+", image: "lion.png" },
  { title: "Up from slavery <br> 20 April <br> 18+", image: "hang.png" },

  { title: "Game of thrones <br> 20 April <br> 18+", image: "image 14.png" },
  { title: "Bliss <br> 20 April <br> 12+", image: "image 14 (1).png" },
  { title: "After the rain <br> 20 April <br> 12+", image: "overlay.png" },
  {
    title: "Howl’s moving castle <br> 23 April <br> 12+",
    image: "image 14 (2).png",
  },
  { title: "Tom & Jerry <br> 24 April <br> 16+", image: "tom&gerry.png" },
  { title: "Bliss <br> 20 April <br> 16+", image: "bliss.png" },
  { title: "After the rain <br> 20 April <br> 18+", image: "lion.png" },
  { title: "Up from slavery <br> 20 April <br> 18+", image: "hang.png" },
  { title: "Attack on titan <br> 25 April <br> 16+", image: "cartoon.png" },
  { title: "News of the world <br> 25 April <br> 16+", image: "black.png" },
  { title: "Oğlan evi: 2 <br> 23 April <br> 16+", image: "marriage.png" },
];

// Function to generate HTML for a single poster
function generatePosterHTML(title, image) {
  return `
        <div class="col-md-3 col-sm-3">
            <div class="poster-card">
                <img src="${image}" alt="${title}">
                <div class="overlay">
                <h1 class="poster-title">${title}</h1>
                </div>
                    
               
            </div>
        </div>
    `;
}

// Get the container where the posters will be added
const posterContainer = document.getElementById("poster-container");

// Loop through the posters array and add each poster to the container
posters.forEach((poster) => {
  posterContainer.innerHTML += generatePosterHTML(poster.title, poster.image);
});
