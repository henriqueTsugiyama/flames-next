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
                <div className='flex mobile-flex-wrap flex-row justify-betweeen items-center
                    w-full h-fit min-h-160px 
                    text-white  bg-gradient-to-r from-red-950 via-indigo-950 to-gray-900'>
                    <Image
                    src={"/hopihari-fireworks.jpg"}
                    width={dimensions.width > mobileScreenSize ? dimensions.width/2 : dimensions.width}
                    height={dimensions.height}
                    alt='40 anos de experiência'
                    className={`${dimensions.width > mobileScreenSize ? 'w-1/2' : ''}`}
                    />
                    <div
                    className={clsx('inline-flex flex-col items-start w-full p-10 h-fit',
                    {
                        'items-start': dimensions.width > mobileScreenSize,
                        'items-center': dimensions.width < mobileScreenSize,
                    }
                    )}>
                        <p className={`${worksans.className} text-2xl`}>Pirotecnia</p>
                        <p className={clsx('py-10 text-lg',
                        {
                            'text-left': dimensions.width > mobileScreenSize,
                            'text-center': dimensions.width < mobileScreenSize,
                        }
                        )}>
                            Usamos diversos sistemas e tecnologias
                            de ponta para operar os efeitos. <br />
                            Nossa equipe técnica especializada, está pronta para te atender
                            e direcionar em diversas situações.
                        </p>
                    </div>
                </div>

                <div className='flex mobile-flex-wrap flex-row justify-betweeen items-center
                    w-full h-fit min-h-160px 
                    text-white  bg-gradient-to-r from-red-950 via-indigo-950 to-gray-900'>
                    {dimensions.width < mobileScreenSize &&
                    <Image
                        src={"/firemachine-generic.jpg"}
                        width={dimensions.width > mobileScreenSize ? dimensions.width/2 : dimensions.width}
                        height={dimensions.height}
                        alt='40 anos de experiência'
                        className={`${dimensions.width > mobileScreenSize ? 'w-1/2' : ''}`}
                    />}
                    <div
                        className={clsx('inline-flex flex-col items-start w-full p-10 h-fit',
                        {
                            'items-start': dimensions.width > mobileScreenSize,
                            'items-center': dimensions.width < mobileScreenSize,
                        }
                    )}>
                        <p className={`${worksans.className} text-2xl`}>Máquina de chamas</p>
                        <p className={clsx('py-10 text-lg',
                        {
                            'text-left': dimensions.width > mobileScreenSize,
                            'text-center': dimensions.width < mobileScreenSize,
                        }
                        )}>
                            Usamos diversos sistemas e tecnologias
                            de ponta para operar os efeitos. <br />
                            Nossa equipe técnica especializada, está pronta para te atender
                            e direcionar em diversas situações.
                        </p>
                    </div>
                    {dimensions.width > mobileScreenSize &&
                    <Image
                        src={"/firemachine-generic.jpg"}
                        width={dimensions.width > mobileScreenSize ? dimensions.width/2 : dimensions.width}
                        height={dimensions.height}
                        alt='40 anos de experiência'
                        className={`${dimensions.width > mobileScreenSize ? 'w-1/2' : ''}`}
                    />}
                </div>
                <div className='flex mobile-flex-wrap flex-row justify-betweeen items-center
                    w-full h-fit min-h-160px 
                    text-white  bg-gradient-to-r from-red-950 via-indigo-950 to-gray-900'>
                    <Image
                    src={"/co2-aesul.jpg"}
                    width={dimensions.width > mobileScreenSize ? dimensions.width/2 : dimensions.width}
                    height={dimensions.height}
                    alt='40 anos de experiência'
                    className={`${dimensions.width > mobileScreenSize ? 'w-1/2' : ''}`}
                    />
                    <div
                    className={clsx('inline-flex flex-col items-start w-full p-10 h-fit',
                    {
                        'items-start': dimensions.width > mobileScreenSize,
                        'items-center': dimensions.width < mobileScreenSize,
                    }
                    )}>
                        <p className={`${worksans.className} text-2xl`}>CO2</p>
                        <p className={clsx('py-10 text-lg',
                        {
                            'text-left': dimensions.width > mobileScreenSize,
                            'text-center': dimensions.width < mobileScreenSize,
                        }
                        )}>
                            Usamos diversos sistemas e tecnologias
                            de ponta para operar os efeitos. <br />
                            Nossa equipe técnica especializada, está pronta para te atender
                            e direcionar em diversas situações.
                        </p>
                    </div>
                </div>
                <div className='flex mobile-flex-wrap flex-row justify-betweeen items-center
                    w-full h-fit min-h-160px 
                    text-white  bg-gradient-to-r from-red-950 via-indigo-950 to-gray-900'>
                    {dimensions.width < mobileScreenSize && 
                    <Image
                        src={"/cascata-cananeia.jpg"}
                        width={dimensions.width > mobileScreenSize ? dimensions.width/2 : dimensions.width}
                        height={dimensions.height}
                        alt='40 anos de experiência'
                        className={`${dimensions.width > mobileScreenSize ? 'w-1/2' : ''}`}
                    />}
                    <div
                    className={clsx('inline-flex flex-col items-start w-full p-10 h-fit',
                    {
                        'items-start': dimensions.width > mobileScreenSize,
                        'items-center': dimensions.width < mobileScreenSize,
                    }
                    )}>
                        <p className={`${worksans.className} text-2xl`}>Cascatas</p>
                        <p className={clsx('py-10 text-lg',
                        {
                            'text-left': dimensions.width > mobileScreenSize,
                            'text-center': dimensions.width < mobileScreenSize,
                        }
                        )}>
                            Usamos diversos sistemas e tecnologias
                            de ponta para operar os efeitos. <br />
                            Nossa equipe técnica especializada, está pronta para te atender
                            e direcionar em diversas situações.
                        </p>
                    </div>
                    {dimensions.width > mobileScreenSize && 
                    <Image
                        src={"/cascata-cananeia.jpg"}
                        width={dimensions.width > mobileScreenSize ? dimensions.width/2 : dimensions.width}
                        height={dimensions.height}
                        alt='40 anos de experiência'
                        className={`${dimensions.width > mobileScreenSize ? 'w-1/2' : ''}`}
                    />}
                </div>
                <div className='flex mobile-flex-wrap flex-row justify-betweeen items-center
                    w-full h-fit min-h-160px 
                    text-white  bg-gradient-to-r from-red-950 via-indigo-950 to-gray-900'>
                    <Image
                    src={"/skypaper-ambipar.jpg"}
                    width={dimensions.width > mobileScreenSize ? dimensions.width/2 : dimensions.width}
                    height={dimensions.height}
                    alt='40 anos de experiência'
                    className={`${dimensions.width > mobileScreenSize ? 'w-1/2' : ''}`}
                    />
                    <div
                    className={clsx('inline-flex flex-col items-start w-full p-10 h-fit',
                    {
                        'items-start': dimensions.width > mobileScreenSize,
                        'items-center': dimensions.width < mobileScreenSize,
                    }
                    )}>
                        <p className={`${worksans.className} text-2xl`}>Skypaper</p>
                        <p className={clsx('py-10 text-lg',
                        {
                            'text-left': dimensions.width > mobileScreenSize,
                            'text-center': dimensions.width < mobileScreenSize,
                        }
                        )}>
                            Usamos diversos sistemas e tecnologias
                            de ponta para operar os efeitos. <br />
                            Nossa equipe técnica especializada, está pronta para te atender
                            e direcionar em diversas situações.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}