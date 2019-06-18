import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MagnusClientModule } from './magnusClient';
import { NoteController } from './controller/note.controller';
import { NoteService } from './services/note.service';
@Module({
  imports: [
    MagnusClientModule.forRoot(__dirname)
  ],
  controllers: [
    AppController,
    NoteController
  ],
  providers: [
    AppService,
    NoteService
  ],
})
export class AppModule { }
