
  $(document).ready(function () {
    console.log("apirequests");

    $("#searchAPI").on("click", function (e) {
      e.preventDefault();
      $(".search-results").empty();
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
    <a class="addRec btn btn-floating halfway-fab waves-effect waves-light #ef9a9a red lighten-3"> <i class="material-icons">favorite_border</i></a>
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
    }); // on click search

    $("#searchResults").on("click", ".addRec", function (e) {
      console.log("clicked on addRec");
      e.preventDefault();
      $(this).addClass("favRec");
      console.log("clicked");
      const $card = $(this).closest(".card");
      const title = $card.find(".card-title").text().trim();
      const ingredients = $card.find(".card-content").text().replace("\n", "").trim();
      const link = $card.find(".card-action").find("a").attr("href");
      // need to fix link

      console.log(this, "addRec clicked");
      $.ajax("/api/results", {
        type: "POST",
        dataType: "json",
        data: {
          "title": title,
          "link": link,
          "ingredients": ingredients,
        }
      }); //ajax post
    }); //on click fav

    $("#nav").on("click", "#favsButton", function (e) {
      e.preventDefault();
      console.log("clicked favs");
      const userID = req.session.passport.user
      $.ajax("/api/results" + userID, {
        type: "GET",
        data: {
          title: title,
          ingredients: ingredients,
          link: href,
        }
      }).then(
        () => {
          console.log("get favs");
          res.render("favRecipes", {
            title: data.title,
            ingredients: data.ingredients,
          });
        }
      )
    });
      
    }); // document