import { html, render } from "lit-html";

// Fetch data from jsonplaceholder's "users" endpoint
// fetch("https://jsonplaceholder.typicode.com/users")
//   // Then convert the response to JSON
//   .then((response) => response.json())

//   // Then do something with the JSON data
//   .then((data) => {
//     let users = data;

//     // Use .map to create an array of html templates to render to the DOM
//     let userList = users.map(function (user) {
//       return html`<div class="user-entry">
//         <h2>${user.name}</h2>
//         <span>${user.email}</span>
//       </div>`;
//     });

//     // Render the userList array to the user-list div
//     render(userList, document.getElementById("user-list"));
//   });
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
        <a>${url}</a>
      </div>`;
    render(recipe, document.getElementById("recipe"));
});
