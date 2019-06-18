import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MagnusClientModule } from './magnusClient';
@Module({
  imports: [
    MagnusClientModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
