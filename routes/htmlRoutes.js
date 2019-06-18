

module.exports = (app) => {
  
  app.get("/", (req, res) => {
        console.log(700)
      res.render("index");
  });


  // if does not have account send to signup page
    app.get("/signup", (req, res) => {
        console.log(800) 
        res.render("signup");
      });  


  //   search and recipepuppy response route
    app.get("/search", (req, res) => {
        console.log(900)
      if (req.isAuthenticated()) {
        res.render("search", req.session.passport.user);
      } else {
        res.render("index");
      }
    });

  // fav recipes route
    app.get("/results", (req, res) => {
      if (req.isAuthenticated()) {
        res.render("results", req.session.passport.user);
      } else {
        res.render("index");
      }
    });

//    fav recipes route
  app.get("/shoppingList", (req, res) => {
    if (req.isAuthenticated()) {
      res.render("shoppingList", req.session.passport.user);
    } else {
      res.render("index");
    }
  });

  app.get("/shoppingList*", (req, res) => {
    if (req.isAuthenticated()) {
      res.render("shoppingList", req.session.passport.user);
    } else {
      res.render("index");
    }
  });
  
   // 404 route loads 404.handlebars
   app.get("../404", (req, res) => {
     res.render("404");
   });
}