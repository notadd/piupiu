import { Module } from '@nestjs/common';
import { MagnusClientModule } from './magnusClient';
import { NoteController } from './controller/note.controller';
import { NoteService } from './services/note.service';
import { LabelService } from './services/label.service';
import { LabelController } from './controller/label.controller';
@Module({
  imports: [
    MagnusClientModule.forRoot(__dirname),
  ],
  controllers: [
    NoteController,
    LabelController,
  ],
  providers: [
    NoteService,
    LabelService
  ],
})
export class AppModule { }
