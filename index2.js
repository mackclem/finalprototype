import { html, render } from "lit-html";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5f1bcea3b6mshae9e99957d58d19p1c4151jsn67493961f466',
		'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
	}
};

fetch('https://the-cocktail-db.p.rapidapi.com/search.php?s=vodka', options)
	.then(response => response.json())
	.then((data) => {
        console.log(data);
        let r = Math.floor(Math.random() * 5);
        let recipedrink = data.drinks[r];
        console.log(recipedrink);
        let drinkid = data.drinks[r].idDrink;
        console.log(drinkid);
        let drinkname = data.drinks[r].strDrink;
        console.log(drinkname);
        let recipe2;
        let drinkurl = ('https://www.thecocktaildb.com/drink/'+ drinkid);
        recipe2 = html`<div class="recipe2">
            <h2>${recipedrink.strDrink}</h2>
            <a>${drinkurl}</a>
            </div>`;
        render(recipe2, document.getElementById("recipe2"));
    });