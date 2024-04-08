import { Hono } from "hono";

import { usersRoutes } from "./users";

export const usersApi = new Hono().route("/users", usersRoutes);
