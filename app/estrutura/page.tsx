'use client'

import Image from 'next/image';
import { worksans } from '../ui/fonts';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Overlay from '../ui/landing/overlay';

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
              
                {/* Sections */}
                <div className='flex mobile-flex-wrap flex-row justify-betweeen items-center
                    w-full h-fit min-h-160px 
                    text-white  bg-gradient-to-r from-red-950 via-indigo-950 to-gray-900'>
                    <Overlay
                    label=''
                    description=""
                    url='/equipment/firetek-left-view.jpg'
                    isVideo={true}
                    width={dimensions.width/2}
                    height={dimensions.height}
                    />
                    {/* {/* <Image
                    src={"/equipment/firetek-left-view.jpg"}
                    width={dimensions.width > mobileScreenSize ? dimensions.width/4 : dimensions.width}
                    height={dimensions.height}
                    alt='40 anos de experiência'
                    className={`${dimensions.width > mobileScreenSize ? 'w-1/2' : ''}`}
                    /> */}
                    <Image
                    src={"/equipment/firetek-right-view.jpg"}
                    width={dimensions.width > mobileScreenSize ? dimensions.width/2 : dimensions.width}
                    height={dimensions.height}
                    alt='40 anos de experiência'
                    className={`${dimensions.width > mobileScreenSize ? 'w-1/2' : ''}`}
                    /> 
                </div>
                <div className='flex flex-col items-center w-full text-white p-10 h-fit bg-gray-900'>
                    <p className={`${worksans.className} text-2xl`}>Tecnologia</p>
                    <Image
                    src={"/undraw_visionary_technology.svg"}
                    width={240}
                    height={150}
                    alt='40 anos de experiência'
                    className='pt-10'
                    />
                    <p className='py-10 text-center text-lg'>
                        Com equipamentos de comunicação via cabo, rádio e GPS,<br />
                        temos um leque de opções para operar em diferentes situações. <br />
                        Realizando eventos em lugares remotos até palcos profissionais.
                    </p>
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
                        <p className={`${worksans.className} text-2xl`}>Balsas</p>
                        <p className={clsx('py-10 text-lg',
                        {
                            'text-left': dimensions.width > mobileScreenSize,
                            'text-center': dimensions.width < mobileScreenSize,
                        }
                        )}>
                            Usamos o sistema de balsas para fazer shows em alto mar. <br />
                            Todos, devidamente autorizados pela Marinha e munícipio de cada região.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}