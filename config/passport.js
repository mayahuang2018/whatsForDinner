module.exports = (passport, user) => {
    const bc = require("bcryptjs");
    const LocalStrategy = require("passport-local").Strategy;
    // const User = user;
    const db = require("../models");

    passport.use(
        'local-signup',
        new LocalStrategy({
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true // allows us to pass back the entire request to the callback
            },

            function (req, email, password, done) {
                var generateHash = password => {
                    return bc.hashSync(password, bc.genSaltSync(8), null);
                };

                db.users.findOne({
                    where: {
                        email: email
                    }
                }).then(users => {
                    if (users) {
                        return done(null, false, {
                            message: 'That email is already taken'
                        });
                    } else {
                        var userPassword = generateHash(password);
                        var data = {
                            email: email,
                            password: userPassword,
                            firstname: req.body.firstname,
                            lastname: req.body.lastname
                        };

                        db.users.create(data).then((newUser, created) => {
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

                db.users.findOne({
                        where: {
                            email: email
                        }
                    })
                    .then(users => {
                        if (!users) {
                            return done(null, false, {
                                message: 'Email does not exist'
                            });
                        }

                        if (!isValidPassword(user.password, password)) {
                            return done(null, false, {
                                message: 'Incorrect password.'
                            });
                        }

                        var userinfo = user.get();

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

    passport.serializeUser(function(user, cb) {
        cb(null, obj);
    });
    
    passport.deserializeUser(function(obj, cb){
        cd(null, obj);
    });
};