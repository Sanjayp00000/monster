let movies=[{
     name:"Avengers Endgame",
     poster:"https://images-cdn.ubuy.co.in/634d0a48023cd2292277f3df-avengers-endgame-marvel-studios-framed.jpg",
      rating:8.7
}, {
   name:"Lagaan",
   poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5SfAJRB3KjwrewSoOCwkiPQUy9t8b3Wnd1b4ihWeug&s",
   rating:9.5, 
},   {
   name:"OPPENHEIMER",
   poster:"https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000",
   rating:9.5,
},{
   name:"ARCHER",
   poster:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411",
   rating:9,
},
{
   name:"MATRIX",
   poster:"https://www.movieposters.com/cdn/shop/products/ed4796ac6feff9d2a6115406f964c928_6b200bda-fe71-4900-ad7f-903cdda50dab_240x360_crop_center.progressive.jpg?v=1573587596",
   rating:9.2,
},
{
   name:"PEARL",
   poster:"https://i.etsystatic.com/18242346/r/il/7ad080/4580913585/il_fullxfull.4580913585_3yhu.jpg",
   rating:9,
},
{
   name:"BOHEMIAN",
   poster:"https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/bohemian-rhapsody-web.jpg",
   rating:8.5,
},
{
   name:"JIM CARREY",
   poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ucqfM7SmYyTZBAeq1xDMpt3VvcI8Fq9BQqtnrlSmyQ&s",
   rating:9.2,
}
]



function searchMovie(){
   let movieName=document.getElementById("search").value;

     if(movieName!==""){
     let result=movies.filter(function(movie){
         return movie.name.toUpperCase().includes(movieName.toUpperCase())
      })


      displayMovies(result);
     }else{
      displayMovies(movies);
     }

   
}
function displayMovies(data){
   document.getElementById("movies").innerHTML="";
   
   
   let htmlString=``;



   for(let i=0; i<data.length; i++){

      htmlString=htmlString+`<div class="movie">
      <div class="overlay">
        <div class="video">
   
        </div>
        <div class="details">
        
         <h1>${data[i].name}</h1>
         <h2>${data[i].rating}</h2>
         <p>Iron Man, Captain America,</p>
        </div>
      </div>
      <img  clas="poster" src="${data[i].poster}" alt="poster">
      </div>`

       console.log(htmlString);

   }

      document.getElementById("movies").innerHTML=htmlString;
   
}
displayMovies(movies);








// let movieDIV=document.createElement("div");
//         movieDIV.classList.add("movie");
//         let overlayDIV=document.createElement("div");
//         overlayDIV.classList.add("overlay");
//         movieDIV.appendChild(overlayDIV);
//         console.log(movieDIV);
