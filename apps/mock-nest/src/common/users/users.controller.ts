import { Controller, Get, HttpCode, Post } from "@nestjs/common";

import { UsersService } from "./users.service";

@Controller()
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get("/users")
	// @HttpCode(503)
	getData() {
		// return {
		// 	message: "Outage in progress...",
		// };
		return this.usersService.getUsers();
	}
}
