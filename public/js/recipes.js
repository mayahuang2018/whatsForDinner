$(function() {
    $("#newUser").on("click", function (e) {
        e.preventDefault();

        const newUser = {
            username: $("#username").text().val().trim(),
            password: $("#password").text().val().trim();
        };

        $.ajax("api/users", {
            type: "POST",
            data: newUser
        }).then(
            function() {
                console.log("created new user & password");
                location.reload();
            }
        )
    });


    $("#recipeSearch").on("click", function (e) {
        e.preventDefault();
        const searchTerms = $(this).text().val();
        const recipePuppy = searchTerms.split(/[,]+/).filter(function (v) {
            return v !== ''
        }).join(',');
        const queryURL = ("http://www.recipepuppy.com/api/?i=" + recipePuppy + "&p=3")

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            console.log(response);

            results = response.data;
            $.each(results, function() {

                const recipeDiv = $("<div class='recipeDiv'>");

                const displayRecipe = $("<div>")
                    .html("src", results[i])
                    .data("i", i);

                //console.log(displayGif);
                //console.log(movingGif);

                recipeDiv.html(displayRecipe);

                $("#recipes").prepend(recipeDiv);
            }); //end of each
        }); //end of then
    })


});


    