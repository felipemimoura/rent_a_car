import { Router } from 'express'
import { categoriesRouter } from './categories.routes'
import { specificationRouter } from './specification.routes'

const router = Router()

router.use("/categories", categoriesRouter)
router.use("/specification", specificationRouter)


export { router }