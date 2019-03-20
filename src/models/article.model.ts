import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    image_url: string

    @Column("text")
    content: string

    @Column()
    date: Date

    @Column()
    type: number
}