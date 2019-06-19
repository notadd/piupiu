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
<<<<<<< HEAD
        note.labels = await this.labelService.inspectLabel(note.labels);
        console.log(note);
=======
        for (let i = 0; i < note.labels.length; i++) {
            const res = await this.labelService.findLabelByName(note.labels[i].name);
            console.log(res)
            if (res) {
                note.labels.splice(i);
            }
        }
        console.log(note)
>>>>>>> 3065799aa216b53c17abef2738f83785300adfd9
        return await this.noteService.noteSave(note);
    }

    @Post('update')
    async noteUpdate(@Body() note: Note): Promise<Note> {
        note.labels = await this.labelService.inspectLabel(note.labels);
        return await this.noteService.updateNote(note);
    }

    @Post(':note_id')
<<<<<<< HEAD
    async noteFineOne(@Body() body: { note_id: number }): Promise<any> {
        return await this.noteService.NoteFindOne(body);
    }
    @Delete(':note_id')
    async NoteDelete(@Param('note_id') note_id: number): Promise<any> {
        return await this.noteService.NoteDelete({ note_id });
=======
    async noteFineOne(@Body() body:{note_id:number}):Promise<any>{
        return await this.noteService.noteFindOne(body);
    }
    @Delete(':note_id')
    async noteDelete(@Param('note_id') note_id:number):Promise<any>{
        return await this.noteService.noteDelete({note_id});
>>>>>>> 3065799aa216b53c17abef2738f83785300adfd9
    }
}