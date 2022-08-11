import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ICreateSpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepository implements ICreateSpecificationsRepository {
    private specification: Specification[]

    constructor() {
        this.specification = []
    }


    async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
        const specification = new Specification()

        Object.assign(specification, {
            name,
            description,
            create_at: new Date()
        })

        this.specification.push(specification)
    }

    findByName(name: string): Specification {
        const specification = this.specification.find(specification => specification.name === name)
        return specification
    }
}

export { SpecificationsRepository }