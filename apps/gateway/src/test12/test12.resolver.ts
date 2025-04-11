import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Test12Service } from './test12.service';
import { CreateTest12Input } from './dto/create-test12.input';
import { UpdateTest12Input } from './dto/update-test12.input';

@Resolver('Test12')
export class Test12Resolver {
  constructor(private readonly test12Service: Test12Service) {}

  @Mutation('createTest12')
  create(@Args('createTest12Input') createTest12Input: CreateTest12Input) {
    return this.test12Service.create(createTest12Input);
  }

  @Query('test12')
  findAll() {
    return this.test12Service.findAll();
  }

  @Query('test12')
  findOne(@Args('id') id: number) {
    return this.test12Service.findOne(id);
  }

  @Mutation('updateTest12')
  update(@Args('updateTest12Input') updateTest12Input: UpdateTest12Input) {
    return this.test12Service.update(updateTest12Input.id, updateTest12Input);
  }

  @Mutation('removeTest12')
  remove(@Args('id') id: number) {
    return this.test12Service.remove(id);
  }
}
