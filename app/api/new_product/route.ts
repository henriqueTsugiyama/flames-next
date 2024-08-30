import { clientConnect } from "@/app/lib/client";

type Product = {
    id: string,
    name: string,
    description: string,
    cateogry_id: string,
    embed: string,
    image_url: string,

}
export async function POST(request: Request) {
    try {        
        const payload = await request.json() as Product
        const client = await clientConnect()
        const productCreated = await client.sql`
            INSERT INTO products (id, cateogry_id, name, description, embed, image_url)
            VALUES (
                ${payload.id},
                ${payload.cateogry_id},
                ${payload.name},
                ${payload.description}, 
                ${payload.embed},
                ${payload.image_url}
            )
            ON CONFLICT (id) DO NOTHING;
        `
        console.log('Produto criado com sucesso!', productCreated)
    } catch (error) {
        console.log('Erro ao criar produto ==> ', error)
    }
}

// Insert data into the "products" table
//  const insertedCustomers = await Promise.all(
//     customers.map(
//       (customer: any) => client.sql`
//       INSERT INTO customers (id, name, email, image_url)
//       VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
//       ON CONFLICT (id) DO NOTHING;
//     `,
//     ),
//   );
 