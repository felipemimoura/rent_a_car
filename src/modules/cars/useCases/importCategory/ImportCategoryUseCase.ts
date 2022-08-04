import fs from 'fs';
import { parse } from 'csv-parse'
import { ICategoriesRespository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    constructor(private categoryRepository: ICategoriesRespository) { }

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path)
            const categories: IImportCategory[] = []

            const parseFile = parse()

            stream.pipe(parseFile)

            parseFile.on("data", async (line) => {
                const [name, description] = line

                categories.push({ name, description })
            }).on("end", () => { fs.promises.unlink(file.path); resolve(categories) }).on('error', (error) => reject(error))
        })
    }
    async execute(file: Express.Multer.File) {
        const categories = await this.loadCategories(file)
        categories.map(async (category) => {
            const { name, description } = category

            const categoryExists = this.categoryRepository.findByName(name)

            if (!categoryExists) {
                this.categoryRepository.create({ name, description })
            }
        })

    }
}


export { ImportCategoryUseCase }