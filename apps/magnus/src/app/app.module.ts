import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MagnusServerModule } from './server/magnus.module';
@Module({
  imports: [
    MagnusServerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
