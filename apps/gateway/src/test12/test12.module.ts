import { Module } from '@nestjs/common';
import { Test12Service } from './test12.service';
import { Test12Resolver } from './test12.resolver';

@Module({
  providers: [Test12Resolver, Test12Service],
})
export class Test12Module {}
