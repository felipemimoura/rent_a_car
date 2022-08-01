import { Router } from 'express'
import { CategoriesRepositories } from '../repositories/CategoriesRepositories'
import { CreateCategoryServices } from '../services/CreateCategoryServices'

const categoriesRouter = Router()
const categoriesRepository = new CategoriesRepositories()

categoriesRouter.post('/', (request, response) => {
    const { name, description } = request.body

    const createCategoryServices = new CreateCategoryServices(categoriesRepository)

    createCategoryServices.execute({ name, description })
    return response.status(201).send()
})

categoriesRouter.get('/', (request, response) => {
    const listAllCategories = categoriesRepository.list()

    return response.json(listAllCategories)
})



export { categoriesRouter }
