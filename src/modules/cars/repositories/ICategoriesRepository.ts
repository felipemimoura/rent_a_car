import { Category } from "../entities/Category";

interface ICreateCategoryDTO {
    name: string,
    description: string
}

interface ICategoriesRespository {
    findByName(name: string): Promise<Category>
    list(): Promise<Category[]>
    create({ name, description }): Promise<void>
}

export { ICategoriesRespository, ICreateCategoryDTO }