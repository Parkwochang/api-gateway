import { Test, TestingModule } from '@nestjs/testing';
import { Test12Resolver } from './test12.resolver';
import { Test12Service } from './test12.service';

describe('Test12Resolver', () => {
  let resolver: Test12Resolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Test12Resolver, Test12Service],
    }).compile();

    resolver = module.get<Test12Resolver>(Test12Resolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
