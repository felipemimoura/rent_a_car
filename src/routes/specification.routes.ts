import { Router } from 'express'
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository'
import { CreateSpecificationsServices } from '../modules/cars/services/CreateSpecificationsServices'

const specificationRoutes = Router()
const specificationRepository = new SpecificationsRepository()


specificationRoutes.post('/', (request, response) => {
    const { name, description } = request.body

    const createSpecificationSerivice = new CreateSpecificationsServices(specificationRepository)

    createSpecificationSerivice.execute({ name, description })

    return response.status(201).send()

})

export { specificationRoutes as specificationRouter }