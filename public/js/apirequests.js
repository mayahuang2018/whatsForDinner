function recipes(ingredients) {

    // var ingredients = $("#search").val();
console.log('get recipes')
    var queryURL = "http://www.recipepuppy.com/api/?i=" + ingredients + "&p=5"
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      // Printing the entire object to console
      console.log(response);

      // Constructing HTML containing the recipe information
      var recipeName = $("<h1>").text(response.title);
      var recipeLink = $("<a>").attr("href", response.href);
      var recipeImage = $("<img>").attr("src", response.thumbnail);
      var recipeIngredients = $("<h2>").text(response.ingredients);

      // append the new recipe content
   
      $("#recipe-div").append(recipeName, recipeLink, recipeImage, recipeIngredients);
    });
  }

  //  //need to swap out the eyeglass icon image
  $(document).on("click", '#search',function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the recipe name
    var inputRecipe = $("#recipe-input").val().trim();
    console.log(inputRecipe)
    // Running the function(passing in the recipe as an argument)
    recipes(inputRecipe);
  });