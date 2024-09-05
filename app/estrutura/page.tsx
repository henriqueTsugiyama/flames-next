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
    const urls = ['/equipment/firetek-left-view.jpg', '/equipment/firetek-right-view.jpg', '/equipment/firetek-front.jpg']
    useEffect(() => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
        const handleResize = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
            <div className=''>
                {/* Sections */}
                <div className='flex mobile-flex-wrap flex-row justify-betweeen items-center
                    w-full h-fit min-h-160px 
                    text-white  bg-gradient-to-r from-red-950 via-indigo-950 to-gray-900'>
                    <Overlay
                    label='Tecnologia'
                    description=""
                    urls={urls}
                    isVideo={false}
                    width={dimensions.width}
                    height={dimensions.height}
                    />
                </div>
                <div className='flex flex-col items-center w-full text-white p-10 h-fit bg-gray-900'>
                    <Image
                    src={"/undraw_drone_surveillance.svg"}
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
                    src={"/balsa-montagem.jpg"}
                    width={dimensions.width > mobileScreenSize ? dimensions.width/2 : dimensions.width}
                    height={dimensions.height > mobileScreenSize ? dimensions.height/2 : dimensions.height}
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
                <div className='flex mobile-flex-wrap flex-row justify-betweeen items-center
                    w-full h-fit min-h-160px 
                    text-white  bg-gradient-to-r from-red-950 via-indigo-950 to-gray-900'>
                    {dimensions.width < mobileScreenSize &&
                    <Image
                        src={"/hopi-hari-heart.jpg"}
                        width={dimensions.width > mobileScreenSize ? dimensions.width/2 : dimensions.width}
                        height={dimensions.height}
                        alt='40 anos de experiência'
                        className={`${dimensions.width > mobileScreenSize ? 'w-1/2' : ''}`}
                    />}
                    <div
                    className={clsx('inline-flex flex-col w-full p-10 h-fit',
                    {
                        'items-end': dimensions.width > mobileScreenSize,
                        'items-center': dimensions.width < mobileScreenSize,
                    }
                    )}>
                        <p className={`${worksans.className} text-2xl`}>Estruturas personalizadas</p>
                        <p className={clsx('py-10 text-lg',
                        {
                            'text-right': dimensions.width > mobileScreenSize,
                            'text-center': dimensions.width < mobileScreenSize,
                        }
                        )}>    
                        Sempre analisamos as demandas, para tentar atende-las de diversas maneiras. 
                        Podendo criar estruturas personalizadas, que são utilizadas em conjunto com os efeitos
                        </p>
                    </div>
                    {dimensions.width > mobileScreenSize &&
                    <Image
                        src={"/hopi-hari-heart.jpg"}
                        width={dimensions.width > mobileScreenSize ? dimensions.width/2 : dimensions.width}
                        height={dimensions.height}
                        alt='40 anos de experiência'
                        className={`${dimensions.width > mobileScreenSize ? 'w-1/2' : ''}`}
                    />}
                </div>
            </div>
    )
}