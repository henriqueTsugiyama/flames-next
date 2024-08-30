import { worksans } from '../ui/fonts';
import { products } from '../lib/placeholder-data'
import { fetchCardData } from '../lib/data';
import Image from 'next/image';

export default async function Page() {
    const { numberOfCustomers } = await fetchCardData()

    return (
        <main className={`flex flex-col min-h-screen`}>
            <div className='pt-36 mb-24 p-8 bg-indigo-200'>
                <div className='flex flex-col  justify-center items-center '>
                    <p className={`${worksans.className} text-2xl`}>Loja</p>
                    <p className='py-10 text-center text-lg max-w-screen-lg'>
                        Nessa seção temos um catálogo dos nossos produtos habilitados para venda ao público. Lembrando que não realizamos vendas por e-commerce,
                        a venda de produtos e artigos pirotécnicos é proibida pela internet. Esses produtos só podem ser retirados em uma de nossas lojas.
                    </p>
                </div>
                <div className='grid-column-wrapper-gap-2'>
                    {
                        products.map((product, key) => (
                            <div key={key} className='relative'>                            
                                <div className='
                                min-h-96 rounded-lg
                                shadow-lg shadow-gray-600/50
                                bg-indigo-100'>
                                    <div className='absolute w-full h-full
                                        flex flex-col items-center justify-center bg-transparent text-transparent rounded-lg
                                        transition ease-in-out delay-800 hover:bg-gray-800/[.6] hover:text-slate-50
                                        hover:cursor-pointer
                                    '>
                                        <p className={`${worksans.className} text-xl`}>Cascatas</p>
                                        <p className='p-8  text-md text-center'>
                                        Ainda dentro de pirotecnia, temos nossos efeitos de cascatas perfeitos para iluminar eventos e destacar painéis de patrocinadores, marcas, e times. 
                                        </p>
                                    </div>
                                    <div className='flex flex-col items-center p-4'>
                                        <p className={`${worksans.className} text-lg pb-6`}>{product.name}</p>
                                        <Image
                                        src={"/undraw_visionary_technology.svg"}
                                        width={200}
                                        height={150}
                                        alt='40 anos de experiência'
                                        className='pb-10'
                                        />
                                        <p className='text-center'>{product.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>


            </div>
        </main>
    )
}