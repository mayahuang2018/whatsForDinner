const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bc = require("bcryptjs");
const db = require("../models");
// const flash = require("connect-flash");

 module.exports = (passport) => {
    passport.use(
        'local-signup',
        new LocalStrategy({
                usernameField: 'username',
                passReqToCallback: true
            },

            (req, username, password, done) => {
                const generateHash = password => {
                    return bc.hashSync(password, bc.genSaltSync(8), null);
                };

                db.User.findOne({
                    where: {
                        username: req.body.username
                    }
                }).then((user, err) => {
                    if (user) {
                        // return done(null, false, {
                        //     message: 'That email is already taken'
                        // });
                    return done(null, false, {message: "That username is already taken."})
                    } else {
                        const userPassword = generateHash(password);
                        const data = {
                            username: username,
                            email: req.body.email,
                            password: userPassword,
                            firstname: req.body.firstname,
                            lastname: req.body.lastname
                        };

                        db.User.create(data).then((newUser, created) => {
                            console.log(data);
                            if (!newUser) {
                                return done(null, false);
                            }

                            if (newUser) {
                                return done(newUser, console.log("created new user"));
                            }
                        });
                    }
                });
            }
        )
    );

    //LOCAL SIGNIN
    passport.use(
        'local-login',
        new LocalStrategy({
                // by default, local strategy uses username and password, we will override with email
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true // allows us to pass back the entire request to the callback
            },

            (req, email, password, done) => {

                const isValidPassword = (userpass, password) => {
                    return bCrypt.compareSync(password, userpass);
                };

                db.User.findOne({
                        where: {
                            username: req.body.username
                        }
                    })
                    .then((user, err, flash) => {
                        if (!user) {
                            return done(null, false, {message: "That username is already taken."});
                        };
                        if (!isValidPassword(users.password, password)) {
                            return done(null, false, {message: "Oops, wrong password!"});
                        };

                        const userinfo = users.get();

                        return done(null, userinfo);
                    })
                    .catch(err => {
                        console.log('Error:', err);

                        return done(null, false, {
                            message: 'Something went wrong with your Signin'
                        });
                    });
            }
        )
    );

    passport.serializeUser(function(users, cb) {
        cb(null, user.id);
    });
    
    passport.deserializeUser(function(obj, cb){
        cd(null, obj);
    });

 }
