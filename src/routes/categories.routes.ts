import { Router } from 'express'

const categoriesRouter = Router()

const categories = []

categoriesRouter.post('/categories', (request, response) => {
    const { name, description } = request.body

    categories.push({
        name,
        description
    })

    response.status(201).send()
})



export { categoriesRouter }