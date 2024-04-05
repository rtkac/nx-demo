import { faker } from "@faker-js/faker";
import { Injectable } from "@nestjs/common";

import { User } from "@core/types";

@Injectable()
export class UsersService {
	getUsers(): User[] {
		return Array.from({ length: 10 }, (): User => {
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
		});
	}
}
