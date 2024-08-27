import Image from "next/image"
import { montserrat, worksans } from "../fonts"

export default function Overlay({label, description, url, isVideo, height, width, alt = 'Oops, não foi possível encontrar seu conteúdo.'}:
    {
        label: string,
        description: string,
        url: string,
        isVideo: boolean,
        height: number,
        width: number,
        alt?: string
    }) {
    return (
        <div className={`flex grow flex-col relative items-center gap-4 overlay md:flex-column bg-black max-w-1920px max-h-675px`}>
            <div className={`bg-black/[.6] inline-flex flex-col items-center justify-center absolute
                italic text-white text-4xl ${worksans.className}
                z-0 w-full h-full`}>
                {label}
                <p className={`${montserrat.className} text-xl text-center mt-10`}>
                 {description}
                </p>
            </div>
            {!isVideo ?     
            <video width={width} height={height} src={url} autoPlay muted loop />
            :
            <Image src={url} width={width} height={height} alt=""/>
            }
      </div>
    )
}