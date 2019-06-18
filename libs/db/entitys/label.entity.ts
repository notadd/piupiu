import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany } from 'typeorm';
import { Note } from './note.entity';

/**
 * 文章标签
 */
@Entity({
    name:'label'
})
export class Label{

    @PrimaryGeneratedColumn()
     label_id:number;

     @Column({
         type:'varchar',
         length:20,
         comment:'标签名字'
     })
      name:string;
      @CreateDateColumn({
        type: 'timestamptz'
    })
      create_time: Date;

    @UpdateDateColumn({
        type: 'timestamptz'
    })
      update_time: Date;

      @ManyToMany(type=>Note,note=>note.labels)
      articles:Note[];

}