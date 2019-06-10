$(function () {
    $("#newUser").on("click", function (e) {
        e.preventDefault();

        const newUser = {
            email: $("#userEmail").text().val().trim(),
            firstname: $("#firstName").text().val().trim(),
            lastname: $("lastName").text().val().trim(),
            password: $("#password").text().val().trim()
        };

        $.ajax("api/Users", {
            type: "POST",
            data: newUser
        }).then(
            function () {
                console.log("created new user & password");
                res.render("/login"); //is this correct? what do we do???
            }
        )
    });

});