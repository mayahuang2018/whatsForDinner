// const mysql = require("mysql2");


module.exports = (passport, users) => {

const LocalStrategy = require("passport-local").Strategy;
const bc = require("bcryptjs");
const db = require("../models");
const User = require("../models/users");
        
    passport.use(
        'local-signup',
        new LocalStrategy({
                usernameField: 'username',
            },

            function (req, username, password, done) {
                const generateHash = password => {
                    return bc.hashSync(password, bc.genSaltSync(8), null);
                };

                db.User.findOne({
                    where: {
                        email: email
                    }
                }).then(User => {
                    if (User) {
                        return done(null, false, {
                            message: 'That username is already taken'
                        });
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
                                return done(null, newUser);
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

            function (req, email, password, done) {

                var isValidPassword = (userpass, password) => {
                    return bCrypt.compareSync(password, userpass);
                };

                db.User.findOne({
                        where: {
                            email: email
                        }
                    })
                    .then(User => {
                        if (!User) {
                            return done(null, false, {
                                message: 'Email does not exist'
                            });
                        }

                        if (!isValidPassword(user.password, password)) {
                            return done(null, false, {
                                message: 'Incorrect password.'
                            });
                        }

                        var userinfo = users.get();

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
        cb(null, obj);
    });
    
    passport.deserializeUser(function(obj, cb){
        cd(null, obj);
    });
};