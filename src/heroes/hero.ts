import { Category } from 'src/category/category';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('heroes')
export class Hero {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    active: boolean;

    @ManyToOne(() => Category, category => category.heroes)
    category: Category;
}
