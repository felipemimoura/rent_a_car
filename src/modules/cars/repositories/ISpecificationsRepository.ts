import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;

}

interface ICreateSpecificationsRepository {
    create({ name, description }: ICreateSpecificationDTO): Promise<void>
    findByName(name: string): Promise<Specification>
}

export { ICreateSpecificationsRepository, ICreateSpecificationDTO }