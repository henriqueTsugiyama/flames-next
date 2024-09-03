import { fetchProductById } from "@/app/lib/data"
import Image from "next/image"
import { worksans } from "@/app/ui/fonts"
export default async function Page({ params }: { params: {
    id: string,
  } }) {
  const { id } = params
  const product = await fetchProductById(id)
    return (
      <main className={`flex flex-col min-h-screen`}>
          <div className='p-36 mb-24 p-8 bg-indigo-200'>
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
    </main>
    )
  }