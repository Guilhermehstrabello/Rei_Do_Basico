import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="text-[#262626] flex justify-center items-center 2xl:w-[1440px] xl:w-[1240px] mx-auto">
        <div className="gap-y-10 md:text-center text-center items-start grid grid-cols-1 md:grid-cols-3 xl:justify-center xl:space-x-44 md:space-x-10 mb-5 w-full">
          <div className="flex flex-col gap-5 text-center xl:items-start items-center">
              <Image
                className="hover:scale-110 duration-75"
                src="/Logo.png"
                width={100}
                height={100}
                alt="Logo Rei do Básico"
              />
            <p className="text-white max-w-md text-start row-span-2 lg:mx-0 mx-4">
              Guiados por valores de honestidade e excelência, garantimos que
              cada projeto receba a atenção e os produtos de alta qualidade que
              você merece.
            </p>
            <div className="flex mt-4 justify-start sm:mt-0 items-end gap-4">
              <a
                className="hover:scale-150 duration-75"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61563645035180&mibextid=ZbWKwL"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_48_1272)">
                    <path
                      d="M9.78669 19V12.4308H7.99976V10.0656H9.78669V8.04535C9.78669 6.45785 10.8422 5 13.2745 5C14.2592 5 14.9874 5.09177 14.9874 5.09177L14.93 7.30049C14.93 7.30049 14.1874 7.29347 13.377 7.29347C12.4999 7.29347 12.3594 7.68638 12.3594 8.33851V10.0656H14.9998L14.8849 12.4308H12.3594V19H9.78669Z"
                      fill="#fff"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_48_1272">
                      <rect
                        width="7"
                        height="14"
                        fill="white"
                        transform="translate(7.99976 5)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>

                <span className="sr-only">Facebook</span>
              </a>
              <a
                className="hover:scale-150 duration-75"
                target="_blank"
                href="https://www.instagram.com/imperio_das_tintas_oficial/"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_48_1276)">
                    <path
                      d="M12.0036 7.95683C9.73213 7.95683 7.89999 9.76035 7.89999 11.9963C7.89999 14.2322 9.73213 16.0357 12.0036 16.0357C14.275 16.0357 16.1071 14.2322 16.1071 11.9963C16.1071 9.76035 14.275 7.95683 12.0036 7.95683ZM12.0036 14.6225C10.5357 14.6225 9.3357 13.4447 9.3357 11.9963C9.3357 10.5478 10.5321 9.37011 12.0036 9.37011C13.475 9.37011 14.6714 10.5478 14.6714 11.9963C14.6714 13.4447 13.4714 14.6225 12.0036 14.6225ZM17.2321 7.7916C17.2321 8.31543 16.8036 8.73379 16.275 8.73379C15.7428 8.73379 15.3178 8.31191 15.3178 7.7916C15.3178 7.27129 15.7464 6.84941 16.275 6.84941C16.8036 6.84941 17.2321 7.27129 17.2321 7.7916ZM19.95 8.74785C19.8893 7.48574 19.5964 6.36777 18.6571 5.44668C17.7214 4.52559 16.5857 4.2373 15.3036 4.17402C13.9821 4.1002 10.0214 4.1002 8.69999 4.17402C7.42142 4.23379 6.28571 4.52207 5.34642 5.44316C4.40714 6.36426 4.11785 7.48222 4.05356 8.74433C3.97856 10.0451 3.97856 13.9439 4.05356 15.2447C4.11428 16.5068 4.40714 17.6248 5.34642 18.5459C6.28571 19.467 7.41785 19.7553 8.69999 19.8185C10.0214 19.8924 13.9821 19.8924 15.3036 19.8185C16.5857 19.7588 17.7214 19.4705 18.6571 18.5459C19.5928 17.6248 19.8857 16.5068 19.95 15.2447C20.025 13.9439 20.025 10.0486 19.95 8.74785ZM18.2428 16.6404C17.9643 17.3295 17.425 17.8603 16.7214 18.1381C15.6678 18.5494 13.1678 18.4545 12.0036 18.4545C10.8393 18.4545 8.3357 18.5459 7.2857 18.1381C6.58571 17.8639 6.04642 17.333 5.76428 16.6404C5.34642 15.6033 5.44285 13.1424 5.44285 11.9963C5.44285 10.8502 5.34999 8.38574 5.76428 7.35215C6.04285 6.66308 6.58213 6.13223 7.2857 5.85449C8.33928 5.44316 10.8393 5.53809 12.0036 5.53809C13.1678 5.53809 15.6714 5.44668 16.7214 5.85449C17.4214 6.12871 17.9607 6.65957 18.2428 7.35215C18.6607 8.38926 18.5643 10.8502 18.5643 11.9963C18.5643 13.1424 18.6607 15.6068 18.2428 16.6404Z"
                      fill="#fff"
                      
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_48_1276">
                      <rect
                        width="16"
                        height="18"
                        fill="white"
                        transform="translate(4 3)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>

                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5 text-center xl:text-start">
            <h3 className="text-white font-bold text-xl">Seções</h3>
            <a href="#inicio">
              <p className="text-white hover:underline hover:scale-110 hover:text-[#FF6600] duration-100">
                Início
              </p>
            </a>
            <a href="#produtos">
              <p className="text-white hover:underline hover:scale-110 hover:text-[#FF6600] duration-100">
                Produtos
              </p>
            </a>
            <a href="#diferenciais">
              <p className="text-white hover:underline hover:scale-110 hover:text-[#FF6600] duration-100">
                Diferenciais
              </p>
            </a>
            <a href="#depoimentos">
              <p className="text-white hover:underline hover:scale-110 hover:text-[#FF6600] duration-100">
                Depoimentos
              </p>
            </a>
            <a href="#contato">
              <p className="text-white hover:underline hover:scale-110 hover:text-[#FF6600] duration-100">
                Contato
              </p>
            </a>
          </div>

          <div className="flex flex-col gap-5 text-center xl:text-start text-xl">
            <h3 className="text-white font-bold">Localização</h3>
            <a target="_blank" href="https://www.google.com/maps/place/Rei+do+B%C3%A1sico+-+Materiais+de+Constru%C3%A7%C3%A3o+em+Indaiatuba/@-23.1074765,-47.2303024,15z/data=!4m2!3m1!1s0x0:0xafaddd84a7fcb6a9?sa=X&ved=1t:2428&ictx=111">
              <Image
                src="/localizacao_reidobasico.png"
                alt="Localização Rei Do Básico"
                width={500}
                height={500}
                className="hover:scale-110 duration-150"
              />
            </a>
            <p className="text-white text-base">Av. Eng. Fábio Roberto Barnabé, 4634 - Jardim Colonial, Indaiatuba - SP, 13348-670</p>
          </div>
        </div>
      </footer>
      <div className="flex justify-center items-center mx-auto my-8">
        <p className="text-center text-white text-sm">
          Rei do Básico - 2024 Todos Direitos Reservados. Desenvolvido por
          <a
            href="http://constemarketing.com.br"
            target="_blank"
            className="hover:text-[#FF8500] duration-100"
          >
            {" "}
            Conste Marketing.
          </a>
        </p>
      </div>
    </>
  );
}
