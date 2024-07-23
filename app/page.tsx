'use client'

import Image from 'next/image';
import Overlay from './ui/landing/overlay';
import Carousel from './ui/landing/carousel';
import { useEffect, useState } from "react"
import { worksans } from './ui/fonts';

export default function Page() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    console.log(dimensions)
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className={`flex min-h-screen flex-col`}>
      <div className='mb-24'>

      {/* <Body /> */}
        <Overlay label='Grupo Flames Pirotecnia' width={dimensions.width} height={dimensions.height}/>
        <div className='flex mobile-flex-wrap flex-row justify-evenly items-center
          w-full h-fit min-h-160px 
          text-white bg-gradient-to-r from-red-950 via-indigo-950 to-gray-900'>
          <div className='inline-flex flex-col justify-center p-10 h-full'>
            <p className={`${worksans.className} italic text-2xl pb-10`}>A arte de encantar</p>
            <p className='text-lg '>Somos o Grupo Flames, uma empresa especializada em efeitos especiais e pirotecnia.</p>
          </div>
          <div className='max-h-26 max-w-screen-lg min-w-96'>
            <Image
              src={"/fireworks-macau-tower.jpg"}
              width={dimensions.width}
              height={dimensions.height}
              alt='HopiHari Live Commets'
            />
          </div>
        </div>
        <div className='flex flex-col items-center w-full text-white p-10 h-fit bg-gray-900'>
          <p className={`${worksans.className} text-2xl`}>Nossa Missão</p>
          <Image
            src={"/undraw_fireworks.svg"}
            width={240}
            height={150}
            alt='40 anos de experiência'
            className='pt-10'
          />
          <p className='pt-10 text-center text-lg'>
          Desde 1985 sem acidentes de trabalho, nos compromissamos<br />
          a entregar seu serviço prezando pelas melhores práticas<br /> de segurança buscando agregar valor ao seu evento.
          </p>
        </div>
        <div className='flex mobile-flex-wrap flex-row justify-betweeen items-center
          w-full h-fit min-h-160px 
          text-white  bg-gradient-to-r from-red-950 via-indigo-950 to-gray-900'>
          <Image
            src={"/fireworks_setup.jpg"}
            width={dimensions.width > 600 ? dimensions.width/2 : dimensions.width}
            height={dimensions.height}
            alt='40 anos de experiência'
            // className='pt-10'
          />
          <div className='p-10'>
            <p className={`${worksans.className} text-2xl`}>Tecnologia</p>
            <p className='py-10 text-left text-lg'>
            Usamos diversos sistemas e tecnologias de ponta para operar os efeitos.<br />
            Nossa equipe técnica especializada, está pronta para<br />
            te atender e direcionar em diversas situações.
            </p>

            <button className='p-8 mt- 10 bg-red-400 rounded-md' onClick={()=> console.log(dimensions)}>Saiba mais</button>
          </div>
        </div>
        <div className='flex w-full text-white h-6 bg-red'>
          Carrousell de algumas fotos e link portfolio
          {/* <Carousel /> */}
        </div>
        <div  className='flex flex-col items-center w-full text-white p-10 h-fit bg-gray-900'>
          <p className={`${worksans.className} text-2xl`}>Lojas físicas</p>

          <div className='flex flex-row items-center w-full text-white p-10 h-fit '>
            <div className='flex flex-col items-center w-full text-white p-10 h-fit'>
              <p className={`${worksans.className} text-2xl`}>Santo Amaro</p>
              <Image
                src={"/undraw_fireworks.svg"}
                width={240}
                height={150}
                alt='40 anos de experiência'
                className='pt-10'
              />
              <p className='pt-10 text-center text-lg'>Loja 1</p>
              <p className='pt-10 text-center text-lg'>
              Segunda à Sexta: das 08h às 19h <br />
              Sábado: das 08h às 18h <br />
              Domingo: 10h às 15h
              </p>
            </div>
            <div className='flex flex-col items-center w-full text-white p-10 h-fit'>
              <p className={`${worksans.className} text-2xl`}>Mooca</p>
              <Image
                src={"/undraw_fireworks.svg"}
                width={240}
                height={150}
                alt='40 anos de experiência'
                className='pt-10'
              />
              <p className='pt-10 text-center text-lg'>Loja 2</p>
              <p className='pt-10 text-center text-lg'>
              Segunda à Sexta: das 08h às 19h <br />
              Sábado: das 08h às 18h <br />
              Domingo: 10h às 14h
              </p>
            </div>
            <div className='flex flex-col items-center w-full text-white p-10 h-fit'>
              <p className={`${worksans.className} text-2xl`}>Cipó</p>
              <Image
                src={"/undraw_fireworks.svg"}
                width={240}
                height={150}
                alt='40 anos de experiência'
                className='pt-10'
              />
              <p className='pt-10 text-center text-lg'>Loja 3</p>
              <p className='pt-10 text-center text-lg'>
              Segunda à Sexta: 08h às 18h <br />
              Sábado: 08h às 18h <br />
              Domingo: 08h às 13h
              </p>
            </div>
          </div>
        </div>
        <div className='flex w-full text-white h-6 bg-red'>
          Form de contato</div>
      </div>
    </main>
  );
}
