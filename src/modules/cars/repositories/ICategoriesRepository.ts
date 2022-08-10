import { Category } from "../entities/Category";

interface ICreateCategoryDTO {
    name: string,
    description: string
}

interface ICategoriesRespository {
    findByName(name: string): Category
    list(): Category[]
    create({ name, description }): void
}

export { ICategoriesRespository, ICreateCategoryDTO }