import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany } from 'typeorm';
import { Note } from './note.entity';

/**
 * 文章标签
 */
@Entity({
    name: 'label'
})
export class Label {

    @PrimaryGeneratedColumn()
    label_id: number;

    @Column({
        type: 'varchar',
        length: 20,
        comment: '标签名字'
    })
    name: string;
    @CreateDateColumn({
        type: 'timestamptz'
    })
    create_time: Date;

    @UpdateDateColumn({
        type: 'timestamptz'
    })
    update_time: Date;

<<<<<<< HEAD
    @ManyToMany(type => Article, article => article.labels)
    articles: Article[];
=======
      @ManyToMany(type=>Note,note=>note.labels)
      articles:Note[];
>>>>>>> b645dc8ccaa0c3c9e7ef54682461be2939bf813e

}