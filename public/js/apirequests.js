const db =
  $(document).ready(function () {
    console.log("apirequests");

    $(".search-results").empty();

    $("#searchAPI").on("click", function (e) {
      e.preventDefault();

      const searchTerm = $("#recipe-input").val().trim();
      console.log(searchTerm);
      // add some js to separate multiple search terms by comma

      const queryURL = "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=" + searchTerm + "&p=10";

      $.ajax({
        url: queryURL,
        method: "GET",
        dataType: 'json',
        success: function (response) {
          console.log("success");
          console.log(response);
          const results = response.results;
          $.each(results, function (i, results) {
            $("#searchResults").append(`<div class="card z-depth-5">
  <div class="card-image, recipeCard">
    <span class="card-title">${results.title}</span>
  </div>
  <div class="card-content">
    <p>${results.ingredients}</p>
  </div>
  <div class="card-action">
    <a href="${results.href}" target="_blank">Read more</a>
  </div>
</div>`);
          })
        }
      }); //ajax get
    }); // on click
  });


// $.ajax("../api/apiResults", {
//     type: "POST",
//     dataType: "json",
//     data: {
//       "title": response.results.title,
//       "link": response.results.href,
//       "ingredients": response.results.ingredients,
//       "thumbnail": response.results.thumbnail
//     },
//     success: function(response) {
//       console.log(response);                
//       return response
//     } 
//   });    