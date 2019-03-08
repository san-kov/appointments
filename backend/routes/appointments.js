import { Router } from 'express'
import passport from 'passport'

import * as AppointmentsController from '../controllers/AppointmentsController'

const router = new Router()

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  AppointmentsController.getMyAppointments
)

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  AppointmentsController.addAppointment
)

export default router
