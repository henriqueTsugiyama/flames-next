'use client'

import Image from 'next/image';
import Overlay from './ui/landing/overlay';
import Carousel from './ui/landing/carousel';
import Contact from './ui/forms/contact';
import { useEffect, useState } from "react"
import { worksans } from './ui/fonts';
import Link from 'next/link';
import clsx from 'clsx';

const slides = [
  '/videos/hotel_nacional2019_fogos.mp4',
  '/iguape-skypaper.jpg',
  '/reveillon-recife.jpg',
  '/hopihari_live_cherry.jpeg',
  '/fireworks-macau-tower.jpg',

]

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

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className={`flex min-h-screen flex-col`}>
      <div className='my-24'>
        <Overlay label='A arte de encantar'
        description='Somos o Grupo Flames, uma empresa \nespecializada em efeitos especiais e pirotecnia.'
        isVideo={false}
        url={'/videos/hotel_nacional2019_cascata.mp4'}
        width={dimensions.width} height={dimensions.height}/>
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
          Desde 1985 atuando no mercado, nos compromissamos<br />
          a entregar seu serviço prezando pelas melhores práticas<br />
          de segurança e agregar valor ao seu evento.
          </p>
        </div>
        <div className='flex mobile-flex-wrap flex-row justify-betweeen items-center
          w-full h-fit min-h-160px 
          text-white  bg-gradient-to-r from-red-950 via-indigo-950 to-gray-900'>
          <Image
            src={"/fireworks_setup.jpg"}
            width={dimensions.width > 780 ? dimensions.width/2 : dimensions.width}
            height={dimensions.height}
            alt='40 anos de experiência'
          />
            <div
                className={clsx('inline-flex flex-col items-start w-full p-10 h-fit',
                {
                    'items-start': dimensions.width > 780,
                    'items-center': dimensions.width < 780,
                }
                )}>
                    <p className={`${worksans.className} text-2xl`}>Tecnologia</p>
                    <p className={clsx('py-10 text-lg',
                    {
                        'text-left': dimensions.width > 780,
                        'text-center': dimensions.width < 780,
                    }
                    )}>
                        Usamos diversos sistemas e tecnologias
                        de ponta para operar os efeitos. <br />
                        Nossa equipe técnica especializada, está pronta para te atender
                        e direcionar em diversas situações.
                    </p>
                    <Link href="/estrutura" className='p-8 mt-6 mb-8 bg-red-400 rounded-md'>Saiba mais</Link>
                </div>
        </div>
        <div className='
        flex flex-col items-center justify-center text-white p-10 h-fit 
        bg-gradient-to-b from-gray-950 via-gray-900 to-indigo-950
        '
        >
            <p className={`${worksans.className} text-center italic text-2xl pb-10`}>Eventos</p>
            <Carousel slides={slides} autoSlide={true} autoSlideInterval={1000}>
            {
              slides.map((slide, i) => {
                if (i >= 1) {
                  return (<Image
                          key={i}
                          src={slide}
                          width={dimensions.width}
                          height={400}
                          alt='carousel picture'
                        />)
                } else {
                  return (
                    <video  key={i} width={dimensions.width} height={400} src={slide} autoPlay muted loop />
                  )
                }
              })
            }  
          </Carousel>
          <Link href="/portfolio" className='p-8 mt-10 bg-red-400 rounded-md'>Portfólio completo</Link>
        </div>
        <div  className='flex flex-col items-center w-full text-white p-10 h-fit bg-gray-900'>
          <p className={`${worksans.className} text-2xl`}>Lojas físicas</p>
          <p className='pt-10 text-center text-lg'>
          Além da nossa área de efeitos especiais, temos também lojas físicas para revenda<br /> de produtos seguramente habilitados para o público.
          </p>

          <div className='flex flex-row mobile-flex-wrap items-center w-full text-white p-10 h-fit '>
            <div className='flex flex-col items-center w-full text-white p-10 h-fit'>
              <p className={`${worksans.className} text-center text-2xl pb-10`}>Santo Amaro</p>
              <a href="https://g.co/kgs/oWMmWTa" target='/blank' className='relative'>
                <div className='absolute w-full h-full
                  flex items-center justify-center bg-transparent text-transparent rounded-md
                  transition ease-in-out delay-800 hover:bg-gray-400/[.6] hover:text-slate-50
                  '>
                  Endereço
                </div>                
                <Image
                  src={"/undraw_map_dark.svg"}
                  width={180}
                  height={80}
                  alt='40 anos de experiência'
                  className=''
                />
              </a>
              {dimensions.width < 500 ?
                (<p className='pt-10 text-center text-lg'>
                Segunda à Sexta:<br />09h às 18h <br />
                Sábado:<br />09h às 16h <br />
                Domingo:<br />Fechado
                </p>)
                :
               ( <p className='pt-10 text-center text-lg'>
                Segunda à Sexta: 09h às 18h <br />
                Sábado: 09h às 16h <br />
                Domingo: Fechado
                </p>)
              }
            </div>
            <div className='flex flex-col items-center w-full text-white p-10 h-fit'>
              <p className={`${worksans.className} text-2xl pb-10`}>Mooca</p>
              <a href="https://g.co/kgs/MJ9heAX" target='/blank' className='relative'>                
                <div className='absolute w-full h-full
                  flex items-center justify-center bg-transparent text-transparent rounded-md
                  transition ease-in-out delay-800 hover:bg-gray-400/[.6] hover:text-slate-50
                  '>
                  Endereço
                </div>
                <Image
                  src={"/undraw_map_dark.svg"}
                  width={180}
                  height={80}
                  alt='40 anos de experiência'
                  className=''
                />
              </a>
              {dimensions.width < 500 ?
              ( <p className='pt-10 text-center text-lg'>
                Segunda à Sexta:<br />09h30 às 18h30 <br />
                Sábado:<br />10h às 15h <br />
                Domingo:<br />Fechado
                </p>)
                :
              (<p className='pt-10 text-center text-lg'>
                Segunda à Sexta: 09h30 às 18h30 <br />
                Sábado: 10h às 15h <br />
                Domingo: Fechado
                </p>)
              }
            </div>
            <div className='flex flex-col items-center w-full text-white p-10 h-fit'>
              <p className={`${worksans.className} text-2xl pb-10`}>Cipó</p>
              <a href="https://g.co/kgs/KCTgU4N" target='/blank' className='relative'>
                <div className='absolute w-full h-full
                  flex items-center justify-center bg-transparent text-transparent rounded-md
                  transition ease-in-out delay-800 hover:bg-gray-400/[.6] hover:text-slate-50
                  '>
                  Endereço
                </div>
                <Image
                  src={"/undraw_map_dark.svg"}
                  width={180}
                  height={80}
                  alt='40 anos de experiência'
                />
              </a>
              {dimensions.width < 500 ?
              (<p className='pt-10 text-center text-lg'>
              Segunda à Sexta:<br />09h às 17h30 <br />
              Sábado:<br />09h às 15h <br />
              Domingo:<br />Fechado
              </p>)
              :
              (<p className='pt-10 text-center text-lg'>
              Segunda à Sexta: 09h às 17h30 <br />
              Sábado: 09h às 15h <br />
              Domingo: Fechado
              </p>)
              }
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center w-full text-white h-full
          bg-gradient-to-b from-indigo-950 to-gray-900
          p-10'
        >
          <p className={`${worksans.className} text-2xl pb-10`}>Contato</p>
          <p className='text-center pb-10'>Caso tenha alguma dúvida ou queira fazer
             contato com o nosso atendimento,
            <br />
              preencha o formulário
            com seu nome, email e sua mensagem
             <br />que entraremos em contato
          </p>
          <Contact />
        </div>
      </div>
    </main>
  );
}
