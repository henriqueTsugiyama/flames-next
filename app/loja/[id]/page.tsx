import { fetchProductById } from "@/app/lib/data"
import Image from "next/image"
import { worksans } from "@/app/ui/fonts"
export default async function Page({ params }: { params: {
    id: string,
  } }) {
  const { id } = params
  const product = await fetchProductById(id)
    return (
      <div className='flex flex-col h-screen items-center justify-center p-8 bg-indigo-200'>
          <p className={`${worksans.className} text-2xl pb-6`}>{product.name}</p>
          <Image
          src={"/undraw_visionary_technology.svg"}
          width={300}
          height={150}
          alt='40 anos de experiência'
          className='pb-10'
          />
          <div className="text-center w-1/2">
            <p className='text-lg pb-10'> R$ {product.sales_price}</p>
            <p className='text-lg'>{product.description}</p>
          </div>
      </div>
    )
  }