import { fetchProducts } from "@/app/lib/data";
import { ProductFields } from "@/app/lib/definitions";


export async function GET(request: Request): Promise<Response>{
    try {        
        const products = await fetchProducts()
        console.log('Produtos retornados!', products)

        return Response.json({ data: products, status: 'success'})
    } catch (error) {
        console.log('Erro ao criar produto ==> ', error)
        return Response.json({error, status: 500})
    }
}
