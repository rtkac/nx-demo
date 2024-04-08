import { faker } from "@faker-js/faker";
import { Hono } from "hono";

import { User } from "@core/types";

export const usersRoutes = new Hono().get("/", (c) => {
	// c.status(503);
	// return c.json({ message: "Outage in progress..." });

	return c.json(
		Array.from({ length: 10 }, (): User => {
			return {
				id: faker.string.uuid(),
				name: faker.internet.userName(),
				username: faker.person.fullName(),
				email: faker.internet.email(),
				address: {
					street: faker.location.street(),
					suite: faker.location.buildingNumber(),
					city: faker.location.city(),
					zipcode: faker.location.zipCode(),
					geo: {
						lat: String(faker.location.latitude()),
						lng: String(faker.location.longitude()),
					},
				},
				phone: faker.phone.number(),
				website: `${faker.internet.domainName()}${faker.internet.domainSuffix()}`,
				company: {
					name: faker.company.name(),
					catchPhrase: faker.company.catchPhrase(),
					bs: faker.company.buzzPhrase(),
				},
			};
		}),
	);
});
