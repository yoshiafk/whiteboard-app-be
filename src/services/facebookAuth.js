const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const findOrCreate = require('mongoose-findorcreate');

const User = require('../models/userModel');


//Use facebook strategy
module.exports = passport.use(
    new FacebookStrategy({
        //Options for strategy
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
<<<<<<< HEAD
        callbackURL: 'http://localhost:3000/auth/facebook/redirect',
=======
        callbackURL: 'https://whiteboard-team.herokuapp.com/auth/facebook/redirect',
>>>>>>> b6ee9593b84791419b15afa4cf7aee750f1b67e2
        profileFields: ['id', 'emails', 'name']
    }, async (accessToken, refreshToken, profile, done) => {
        //Passport callback function
     
        const userProfile = {
            facebookId: profile.id, 
            name: `${profile.name.givenName} ${profile.name.familyName}`,
            email: profile.emails[0]['value']
        }
        console.log(accessToken, userProfile);
    
        await User.findOrCreate({ facebookId: userProfile.id, name: userProfile.name, email: userProfile.email },
            (err, user) => {
            user.save({ validateBeforeSave: false });
<<<<<<< HEAD
            user.accessToken = accessToken;
=======
            // user.accessToken = accessToken;
>>>>>>> b6ee9593b84791419b15afa4cf7aee750f1b67e2
            done(null, user);
        })
    })
);