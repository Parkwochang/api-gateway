import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { Test12Module } from './test12/test12.module';

@Module({
  imports: [TestModule, Test12Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
