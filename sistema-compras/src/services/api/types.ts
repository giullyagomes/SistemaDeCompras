
interface ProductType {
    name: string,
    price: number,
    photoUrl: string,
    description: string,
    salesLink: string
    objectId: string
}

interface ResultData {
    data: {
        results: ProductType[]
    }
}

export type { ResultData, ProductType };