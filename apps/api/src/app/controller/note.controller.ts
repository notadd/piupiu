import { Controller, Inject, Body, Post } from '@nestjs/common';
import { NoteService } from '../services/note.service';
import { Note } from '@magnus/db';
import { LabelService } from '../services/label.service';

@Controller()
export class NoteController {
    constructor(
        @Inject(NoteService) public readonly noteService: NoteService,
        @Inject(LabelService) public readonly labelService: LabelService
    ) { }

    @Post('save')
<<<<<<< HEAD
    async NoteSave(@Body() note: Note): Promise<Note> {
        for(let label of note.labels) {
            const res = await this.labelService.findLabelByName(label.name);
            console.log(res)
            if (res) {
                console.log('-------')
                label = undefined;
            } 
        }

        // note.labels.forEach(label => {
        //     const res = this.labelService.findLabelByName(label.name);
        //     console.log(res)
        //     if (res) {
        //         label.name = null;
        //     }
        // })
        console.log(note)
=======
    async NoteSave(@Body() note: Note): Promise<any> {
       // console.log(note)
>>>>>>> 18093372de70798900d09c05d1ed7972df0d619a
        return await this.noteService.NoteSave(note);
    }
}