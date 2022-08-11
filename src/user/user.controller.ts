import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @ApiQuery({ name: 'name', required: false })
  getUser(@Query('name') name: string): User[] {
    return this.userService.findAll(name);
  }

  @ApiOkResponse({ type: User })
  @Get(':userId')
  getUserById(@Param('userId') id: number): User {
    return this.userService.findUserById(Number(id));
  }

  @ApiCreatedResponse({ type: User })
  @Post()
  createNewUser(@Body() body: CreateUserDto) {
    return this.userService.createUser(body);
  }
}
