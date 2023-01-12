const passport = require('passport');

const LocalStrategy = require('./strategies/localStrategy');
const JwtStrategy = require('./strategies/jwtStrategy');
const GQLLocalStrategy = require('./strategies/localGqlStrategy');

passport.use(LocalStrategy);
passport.use(JwtStrategy);
passport.use(GQLLocalStrategy);
