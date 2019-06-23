$(document).ready(function () {
  console.log("apirequests");

  $(".search-results").empty();



  $("#searchAPI").on("click", function (e) {
    e.preventDefault();

    const searchTerm = $("#recipe-input").val().trim();
    console.log(searchTerm);
    // add some js to separate multiple search terms by comma

    var queryURL = "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=" + searchTerm + "&p=10";
    $.ajax({
      url: queryURL,
      method: "GET",
      dataType: 'json',
    }).then(response => {
      console.log(response);
      console.log("request made");
      const result = response.results;

      // const cardInfo = [{
      //   title: result.title,
      //   href: result.link,
      //   ingredients: result.ingredients,
      //   // thumbnail: response.thumbnail
      // }];
      $.each(result, function (i, results) {
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
        if (i < 20) {
          return false;
        }
      });


    });
  });
});