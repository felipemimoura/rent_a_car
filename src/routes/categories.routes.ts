import { Router } from 'express'
import { Category } from '../model/Category'
import { CategoriesRepositories } from '../repositories/CategoriesRepositories'

const categoriesRouter = Router()
const categoriesRepository = new CategoriesRepositories()

categoriesRouter.post('/', (request, response) => {
    const { name, description } = request.body

    categoriesRepository.create({ name, description })

    response.status(201).send()
})



export { categoriesRouter }