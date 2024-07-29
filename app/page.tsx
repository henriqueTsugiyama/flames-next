'use client'

import Image from 'next/image';
import Overlay from './ui/landing/overlay';
import Carousel from './ui/landing/carousel';
import Contact from './ui/forms/contact';
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
        <div className='flex w-full text-white h-6 bg-red'>
          Carrousell de algumas fotos e link portfolio
          {/* <Carousel /> */}
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
          a entregar seu serviço prezando pelas melhores práticas<br />
          de segurança e agregar valor ao seu evento.
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
          />
          <div className='p-10'>
            <p className={`${worksans.className} text-2xl`}>Tecnologia</p>
            <p className='py-10 text-left text-lg'>
            Usamos diversos sistemas e tecnologias de ponta para operar os efeitos.<br />
            Nossa equipe técnica especializada, está pronta para<br />
            te atender e direcionar em diversas situações.
            </p>

            <button className='p-8 mt- 10 bg-red-400 rounded-md' onClick={() => console.log(dimensions)}>Saiba mais</button>
          </div>
        </div>

        <div  className='flex flex-col items-center w-full text-white p-10 h-fit bg-gray-900'>
          <p className={`${worksans.className} text-2xl`}>Lojas físicas</p>
          <p className='pt-10 text-center text-lg'>
          Além da nossa área de efeitos especiais, temos também lojas físicas para<br /> revenda de produtos seguramente habilitados para o público
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
