"use client"
import Image from "next/image";
import { worksans } from "../ui/fonts";
import { useEffect, useState } from "react"

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

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div  className='flex flex-col items-center w-full text-white p-10 h-fit bg-gray-900'>
      <p className={`${worksans.className} text-2xl pt-10`}>Email</p>
      <p className='pt-6 text-center text-lg'>
        flames@flames.com.br
      </p>

      <p className={`${worksans.className} text-2xl pt-10`}>Mídias</p>
      <div className="flex flex-row justify-center align center pt-6 w-full ">
        <a href="https://www.instagram.com/flamespirotecnia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="/blank">
            <Image
                src="/icons-instagram.svg"
                height={dimensions.width < 600 ? dimensions.height * 0.12 : dimensions.height * 0.05}
                width={dimensions.width < 600 ? dimensions.width * 0.12 :  dimensions.width * 0.05 }
                alt="Instagram"
                className=""

            />
        </a>
        <a href={`https://www.facebook.com/flamespirotecnia`} target="#blank" className="text-white">
            <Image
                src="/icons-facebook.svg"
                height={dimensions.width < 600 ? dimensions.height * 0.12 : dimensions.height * 0.05}
                width={dimensions.width < 600 ? dimensions.width * 0.12 :  dimensions.width * 0.05 }
                alt="Whatsapp"
                className="mx-10"
            />
        </a>

        <a href={`https://youtube.com/@flamespirotecnia1703?si=Zqvt8wyNIqc55l9h`} target="#blank" className="text-white">
            <Image
                src="/icons-youtube.svg"
                height={dimensions.width < 600 ? dimensions.height * 0.12 : dimensions.height * 0.05}
                width={dimensions.width < 600 ? dimensions.width * 0.12 :  dimensions.width * 0.05 }
                alt="Whatsapp"
                className=""
            />
        </a>
      </div>

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
              src={"/undraw_building.svg"}
              width={180}
              height={80}
              alt='40 anos de experiência'
              className=''
            />
          </a>
          <div className="mt-6 text-center">
            <p>Whatsapp</p>
            <a href={`https://api.whatsapp.com/send?phone=5511999403978&text=Olá, tudo bom?`} target="#blank" className="text-white">
              <Image
                  src="/icons-whatsapp.svg"
                  height={35}
                  width={35}
                  alt="Whatsapp"
                  className="ml-6  pt-4"
              />
            </a>
          </div>
          <div className="mt-6 text-center">
            <p>Telefones Comerciais</p>
            <p className="pt-4">
              (11) 5523-3959 <br />
              (11) 3213-3979
            </p>
          </div>

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
              src={"/undraw_building.svg"}
              width={180}
              height={80}
              alt='40 anos de experiência'
              className=''
            />
          </a>

          <div className="mt-6 text-center">
            <p>Whatsapp</p>
            <a href={`https://api.whatsapp.com/send?phone=5511971100461&text=Olá, tudo bom?`} target="#blank" className="text-white">
              <Image
                  src="/icons-whatsapp.svg"
                  height={35}
                  width={35}
                  alt="Whatsapp"
                  className="ml-6 pt-4"
              />
            </a>
          </div>
          <div className="mt-6 text-center">
            <p>Telefones Comerciais</p>
            <p className="pt-4">
              (11) 3208-8066 <br />
              (11) 3341-3663
            </p>
          </div>
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
              src={"/undraw_building.svg"}
              width={180}
              height={80}
              alt='40 anos de experiência'
            />
          </a>

          <div className="mt-6 text-center">
            <p>Whatsapp</p>
            <a href={`https://api.whatsapp.com/send?phone=5511994049732&text=Olá, tudo bom?`} target="#blank" className="text-white">
              <Image
                  src="/icons-whatsapp.svg"
                  height={35}
                  width={35}
                  alt="Whatsapp"
                  className="ml-6 pt-4"
              />
            </a>
          </div>
          <div className="mt-6 text-center">
            <p>Telefones Comerciais</p>
            <p className="pt-4">
              (11) 4664-1631
            </p>
          </div>
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
  );
}