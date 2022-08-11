import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private users: any = [
    { id: 0, name: 'Keigo' },
    { id: 1, name: 'kirari' },
    { id: 2, name: 'rin' },
  ];

  findAll(name?: string) {
    if (name) {
      return this.users.filter((user) => user.name === name);
    }
    return this.users;
  }

  findUserById(userId: number) {
    return this.users.find((user) => user.id === userId);
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser = { id: Date.now(), ...createUserDto };

    this.users.push(newUser);

    return newUser;
  }
}
