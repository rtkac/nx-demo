import { Hono } from 'hono/tiny'

import { usersApi } from './users'

export const commonApi = new Hono().route('/common', usersApi)
