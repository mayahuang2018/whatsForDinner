

module.exports = app => {
  
    app.get("/", (req, res) => {
          console.log(700)
        res.render("index");
    });

    app.get("/index", (req, res) => {
      res.render("index");
  });
  
    // displays login page
      app.get("/login", (req, res) => {
        res.render("login");
    });
  
    // displays signup page
    app.get("/signup", (req, res) => {
        res.render("signup")
    });
  
    // if does not have account send to signup page
      app.get("/signup", (req, res) => {
          console.log(800);
          res.render("signup");
        });  
  
    //   search and recipepuppy response route
      app.get("/search", (req, res) => {
          console.log(900);
        if (req.isAuthenticated()) {
          res.render("search", req.session.passport.user);
        } else {
          res.render("index");
        }
      });
  
    // fav recipes route
      app.get("/favRecipes", (req, res) => {
        console.log(1000);
        if (req.isAuthenticated()) {
          res.render("favRecipes", req.session.passport.user);
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
  
     console.log("htmlRoutes available");
  };