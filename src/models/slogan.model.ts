import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Slogan {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    slogan: string

    @Column()
    image_url: string

    @Column()
    date: Date
}