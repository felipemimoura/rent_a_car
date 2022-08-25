import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {

    async handle(request: Request, response: Response): Promise<Response> {
        const listAllCategoriesUseCase = container.resolve(ListCategoriesUseCase)
        const listAllCategories = await listAllCategoriesUseCase.execute()

        return response.json(listAllCategories)
    }
}

export { ListCategoriesController }