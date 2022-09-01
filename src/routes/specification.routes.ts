import { CreateSpecificationsController } from '@modules/cars/useCases/createSpecification/CreateSpecificationController'
import { Router } from 'express'

const specificationRoutes = Router()



const createSpecificationsController = new CreateSpecificationsController()
specificationRoutes.post('/', createSpecificationsController.handle)

export { specificationRoutes as specificationRouter }
