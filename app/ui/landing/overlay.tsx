import Image from "next/image"
import { worksans } from "../fonts"

export default function Overlay({label, height, width}: { label: string, height: number, width: number}) {

    return (
        <div className={`flex grow flex-col relative items-center gap-4 overlay md:flex-column bg-black max-w-1920px max-h-675px`}>
            <div className={`bg-black/[.6] inline-flex items-center justify-center absolute
                text-white text-4xl ${worksans.className}
                z-0 w-full h-full`}>
            {label}
            </div>
            <Image
            src={"/hopihari_live_cherry.jpeg"}
            width={width}
            height={height}
            alt='HopiHari Live Commets'
            />
      </div>
    )
}