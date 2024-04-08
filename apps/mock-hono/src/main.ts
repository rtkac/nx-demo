import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

import { commonApi } from "./common";

const app = new Hono();
const port = 3010;

app.use(cors());
app.basePath("/api").route("/", commonApi);

app.notFound((c) => {
	return c.json({ status: 404, message: "path not found" });
});

app.onError((err, c) => {
	console.error(`error: ${err}`);
	return c.json({ status: 500, message: err });
});

serve({ fetch: app.fetch, port });

console.log(`Server is running on port ${port}`);
