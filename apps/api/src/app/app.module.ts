import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MagnusClientModule } from './magnusClient';
import { NoteController } from './controller/note.controller';
import { NoteService } from './services/note.service';
import { LabelService } from './services/label.service';
import { LabelController } from './controller/label.controller';
@Module({
  imports: [
    MagnusClientModule.forRoot(__dirname)
  ],
  controllers: [
    AppController,
    NoteController,
    LabelController,
  ],
  providers: [
    AppService,
    NoteService,
    LabelService
  ],
})
export class AppModule { }
