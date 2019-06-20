$(document).ready(function () {

  function recipes() {
    $(".search-results").empty();

    $("#search").on("submit", function (event) {
      event.preventDefault();

      const ingredients = $("#recipe-input").val().trim();

      // var ingredients = $("#search").val();
      // console.log('get recipes')
      var queryURL = "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=" + ingredients + "&p=5";
      $.ajax({
          url: queryURL,
          method: "GET",
          dataType: 'json',
        })
        .then(response => {
          
          const cardInfo = {
            title: response[i].title,
            link: response[i].href,
            ingredients: response[i].ingredients,
            thumbnail: response[i].thumbnail
          };
          console.log(cardInfo);

          
        });

        
    });
  };
});