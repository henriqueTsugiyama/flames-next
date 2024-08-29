'use client'

import Image from 'next/image';
import { worksans } from '../ui/fonts';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

export default function Page() {
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0,
      });
    const mobileScreenSize = 780
    
      useEffect(() => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
        const handleResize = () => {
          setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    return (
        <main className={`flex flex-col min-h-screen`}>
            <div className='mt-20 mb-24'>
                <div className='flex flex-col items-center w-full text-white p-10 h-fit bg-gray-900'>
                    <p className={`${worksans.className} text-2xl`}>Portfólio</p>
                    <Image
                    src={"/undraw_visionary_technology.svg"}
                    width={240}
                    height={150}
                    alt='40 anos de experiência'
                    className='pt-10'
                    />
                    <p className='py-10 text-center text-lg'>
                        Aqui temos alguns conteúdos dos nossos trabalhos.<br />
                        Tentamos sempre unir a arte dos efeitos com a demanda dos nossos clientes.<br />

                    </p>
                </div>
                {/* Sections */}
                <div className='grid-column-wrapper'>
                    <div className='relative'>                
                        <div className='absolute w-full h-full
                        flex flex-col items-center justify-center bg-transparent text-transparent rounded-md
                        transition ease-in-out delay-800 hover:bg-gray-800/[.6] hover:text-slate-50
                        '>
                            <p className={`${worksans.className} text-xl`}>Pirotecnia</p>
                            <p className='p-8 text-md text-center'>
                            Fazemos shows pirotécnicos, tanto de shows independentes sem sistema de iluminação e luzes, como também integrados em um sistema junto a outros artistas.
                            </p>
                        </div>
                        <Image
                        src={"/hopihari-fireworks.jpg"}
                        width={dimensions.width > mobileScreenSize ? dimensions.width/2 : dimensions.width}
                        height={dimensions.height}
                        alt='40 anos de experiência'
                        />
                    </div>
                    <div className='relative'>                
                        <div className='absolute w-full h-full
                        flex flex-col items-center justify-center bg-transparent text-transparent rounded-md
                        transition ease-in-out delay-800 hover:bg-gray-800/[.6] hover:text-slate-50
                        '>
                            <p className={`${worksans.className} text-xl`}>Cascatas</p>
                            <p className='p-8  text-md text-center'>
                            Ainda dentro de pirotecnia, temos nossos efeitos de cascatas perfeitos para iluminar eventos e destacar painéis de patrocinadores, marcas, e times. 
                            </p>
                        </div>
                        <Image
                        src={"/cascata-cananeia.jpg"}
                        width={dimensions.width > mobileScreenSize ? dimensions.width/2 : dimensions.width}
                        height={dimensions.height}
                        alt='40 anos de experiência'
                        />
                    </div>
                    <div className='relative'>                
                        <div className='absolute w-full h-full
                        flex flex-col items-center justify-center bg-transparent text-transparent rounded-md
                        transition ease-in-out delay-800 hover:bg-gray-800/[.6] hover:text-slate-50
                        '>
                            <p className={`${worksans.className} text-xl`}>Fire Machine</p>
                            <p className='p-8  text-md text-center'>
                            Muito usado em shows em palco, temos nosso maquinário próprio para o efeito de chamas.
                            </p>
                        </div>
                        <Image
                        src={"/firemachine-generic.jpg"}
                        width={dimensions.width > mobileScreenSize ? dimensions.width/2 : dimensions.width}
                        height={dimensions.height}
                        alt='40 anos de experiência'
                        />
                    </div>
                </div>

                <div className='grid-column-wrapper'>
                    <div className='relative'>                
                        <div className='absolute w-full h-full
                        flex flex-col items-center justify-center bg-transparent text-transparent rounded-md
                        transition ease-in-out delay-800 hover:bg-gray-800/[.6] hover:text-slate-50
                        '>
                            <p className={`${worksans.className} text-xl`}>Skypaper</p>
                            <p className='p-8 text-md text-center'>
                            Famoso por ser usado em datas comemorativas e eventos de celebração, temos equipamentos para realizar efeitos de skypaper em diversas cores.
                            </p>
                        </div>
                        <Image
                        src={"/iguape-skypaper.jpg"}
                        width={dimensions.width > mobileScreenSize ? dimensions.width : dimensions.width}
                        height={dimensions.height}
                        alt='40 anos de experiência'
                        />
                    </div>
                    <div className='relative'>                
                        <div className='absolute w-full h-full
                        flex flex-col items-center justify-center bg-transparent text-transparent rounded-md
                        transition ease-in-out delay-800 hover:bg-gray-800/[.6] hover:text-slate-50
                        '>
                            <p className={`${worksans.className} text-xl`}>Serpentinas</p>
                            <p className='p-8  text-md text-center'>
                            Na mesma linha de skypaper, temos nossa linha de serpentinas. Usada em situações bem parecidas
                            </p>
                        </div>
                        <Image
                        src={"/serpentinas-rogerio-ceni.jpg"}
                        width={dimensions.width > mobileScreenSize ? dimensions.width/2 : dimensions.width}
                        height={dimensions.height}
                        alt='40 anos de experiência'
                        />
                    </div>
                    <div className='relative'>                
                        <div className='absolute w-full h-full
                        flex flex-col items-center justify-center bg-transparent text-transparent rounded-md
                        transition ease-in-out delay-800 hover:bg-gray-800/[.6] hover:text-slate-50
                        '>
                            <p className={`${worksans.className} text-xl`}>CO2</p>
                            <p className='p-8 text-md text-center'>
                            Máquinas de CO2 para operar em concertos, festas e eventos particulares.
                            </p>
                        </div>
                        <Image
                        src={"/co2-aesul.jpg"}
                        width={dimensions.width > mobileScreenSize ? dimensions.width/2 : dimensions.width}
                        height={dimensions.height}
                        alt='40 anos de experiência'
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}