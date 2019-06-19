import { Controller, Inject, Body, Post, Param, Delete } from '@nestjs/common';
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
        return await this.noteService.noteSave(note);
    }
    
    @Post(':note_id')
    async noteFineOne(@Body() body:{note_id:number}):Promise<any>{
        return await this.noteService.noteFindOne(body);
    }
    @Delete(':note_id')
    async noteDelete(@Param('note_id') note_id:number):Promise<any>{
        return await this.noteService.noteDelete({note_id});
    }
}