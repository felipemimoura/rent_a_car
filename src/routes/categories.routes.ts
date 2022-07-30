import { Router } from 'express'
import { CategoriesRepositories } from '../repositories/CategoriesRepositories'

const categoriesRouter = Router()
const categoriesRepository = new CategoriesRepositories()

categoriesRouter.post('/', (request, response) => {
    const { name, description } = request.body

    const categoryAlreadyExist = categoriesRepository.findByName(name)

    if (categoryAlreadyExist) {
        return response.status(400).json({ error: "Category already exist" })
    }

    categoriesRepository.create({ name, description })

    return response.status(201).send()
})

categoriesRouter.get('/', (request, response) => {
    const listAllCategories = categoriesRepository.list()

    return response.json(listAllCategories)
})



export { categoriesRouter }
