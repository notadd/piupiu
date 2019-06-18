import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { Label } from './label.entity';
/**
 * 文章
 */
@Entity({
    name: 'note'
})
export class Note {

    @PrimaryGeneratedColumn()
    note_id: number;

    @Column({
        type: 'varchar',
        length: 50,
        comment: '标题'
    })
    title: string;

    @Column({
        type: 'text',
        comment: '内容'
    })
    content: string;

    @CreateDateColumn({
        type: 'timestamptz'
    })
    create_time: Date;

    @UpdateDateColumn({
        type: 'timestamptz'
    })
    update_time: Date;

    // 多对多
    @ManyToMany(type => Label, label => label.articles)
    @JoinTable({
        name: 'article_label'
    })
    labels: Label[];

}