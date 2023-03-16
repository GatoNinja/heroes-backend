import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category/category';
import { CategoryModule } from './category/category.module';
import { Hero } from './heroes/hero';
import { HeroModule } from './heroes/hero.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'heroes.sqlite',
            synchronize: true,
            entities: [Hero, Category],
        }),
        HeroModule,
        CategoryModule
    ],
})
export class AppModule { }
