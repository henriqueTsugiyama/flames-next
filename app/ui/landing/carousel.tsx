
import Image from "next/image";
import styles from '../../ui/styles/carousel.module.css'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from "react";

export default function Carousel({
        children,
        slides,
        autoSlide=false,
        autoSlideInterval=3000
    }:
    {
        children: React.ReactNode,
        slides: string[],
        autoSlide?: boolean,
        autoSlideInterval?: number
    }
) {
    const [ current, setCurrent ] = useState(0)

    const previous = () => setCurrent(current => current === 0 ? slides.length - 1 : current - 1)
    const next = () => {setCurrent(current => current === slides.length - 1 ? 0 : current + 1)}

    useEffect(() => {
        if (!autoSlide) return

        const slidesInterval = setInterval(() => next, autoSlideInterval)
        return () => clearInterval(slidesInterval)

    }, [])
    return (
        <div className=' flex justify-center overflow-hidden relative max-w-3xl'>
            <div className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${current*100}%)` }}>
            {children}
            </div>
            <div className="absolute inset-0 p-4
            flex items-center justify-between
            ">
                <button className="p-1 rounded-full shadow text-black bg-white/80 hover:bg-white" onClick={previous}>
                    <ArrowLeftIcon className="flex items-center justify-center  w-4 h-6 pr-1" />
                </button>
                <button className='p-1 rounded-full shadow text-black bg-white/80 hover:bg-white' onClick={next}>
                    <ArrowRightIcon className="flex items-center justify-center w-4 h-6 pr-1" />
                </button>
            </div>
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div key={i} className={`
                            transition-all w-3 h-3 bg-white rounded-full p-1
                            ${current === i ? 'p-2' : 'bg-opacity-50'}
                        `}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}