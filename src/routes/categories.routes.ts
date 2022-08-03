import { Router } from 'express'
import { CategoriesRepositories } from '../modules/cars/repositories/CategoriesRepository'
import { CreateCategoryServices } from '../modules/services/CreateCategoryServices'

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepositories()

categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body

    const createCategoryServices = new CreateCategoryServices(categoriesRepository)

    createCategoryServices.execute({ name, description })
    return response.status(201).send()
})

categoriesRoutes.get('/', (request, response) => {
    const listAllCategories = categoriesRepository.list()

    return response.json(listAllCategories)
})



export { categoriesRoutes as categoriesRouter }
