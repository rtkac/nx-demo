import { Hono } from 'hono/tiny'

import { usersRoutes } from './users'

export const usersApi = new Hono().route('/users', usersRoutes)
