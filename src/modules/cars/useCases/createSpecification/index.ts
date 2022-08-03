import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationsController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationsUseCase";

const specificationRepository = new SpecificationsRepository()
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository)
const createSpecificationController = new CreateSpecificationsController(createSpecificationUseCase)


export { createSpecificationController }