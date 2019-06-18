function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  return vars;
}
var printTitle = decodeURI(getUrlVars()["title"]);
var printIngredients = decodeURI(getUrlVars()["ingredients"]);



// console.log(printTitle)
// console.log(printIngredients)


function recipes(ingredients) {
  $(".search-results").empty();

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
          <a class="btn-floating halfway-fab waves-effect waves-light #ef9a9a red lighten-3" id="addRec" href="shoppingList?title=${data.title}&ingredients=${data.ingredients}"><i class="material-icons">favorite_border</i></a>
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

    })
}

$(document).ready(function(){


var input = document.getElementById("recipe-input");
  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      console.log("enter button");
     event.preventDefault();
     document.getElementById("search").click();
    }
  });


//need to swap out the eyeglass icon image
$('#search').on("click", function (event) {
  
  // Preventing the button from trying to submit the form
  event.preventDefault();
  // Storing the recipe name
  var inputRecipe = $("#recipe-input").val().trim();
  console.log(inputRecipe)
  // Running the function(passing in the recipe as an argument)
  recipes(inputRecipe);
  console.log(inputRecipe)

});

});