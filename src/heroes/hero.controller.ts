import { Controller, Get } from '@nestjs/common';
import { Body, Delete, Param, Patch, Post } from '@nestjs/common/decorators/http';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hero } from './hero';

@Controller('/heroes')
export class HeroController {
    constructor(@InjectRepository(Hero) private readonly heroesRepo: Repository<Hero>) {

    }

    @Get()
    getHeroes() {
        return this.heroesRepo.find({})
    }

    @Get(':id')
    async getHeroesById(@Param('id') id: string) {
        const hero = await this.heroesRepo.findOne({
            where: {
                id: ~~id
            }
        })

        if (!hero) {
            throw new NotFoundException("Herói não encontrado")
        }

        return hero;
    }

    @Post()
    async postHero(@Body() body: Hero) {
        await this.heroesRepo.save(body);

        return body;
    }

    @Delete(':id')
    async deleteHero(@Param('id') id: string) {
        await this.heroesRepo.delete(id);

        return true;
    }


    @Patch(':id')
    async patchHero(@Body() body: Hero, @Param('id') id: string) {
        await this.heroesRepo.update(id, body)

        return body;
    }
}
