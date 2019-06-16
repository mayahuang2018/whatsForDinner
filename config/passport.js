const bc = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

module.exports = function (passport) {

    // local signup strategy -- password, search database to see if user already exists, and if not then add a user
    passport.use(
        'local-signup',
        new LocalStrategy({
                usernameField: 'username',
                passReqToCallback: true
            },

            function (req, username, password, done) {
                const generateHash = password => {
                    return bc.hashSync(password, bc.genSaltSync(8), null);
                };

                const userPassword = generateHash(password);
                console.log(userPassword);
                const data = {
                    username: username,
                    email: req.body.email,
                    password: userPassword,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname
                }
                console.log(username);

                db.user.create(data)
                    .then(newUser => {
                        // console.log(newUser);
                        if (!newUser) {
                            return done(null, false);
                        }

                        if (newUser) {
                            return done(console.log("created new user"));
                        }
                    });
            })
    );


    //local login - check to see is a user, give error hints. If user, log in, and if not send to signup page.
    passport.use(
        'local-login',
        new LocalStrategy({
                // by default, local strategy uses username and password, we will override with email
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true // allows us to pass back the entire request to the callback
            },

            function (req, password, done) {

                const isValidPassword = function (userpass, password) {
                    return bCrypt.compareSync(password, userpass);
                };

                db.user.findOne({
                        where: {
                            username: req.body.username
                        }
                    }), (function (user) {
                        if (!user) {
                            return done(null, false, {
                                message: "That username is already taken."
                            });
                        };
                        if (!isValidPassword(users.password, password)) {
                            return done(null, false, {
                                message: "Oops, wrong password!"
                            });
                        };

                        const userinfo = users.get();

                        return done(null, userinfo);
                    })
                    .catch(function (err) {
                        console.log('Error:', err);

                        return done(null, false, {
                            message: 'Something went wrong with your Login'
                        });
                    });
            }
        )
    );


    // serialize and deserialize User
    passport.serializeUser(function (user, cb) {
        cb(null, user.id);
    });

    passport.deserializeUser(function (user, cb) {
        cb(null, user);
    });
}