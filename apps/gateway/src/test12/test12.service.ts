import { Injectable } from '@nestjs/common';
import { CreateTest12Input } from './dto/create-test12.input';
import { UpdateTest12Input } from './dto/update-test12.input';

@Injectable()
export class Test12Service {
  create(createTest12Input: CreateTest12Input) {
    return 'This action adds a new test12';
  }

  findAll() {
    return `This action returns all test12`;
  }

  findOne(id: number) {
    return `This action returns a #${id} test12`;
  }

  update(id: number, updateTest12Input: UpdateTest12Input) {
    return `This action updates a #${id} test12`;
  }

  remove(id: number) {
    return `This action removes a #${id} test12`;
  }
}
