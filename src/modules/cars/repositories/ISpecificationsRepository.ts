interface ICreateSpecificationDTO {
    name: string;
    description: string;

}

interface ICreateSpecificationsRepository {
    create({ name, description }: ICreateSpecificationDTO): void
}

export { ICreateSpecificationsRepository, ICreateSpecificationDTO }