import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Category } from "./category";

@Controller('category')
export class CategoryController {
    constructor(@InjectRepository(Category) private readonly categoryRepo: Repository<Category>) {

    }

    @Get()
    getCategories() {
        return this.categoryRepo.find({})
    }

    @Get(':id')
    async getCategoriesById(@Param('id') id: string) {
        const category = await this.categoryRepo.findOne({
            where: {
                id: ~~id
            }
        })

        if (!category) {
            throw new NotFoundException("Herói não encontrado")
        }

        return category;
    }

    @Post()
    async postCategory(@Body() body: Category) {
        await this.categoryRepo.save(body);

        return body;
    }

    @Delete(':id')
    async deleteCategory(@Param('id') id: string) {
        await this.categoryRepo.delete(id);

        return true;
    }


    @Patch(':id')
    async patchCategory(@Body() body: Category, @Param('id') id: string) {
        await this.categoryRepo.update(id, body)

        return body;
    }
}
