import { MagnusClient, gql } from '@notadd/magnus-client';
import { Injectable } from '@nestjs/common';
import { Note } from '@magnus/db';
import { LabelService } from './label.service';

@Injectable()
export class NoteService {
	constructor(
		public readonly client: MagnusClient,
		public readonly labelService: LabelService
	) { }

	/**
	 * 添加笔记
	 */
	async NoteSave(note: Note): Promise<Note> {
		return await this.client.mutate({
			mutation: gql`
            mutation NoteSave($entity:NoteInput!,$options:SaveOptions){
                noteSave(entity:$entity,options:$options){
					note_id, title, content, create_time, update_time, 
					labels{
						label_id, name, create_time, update_time
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

	/**
	 * 修改笔记
	 */
	async updateNote(note: Note): Promise<Note> {
		return await this.client.mutate({
			mutation: gql`
            mutation NoteSave($entity:NoteInput!,$options:SaveOptions){
                noteSave(entity:$entity,options:$options){
					note_id, title, content, create_time, update_time, 
					labels{
						label_id, name, create_time, update_time
           		 	}
         	 	}
        	}
            `,
			variables: {
				"entity": {
					"note_id": note.note_id,
					"title": note.title,
					"content": note.content,
					"labels": note.labels
				}
			}
		})
	}
	
	/**
	 * @param where 根据笔记id查询
	 */
	async NoteFindOne(where: Partial<Note>): Promise<Note> {
		const result = await this.client.query({
			query: gql`
			query NoteFindOne($options:NoteFindOneOptions!){
  			    noteFindOne(options:$options){
    				 note_id,
                     title,
                     content,
                     create_time,
    				 update_time,
    				 labels{
                         label_id,
                         name
        }
    }
}
			`,
			variables: {
				"options": {
					"where": {
						"note_id": where.note_id
					}
				}
			}
		});
		return result.data;

	}
}
