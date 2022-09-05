import { Router } from 'express'
import { CreateSpecificationsController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController'

const specificationRoutes = Router()



const createSpecificationsController = new CreateSpecificationsController()
specificationRoutes.post('/', createSpecificationsController.handle)

export { specificationRoutes as specificationRouter }
