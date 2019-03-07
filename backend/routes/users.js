import { Router } from 'express'
import passport from 'passport'

import * as UsersController from '../controllers/UsersController'

const router = new Router()

router.post(
  '/auth',
  passport.authenticate('google', { session: false }),
  UsersController.authGoogle
)

router.get(
  '/me',
  passport.authenticate('jwt', { session: false }),
  UsersController.me
)
export default router
