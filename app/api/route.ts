export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
    const payload = {
        data: {
            name: 'henrique',
            age: 25
        },
        status: 'success'
    }
    return  Response.json(payload)
  
}
