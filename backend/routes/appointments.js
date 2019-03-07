import { Router } from 'express'
import passport from 'passport'

import * as AppointmentsController from '../controllers/AppointmentsController'

const router = new Router()

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  AppointmentsController.getMyAppointments
)

export default router
