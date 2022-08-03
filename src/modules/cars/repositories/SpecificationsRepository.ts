import { Specification } from "../model/Specification";
import { ICreateSpecificationDTO, ICreateSpecificationsRepository } from "./ISpecificationsRepository";

class SpecificationsRepository implements ICreateSpecificationsRepository {
    private specification: Specification[]

    constructor() {
        this.specification = []
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification()

        Object.assign(specification, {
            name,
            description,
            create_at: new Date()
        })

        this.specification.push(specification)
    }
}