import { Controller, Inject, Body, Post } from '@nestjs/common';
import { NoteService } from '../services/note.service';
import { Note } from '@magnus/db';

@Controller()
export class NoteController{
    constructor(@Inject(NoteService) public readonly noteService: NoteService) { }
    @Post('save')
    async NoteSave(@Body() note:Note):Promise<any>{
        return await this.noteService.NoteSave(note);
    }
}