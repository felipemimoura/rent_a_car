import { Category } from "../model/Category";

interface ICreateCategoryDTO {
    name: string,
    description: string
}

class CategoriesRepositories {
    private categories: Category[]

    constructor() {
        this.categories = []
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const categoy = new Category()

        Object.assign(categoy, {
            name,
            description,
            created_at: new Date()
        })

        this.categories.push(categoy)
    }


    list(): Category[] {
        return this.categories
    }
}

export { CategoriesRepositories }