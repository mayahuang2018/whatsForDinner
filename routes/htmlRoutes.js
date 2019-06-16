

module.exports = (app) => {
  
    app.get("/", (req, res) => {
          console.log(700)
        res.render("index");
    });
  
    
    // if does not have account send to signup page
      app.get("/signup", (req, res) => {
          console.log(800)
        if(req.isAuthenticated()) {
          var user = {
            id: req.session.passport.user,
            hasAccount: req.Authenticated()
          }
          console.log(user)
          res.redirect("index", user);
        } else {
        res.render("signup");
      }
    });  
  
  
    //   search and recipepuppy response route
      app.get("/search", (req, res) => {
          console.log(900)
        if (req.isAuthenticated()) {
          res.render("search");
        } else {
          res.render("index");
        }
      });
  
    // fav recipes route
      app.get("/results", (req, res) => {
        if (req.isAuthenticated()) {
          res.render("results");
        } else {
          res.render("index");
        }
      });
  
  //    fav recipes route
    app.get("/shoppingList", (req, res) => {
      if (req.isAuthenticated()) {
        res.render("shoppingList");
      } else {
        res.render("index");
      }
    }); 
    
    
    //    fav recipes route
    app.get("/shoppingList*", (req, res) => {
      if (req.isAuthenticated()) {
        res.render("shoppingList");
      } else {
        res.render("index");
      }
    });
  
   
     // 404 route loads 404.handlebars
     app.get("../404", (req, res) => {
       res.render("404");
     });
}