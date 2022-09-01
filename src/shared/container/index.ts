import { UserRepository } from '@modules/accounts/repositories/implementations/UserRepository'
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository'
import { ICategoriesRespository } from '@modules/cars/repositories/ICategoriesRepository'
import { CategoriesRepository } from '@modules/cars/repositories/implementations/CategoriesRepository'
import { SpecificationsRepository } from '@modules/cars/repositories/implementations/SpecificationsRepository'
import { ICreateSpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository'
import { container } from 'tsyringe'


container.registerSingleton<ICategoriesRespository>("CategoriesRepository", CategoriesRepository)
container.registerSingleton<ICreateSpecificationsRepository>("SpecificationsRepository", SpecificationsRepository)

container.registerSingleton<IUsersRepository>("UserRepository", UserRepository)