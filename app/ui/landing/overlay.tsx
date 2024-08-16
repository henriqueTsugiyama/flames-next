import { montserrat, worksans } from "../fonts"

export default function Overlay({label, height, width}: { label: string, height: number, width: number}) {
    return (
        <div className={`flex grow flex-col relative items-center gap-4 overlay md:flex-column bg-black max-w-1920px max-h-675px`}>
            <div className={`bg-black/[.6] inline-flex flex-col items-center justify-center absolute
                italic text-white text-4xl ${worksans.className}
                z-0 w-full h-full`}>
                {label}
                <p className={`${montserrat.className} text-xl text-center mt-10`}>
                    Somos o Grupo Flames, uma empresa especializada <br />
                    em efeitos especiais e pirotecnia.
                </p>
            </div>
            <video width={width} height={height} src={'/videos/hotel_nacional2019_cascata.mp4'} autoPlay muted loop />
      </div>
    )
}