const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//Require your User Model here!
const User = require('../models/user');
// configuring Passport!
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    function (accessToken, refreshToken, profile, cb) {
      // a user has logged in via OAuth!
      // refer to the lesson plan from earlier today in order to set this up
      //console.log(profile, “<-- profile”);
      // search DB to see if user exists(profile is is google id)
      // search db for a user with this google id
      User.findOne({ googleId: profile.id }, function (err, userDoc) {
        if (err) return sb(err);
        // if exists
        if (userDoc) {
          // callback function, first arg is null, then userDoc
          return cb(null, userDoc);
          // if user foesnt exist - look at profile for these properties
        } else {
          const newUser = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
          });
          newUser.save(function (err) {
            if (err) return cb(err);
            return cb(null, newUser);
          });
        }
      });
    }
  )
);
  

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  // Find your User, using your model, and then call done(err, whateverYourUserIsCalled)
  // When you call this done function passport assigns the user document to req.user, which will
  // be availible in every Single controller function, so you always know the logged in user
  User.findById(id, function (err, userDoc) {
    done(err, userDoc);
  });
});


