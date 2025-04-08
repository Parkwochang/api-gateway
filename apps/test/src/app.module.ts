import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), OrderModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
