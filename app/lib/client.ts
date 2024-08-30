const { db } = require('@vercel/postgres');


const clientConnect = async () => {
    const client = await db.connect()

    return client
}

const clientDisconnect = async (client: any) => {
    await client.end()
}

export { clientConnect, clientDisconnect }