import { Controller, Get, HttpCode } from '@nestjs/common'

import { UsersService } from './users.service'

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/users')
  getData() {
    return this.usersService.getUsers()
  }
}
