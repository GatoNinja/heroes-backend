import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hero } from './hero';
import { HeroController } from './hero.controller';

@Module({
    controllers: [HeroController],
    imports: [TypeOrmModule.forFeature([Hero])]
})
export class HeroModule { }
