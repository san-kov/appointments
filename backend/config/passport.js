import passport from 'passport'
import GooglePlusStraregy from 'passport-google-plus-token'
import User from '../models/User'
import { jwtSecret, googleClientID, googleClientSecret } from './keys'
import JWTStrategy from 'passport-jwt'

passport.use(
  'jwt',
  new JWTStrategy.Strategy(
    {
      jwtFromRequest: JWTStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret
    },
    async (payload, done) => {
      try {
        const user = await User.findOne({ _id: payload.userId })

        if (!user) {
          return done(null, false)
        }

        done(null, user)
      } catch (error) {
        done(error, false)
      }
    }
  )
)

passport.use(
  'google',
  new GooglePlusStraregy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const {
          id,
          displayName,
          emails,
          _json: {
            image: { url }
          }
        } = profile
        const user = await User.findOne({
          google_id: id
        })

        if (user) {
          return done(null, user)
        }

        const newUser = await User.create({
          google_id: id,
          name: displayName,
          email: emails[0].value,
          avatar: url
        })

        done(null, newUser)
      } catch (error) {
        done(error)
      }
    }
  )
)
