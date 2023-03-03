import { html, render } from "lit-html";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5f1bcea3b6mshae9e99957d58d19p1c4151jsn67493961f466',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/title/v2/get-popular-movies-by-genre?genre=drama&limit=10', options)
	.then(response => response.json())
	.then(data => {
        console.log(data);
        let r = Math.floor(Math.random() * 5);
        let movies = data[r];
        console.log(movies);
        let moviecode= movies.substr(7, 10);
        console.log(moviecode);
        let movieurl = ('https://online-movie-database.p.rapidapi.com/title/get-details?tconst=' +moviecode);
        fetch(movieurl, options)
	        .then(response => response.json())
	        .then(data => {
                let movietitle = data.title;
                let movieyear = data.year;
                let movie = html`<div class="movie">
                    <h2>${movietitle}</h2>
                    <a>${movieyear}</a>
                    </div>`;
                render(movie, document.getElementById("movie"));
            });
        // let drinkid = data.drinks[r].idDrink;
        // console.log(drinkid);
        // let drinkname = data.drinks[r].strDrink;
        // console.log(drinkname);
        // let recipe2;
        // let drinkurl = ('https://www.thecocktaildb.com/drink/'+ drinkid);
        // recipe2 = html`<div class="recipe2">
        //     <h2>${recipedrink.strDrink}</h2>
        //     <a>${drinkurl}</a>
        //     </div>`;
        // render(recipe2, document.getElementById("recipe2"));
    });