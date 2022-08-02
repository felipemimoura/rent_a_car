import { ICategoriesRespository } from "../cars/repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string
}

class CreateCategoryServices {
    constructor(private categoriesRepository: ICategoriesRespository) { }
    execute({ name, description }: IRequest): void {
        const categoryAlreadyExist = this.categoriesRepository.findByName(name)

        if (categoryAlreadyExist) {
            throw new Error("Category already exist")
        }

        this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoryServices };
