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
    async noteSave(@Body() note: Note): Promise<Note> {
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
    
    @Post(':note_id')
    async noteFineOne(@Body() body:{note_id:number}):Promise<any>{
        return await this.noteService.NoteFindOne(body);
    }
}