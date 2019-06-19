import { Controller, Inject, Body, Post } from '@nestjs/common';
import { NoteService } from '../services/note.service';
import { Note, Label } from '@magnus/db';
import { LabelService } from '../services/label.service';

@Controller()
export class NoteController {
    constructor(
        @Inject(NoteService) public readonly noteService: NoteService,
        @Inject(LabelService) public readonly labelService: LabelService
    ) { }

    @Post('save')
    async NoteSave(@Body() note: Note): Promise<Note> {
        for (let i = 0; i < note.labels.length; i++) {
            const res = await this.labelService.findLabelByName(note.labels[i].name);
            console.log(res)
            if (res) {
                note.labels.splice(i);
            }
        }
        console.log(note)
        return await this.noteService.NoteSave(note);
    }
}