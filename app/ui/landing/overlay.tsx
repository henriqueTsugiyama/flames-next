import Image from "next/image"
import { montserrat, worksans } from "../fonts"

export default function Overlay({label, description, urls, isVideo, height, width, alt = 'Oops, não foi possível encontrar seu conteúdo.'}:
    {
        label: string,
        description: string,
        urls: string[],
        isVideo: boolean,
        height: number,
        width: number,
        alt?: string
    }) {
    return (
        <div className={`flex grow relative items-center overlay md:flex-column bg-black w-full max-h-675px`}>
            <div className={`bg-black/[.6] inline-flex flex-col items-center justify-center absolute
                italic text-white text-4xl ${worksans.className}
                z-0 w-full h-full`}>
                {label}
                <p className={`${montserrat.className} text-xl text-center mt-10`}>
                 {description}
                </p>
            </div>
            <div className="inline-flex flex-row justify-center w-full">
                {isVideo ?     
                <video width={width} height={height} src={urls[0]} autoPlay muted loop className="flex"/>
                :
                (urls.map((url, key) => (
                    <Image
                    key={key} 
                    src={url}
                    width={(width/urls.length)*.98}
                    height={height}
                    alt={alt}
                    className="flex"
                    />
                )))
                }
            </div>
      </div>
    )
}