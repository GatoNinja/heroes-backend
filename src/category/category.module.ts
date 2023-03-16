import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "./category";
import { CategoryController } from "./category.controller";

@Module({
    controllers: [CategoryController],
    imports: [TypeOrmModule.forFeature([Category])]
})
export class CategoryModule {

}
