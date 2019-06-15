// const recipe = require("../models/apiResponse");
// const db = require("../models");


function recipes(ingredients) {

  // var ingredients = $("#search").val();
  // console.log('get recipes')
  var queryURL = "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=" + ingredients + "&p=5";
  $.ajax({
    url: queryURL,
    method: "GET",
    dataType: 'json'
  })
    .then(function (response) {
      // Printing the entire object to console
      console.log(response.results);
      var results = response.results;

<<<<<<< HEAD
      // response.results.map(function(ele) {console.log(ele.title)});
      // response.results.map(function(ele) {console.log(ele.href)});
      // response.results.map(function(ele) {console.log(ele.ingredients)})
      
      // Constructing HTML containing the recipe information
      // for (let i = 0; i < response.results.length; i++) {
      // var recipeName = response.results[i].title;
      // var recipeLink =response.results[i].href;
      // var recipeImage =  response.results[i].thumbnail;
      // var recipeIngredients =response.results[i].ingredients;
      // console.log(response.results[i].title)

      // var recipeDiv = $("<div>");
      // recipeDiv.attr("class", "card");
      // var aboutRecipe =  $("<h1>").html(recipeName);
      // aboutRecipe.attr("class", "card-title activator grey-text text-darken-4");
      // var image = $("<img>").attr("src", recipeImage).attr("class","activator");
      // var cardLink = $("<p>").html("<a href="+recipeLink+">Read more</a>");
      // var cardContent = $("<div>").attr("class","card-content").html("<p>"+response.results[i].ingredients+"<p>");

      // recipeDiv.append(image);
      // recipeDiv.append(aboutRecipe);
      // recipeDiv.append(cardContent);
      // recipeDiv.append(cardLink);

      const data = {
        title: results.title,
        link: results.href,
        ingredients: results.ingredients,
        thumbnail: results.thumbnail
      };
      console.log(data);

      results.forEach(data => {
        console.log('Result here', data)
        $(".search-results").append(`
   <div>
    <div class="col s12 m5" id="recipeForm">
      <div class="card z-depth-5">
        <div class="card-image">
        <img max-width="100" height="200" src="${data.thumbnail}">
          <span class="card-title">${data.title}</span>
          <a class="btn-floating halfway-fab waves-effect waves-light #ef9a9a red lighten-3" id="addRec" ><i class="material-icons">favorite_border</i></a>
        </div>
        <div class="card-content">
          <p>${data.ingredients}</p>
        </div>
        <div class="card-action">
          <a href="${data.href}" target="_blank">Read more</a>
        </div>
      </div>
    </div>
  </div>
        `)
      })

=======
      // var title = results.map(function (ele) {
      //   console.log(ele.title);
      //   return results.title;
      // });

      const data = {
        title: results.title,
        link: results.href,
        ingredients: results.ingredients,
        thumbnail: results.thumbnail
      };
      console.log(data);

      // var href = results.map(function (ele) {
      //   console.log(ele.href);
      //   return results.href;
      // });

      // var ingredients = results.map(function (ele) {
      //   console.log(ele.ingredients);
      //   return results.ingredients;
      // });

      // var thumbnail = results.map(function (ele) {
      //   console.log(ele.thumbnail);
      //   return results.thumbnail;
      // });

      
      results.forEach(data => {
          console.log('Result here',data)
          $(".search-results").append(`
          <div class="row">
            <div class="col md3">${data.title}</div>
            <div class="col md3">${data.href}</div>
            <div class="col md3"><img src="${data.thumbnail}"></div>
            <div class="col md3">${data.ingredients}</div>
          </div>
          `)  
      })

     

      // Constructing HTML containing the recipe information
      // var recipeName = $("<h1>").text(response.title);
      // var recipeLink = $("<a>").attr("href", response.href);
      // var recipeImage = $("<img>").attr("src", response.thumbnail);
      // var recipeIngredients = $("<h2>").text(response.ingredients);

      // append the new recipe content

      // $("#recipe-div").append(recipeName, recipeLink, recipeImage, recipeIngredients);
>>>>>>> cfe8c58d53b7644e3b15bdcad1cd1309dc81f6a9
    })
}





//need to swap out the eyeglass icon image
$(document).on("click", '#search', function (event) {
  // Preventing the button from trying to submit the form
  event.preventDefault();
  // Storing the recipe name
  var inputRecipe = $("#recipe-input").val().trim();
  console.log(inputRecipe)
  // Running the function(passing in the recipe as an argument)
  recipes(inputRecipe);

});