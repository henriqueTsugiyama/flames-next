'use client'
import { worksans } from '../ui/fonts';
import { fetchCategories, fetchProducts } from '../lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CategoryFields, ProductFields } from '../lib/definitions';

export default async function Page() {
    const [products, setProducts] = useState<ProductFields[]>([])
    const [categories, setCategories] = useState<CategoryFields[]>([])
    const [catSelected, setCatSelected] = useState<CategoryFields>()
    
    useEffect(() => {
        fetchProducts().then(pdts => setProducts(pdts))
         fetchCategories().then(cats => setCategories(cats))
    }, [])

    useEffect(() => {
        fetchProducts().then(pdts => setProducts(pdts))
    }, [])
    return (
        <div className='p-8 bg-indigo-200'>
            <div className='flex flex-col  justify-center items-center '>
                <p className={`${worksans.className} text-2xl`}>Loja</p>
                <p className='py-10 text-center text-lg max-w-screen-lg'>
                    Nessa seção temos um catálogo dos nossos produtos habilitados para venda ao público. <br />
                    <b> Lembrando que não realizamos vendas por e-commerce,
                    a venda de produtos e artigos pirotécnicos é proibida pela internet. Esses produtos só podem ser retirados em uma de nossas lojas físicas.
                    </b>
                </p>
            </div>
            <label htmlFor="categories">Selecione por categoria:</label>
            <select name="categories" id="choose-category">
                {categories.map((category, key) => (
                    <option value={category.id} key={key}>{category.name}</option>
                ))}
            </select>
            <div className='grid-column-wrapper-gap-2'>
                {
                    products.map((product, key) => (
                        <div key={key} className='relative'>                            
                            <div className='
                            rounded-lg
                            shadow-lg shadow-gray-600/50
                            bg-indigo-100'
                            >
                                <Link href={`/loja/${product.id}`} target='/blank'  className='absolute w-full h-full
                                flex flex-col items-center justify-center bg-transparent text-transparent rounded-lg
                                transition ease-in-out delay-800 hover:bg-gray-800/[.6] hover:text-slate-50
                                hover:cursor-pointer
                                '>
                                    <p className={`${worksans.className} text-xl`}>Veja mais</p>
                                    {/* <p className='p-8  text-md text-center'>
                                    Ainda dentro de pirotecnia, temos nossos efeitos de cascatas perfeitos para iluminar eventos e destacar painéis de patrocinadores, marcas, e times. 
                                    </p> */}
                                </Link>
                                <div className='flex flex-col items-center p-4 height-min-400'>
                                    <p className={`${worksans.className} text-lg pb-6`}>{product.name}</p>
                                    <Image
                                    src={"/undraw_visionary_technology.svg"}
                                    width={200}
                                    height={150}
                                    alt='40 anos de experiência'
                                    className='pb-10'
                                    />
                                    <p className='text-left'> R$ {product.sales_price}</p>
                                    <p className='text-left'>{product.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}