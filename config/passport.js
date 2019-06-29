// requirements
const bc = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");


module.exports = passport => {

// serialize the user
passport.serializeUser((user, cb) => {
    console.log(user);
    var userObj = { id: user.id, username: user.username, email: user.email };
    console.log(userObj, "userObj");
    cb(null, userObj);
});
// deserialize the user
passport.deserializeUser((userObj, cb) => {
    cb(null, userObj);
});

    // local signup strategy -- passport, search database to see if user already exists, and if not then add a user
    passport.use(
        'local-signup',
        new LocalStrategy({
                usernameField: 'username',
                passReqToCallback: true
            },

            (req, username, password, done) => {
                // generates a hash for the password, and salt for the password
                const generateHash = password => {
                    return bc.hashSync(password, bc.genSaltSync(8), null);
                };

                // store the user password as a hash
                const userPassword = generateHash(password);
                console.log(userPassword);
                // store the registration info as a variable
                const data = {
                    username: username,
                    email: req.body.email,
                    password: userPassword,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname
                }
                console.log(username);

                // determin when to create a new user in the database table
                // ideally this would have more robust rules for creating a new user
                db.user.create(data)
                    .then(newUser => {
                        // console.log(newUser);
                        if (!newUser) {
                            console.log("notNewUser");
                            return done(null, false);
                        }

                        if (newUser) {
                            console.log("newUser");
                            return done(console.log("created new user"));
                        }
                    });
            })
    );


    //local login - check to see if is a user. If user, log in, and if not send to signup page.
    passport.use(
        'local-login',
        new LocalStrategy({
                // by default, local strategy uses username and password
                usernameField: 'username',
                passwordField: 'password',
                passReqToCallback: true // allows us to pass back the entire request to the callback
            },

            (req, username, password, done) => {

                // compares the password the user enters at login to the stored hashed password 
                const isValidPassword = (userpass, password) => {
                    console.log(password, userpass)
                    return bc.compareSync(password, userpass);
                };

                const generateHash = password => {
                    return bc.hashSync(password, bc.genSaltSync(8), null);
                };
                const userPassword = generateHash(password);

                // looks to the database table to find a username
                db.user.findOne({
                        where: {
                            username: req.body.username,
                            // password: userPassword
                        }
                    }).then((user => {
                        if (!user) {
                            console.log("not a user");
                            console.log({
                                message: "Please signup for an account."
                            });
                            return done(null, {message: "some message"});   
                        };
                        if (!isValidPassword(user.password, password)) {
                            return done(null, {
                                message: "Oops, wrong password!"
                            });
                        }
                     
                        const userinfo = user.get();
                        console.log(userinfo, "yay!");
                        return done(null, userinfo);
                    })
                    )}
        )
    );

}