import { MagnusClient, gql } from '@notadd/magnus-client';
import { Injectable } from '@nestjs/common';
import { Note } from '@magnus/db';
@Injectable()
export class NoteService {
<<<<<<< HEAD
	constructor(
		public readonly client: MagnusClient
	) { }

	/**
	 * 添加笔记
	 */
	async NoteSave(note: Note): Promise<Note> {
		return await this.client.mutate({
			mutation: gql`
            mutation NoteSave($entity:NoteInput!,$options:SaveOptions){
                noteSave(entity:$entity,options:$options){
                	note_id,
                 	title,
                 	content,
                 	create_time,
                 	update_time,
                 	labels{
						label_id,
						name,
						create_time,
						update_time
           		 	}
         	 	}
        	}
            `,
			variables: {
				"entity": {
					"title": note.title,
					"content": note.content,
					"labels": [note.labels]
				}
			}
		})
	}
=======
    constructor(
        public readonly client: MagnusClient
    ) { }
    /**
     * 添加笔记
     */
    async NoteSave(note: Note): Promise<Note> {
        return await this.client.mutate({
            mutation: gql`
             mutation NoteSave($entity:NoteInput!,$options:SaveOptions){
               noteSave(entity:$entity,options:$options){
                 note_id,
                 title,
                 content,
                 create_time,
                 update_time,
                 labels{
                    label_id,
                    name,
                    create_time,
                    update_time
      
    }
  }
}
            `,
            variables: {
                "entity": {
                    "title": note.title,
                    "content": note.content,
                    "labels": note.labels
                }
            }
        })

        
    }
>>>>>>> e1ba06e03e90a67c1273d2b928518d088bc074f9





}

