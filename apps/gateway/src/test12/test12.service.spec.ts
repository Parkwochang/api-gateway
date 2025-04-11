import { Test, TestingModule } from '@nestjs/testing';
import { Test12Service } from './test12.service';

describe('Test12Service', () => {
  let service: Test12Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Test12Service],
    }).compile();

    service = module.get<Test12Service>(Test12Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
