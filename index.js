import { html, render } from "lit-html";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5f1bcea3b6mshae9e99957d58d19p1c4151jsn67493961f466',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=chocolate', options)
  .then((response) => response.json())
  //.then((data) => console.log(data.results[2].slug))
  .then((data) => {
    console.log(data);
    let r = Math.floor(Math.random() * 11);
    let recipewhole = data.results[r];
    console.log(recipewhole);
    let recipeurl = data.results[r].slug;
    let recipename = data.results[r].name;
    console.log(recipename);
    console.log(recipeurl);
    let recipe;
    let url = ('https://tasty.co/recipe/'+recipeurl);
    recipe = html`<div class="recipe">
        <h2>${recipewhole.name}</h2>
        <a href=${url}>Link to recipe!</a>
      </div>`;
    render(recipe, document.getElementById("recipe"));
});