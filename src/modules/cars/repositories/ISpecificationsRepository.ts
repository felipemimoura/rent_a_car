import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;

}

interface ICreateSpecificationsRepository {
    create({ name, description }: ICreateSpecificationDTO): void
    findByName(name: string): Specification
}

export { ICreateSpecificationsRepository, ICreateSpecificationDTO }