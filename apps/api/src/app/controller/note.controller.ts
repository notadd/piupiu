import { Controller, Inject, Body, Post, Param, Delete } from '@nestjs/common';
import { NoteService } from '../services/note.service';
import { Note, Label } from '@magnus/db';
import { LabelService } from '../services/label.service';

@Controller('note')
export class NoteController {
    constructor(
        @Inject(NoteService) public readonly noteService: NoteService,
        @Inject(LabelService) public readonly labelService: LabelService
    ) { }

    @Post('save')
    async saveNote(@Body() note: Note): Promise<Note> {
        if (note.labels) {
            note.labels = await this.labelService.inspectLabel(note.labels);
        }
        console.log(note);
        return await this.noteService.saveNote(note);
    }

    @Post('update')
    async updateNote(@Body() note: Note): Promise<Note> {
        note.labels = await this.labelService.inspectLabel(note.labels);
        return await this.noteService.updateNote(note);
    }

    @Post('query')
    async findOneNote(@Body() body: {note_id: number}):Promise<any>{
        console.log(body)
        return await this.noteService.findOneNote(body);
    }
    @Delete(':note_id')
    async deleteNote(@Param('note_id') body:{note_id:number}):Promise<any>{
        return await this.noteService.deleteNote(body);
    }
}