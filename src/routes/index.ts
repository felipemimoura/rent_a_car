import { Router } from 'express'
import { authRouter } from './auth.routes'
import { categoriesRouter } from './categories.routes'
import { specificationRouter } from './specification.routes'
import { usersRouter } from './users.routes'

const router = Router()

router.use("/categories", categoriesRouter)
router.use("/specification", specificationRouter)
router.use("/users", usersRouter)
router.use(authRouter)


export { router }