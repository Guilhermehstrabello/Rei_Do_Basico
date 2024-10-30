"use client";

import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <div className="flex justify-center bg-[#08221F]">
        <div className="w-full max-w-[1440px] mx-[100px]">
          <Navbar />

          <section className="space-y-12 my-32 px-10 text-center">
            <h1 className="text-7xl font-bold text-center">
              <span className="text-[#FED700]">Do Básico ao Avançado, </span>{" "}
              Nós <br /> Temos{" "}
              <span className="text-[#FED700]">Tudo para Sua Obra!</span>
            </h1>
            <p className="text-2xl">
              Cada Material Pensado para Oferecer Qualidade e <br /> Eficiência
              em Todas as Fases da sua Obra.
            </p>
            <button className="bg-[#0D6B4A] text-white px-10 py-4 text-lg font-bold rounded-md hover:bg-[#FF6600] transition duration-200">
              Tenho Interesse!{" "}
            </button>
          </section>

          <section className="py-16 flex flex-col items-center gap-y-20">
            <div className="text-center mb-4">
              <h2 className="text-5xl font-bold text-white">Nossos Produtos</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Card 1 */}
              <div className="h-[400px] xl:w-[350px] flex flex-col justify-center items-center bg-[#082D21] text-white shadow-lg rounded-lg p-4 transition-colors duration-300 hover:bg-white hover:text-[#082D21]">
                <div className="rounded-lg">
                  <Image
                    src="/grupo1.png"
                    alt="Imagem 1"
                    width={278}
                    height={200}
                    className="w-full h-auto hover:scale-110 duration-150"
                  />
                </div>
                <h3 className="mt-4 text-2xl font-semibold">Hidraúlica</h3>
              </div>

              {/* Card 2 */}
              <div className="h-[400px] xl:w-[350px] flex flex-col justify-center items-center bg-[#082D21] text-white shadow-lg rounded-lg p-4 transition-colors duration-300 hover:bg-white hover:text-[#082D21]">
                <div className="rounded-lg">
                  <Image
                    src="/grupo2.png"
                    alt="Imagem 1"
                    width={278}
                    height={200}
                    className="w-full h-auto hover:scale-110 duration-150"
                  />
                </div>
                <h3 className="mt-4 text-2xl font-semibold">Elétrica</h3>
              </div>

              {/* Card 3 */}
              <div className="h-[400px] xl:w-[350px] flex flex-col justify-center items-center bg-[#082D21] text-white shadow-lg rounded-lg p-4 transition-colors duration-300 hover:bg-white hover:text-[#082D21]">
                <div className="rounded-lg">
                  <Image
                    src="/grupo3.png"
                    alt="Imagem 1"
                    width={278}
                    height={200}
                    className="w-full h-auto hover:scale-110 duration-150"
                  />
                </div>
                <h3 className="mt-4 text-2xl font-semibold">Básicos</h3>
              </div>

              {/* Card 4 */}
              <div className="h-[400px] xl:w-[350px] flex flex-col justify-center items-center bg-[#082D21] text-white shadow-lg rounded-lg p-4 transition-colors duration-300 hover:bg-white hover:text-[#082D21]">
                <div className="rounded-lg">
                  <Image
                    src="/grupo4.png"
                    alt="Imagem 1"
                    width={278}
                    height={200}
                    className="w-full h-auto hover:scale-110 duration-150"
                  />
                </div>
                <h3 className="mt-4 text-2xl font-semibold">E muito +</h3>
              </div>
            </div>

            <button className="bg-[#0D6B4A] text-white px-10 py-4 text-lg font-bold rounded-md hover:bg-[#FF6600] transition duration-200">
              Tenho Interesse!{" "}
            </button>
          </section>

          <section className="py-16 flex flex-col items-center gap-y-20">
            <div className="text-center mb-4">
              <h2 className="text-5xl font-bold text-white">Diferenciais</h2>
            </div>

            <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="h-[400px] xl:w-[460px] flex flex-col justify-center items-center bg-[#082D21] text-white shadow-lg rounded-lg p-4 transition-colors duration-300 hover:bg-white hover:text-[#082D21]">
                <div className="rounded-lg flex flex-col justify-center items-center gap-3">
                  <h3 className="mt-4 text-2xl font-semibold">
                    Horário Extendido
                  </h3>
                  <p className="text-center">
                    Estamos abertos das 8h às 20h, <br /> facilitando suas
                    compras quando for <br /> mais conveniente para você.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="h-[400px] xl:w-[460px] flex flex-col justify-center items-center bg-[#082D21] text-white shadow-lg rounded-lg p-4 transition-colors duration-300 hover:bg-white hover:text-[#082D21]">
                <div className="rounded-lg flex flex-col justify-center items-center gap-3">
                  <h3 className="mt-4 text-2xl font-semibold">
                    Estoque Grande
                  </h3>
                  <p className="text-center">
                    Com um estoque sempre <br /> completo, você encontra tudo o{" "}
                    <br /> que precisa, sem perder tempo.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="h-[400px] xl:w-[460px] flex flex-col justify-center items-center bg-[#082D21] text-white shadow-lg rounded-lg p-4 transition-colors duration-300 hover:bg-white hover:text-[#082D21]">
                <div className="rounded-lg flex flex-col justify-center items-center gap-3">
                  <h3 className="mt-4 text-2xl font-semibold">
                    Acompanhamento da Obra
                  </h3>
                  <p className="text-center">
                    Ajudamos a calcular a quantidade <br /> ideal de material,
                    evitando <br />
                    desperdícios para sua obra.
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-[#0D6B4A] text-white px-10 py-4 text-lg font-bold rounded-md hover:bg-[#FF6600] transition duration-200">
              Tenho Interesse!
            </button>
          </section>

          <section className="2xl:w-[calc(1640px+280px)] lg:w-[calc(1240px+200px)] 2xl:-ml-[260px] flex flex-col bg-gradient-to-b from-[#08221F] via-[#082D22] to-[#08221F] gap-8">
            <button className="py-4">
              <h2 className="text-[68px]">Missão</h2>
            </button>
            <button className="py-4">
              <h2 className="text-[68px]">Valores</h2>
            </button>
            <button className="py-4">
              <h2 className="text-[68px]">Expertise</h2>
            </button>
          </section>

          <section className="py-16 flex flex-col items-center gap-y-20">
            <div className="text-center mb-4">
              <h2 className="text-5xl font-bold text-white">
                O que falam sobre nós?
              </h2>
            </div>

            <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-0 gap-2">
              <div className="h-[400px] xl:w-[470px] flex flex-col justify-center items-center bg-[#082D21] text-white shadow-lg rounded-lg p-4 transition-colors duration-300 hover:bg-white hover:text-[#082D21]">
                <div className="rounded-lg flex flex-col justify-center items-center gap-3">
                  <h3 className="mt-4 text-2xl font-semibold">
                    Horário Extendido
                  </h3>
                  <p className="text-center">
                    Estamos abertos das 8h às 20h, <br /> facilitando suas
                    compras quando for <br /> mais conveniente para você.
                  </p>
                </div>
              </div>

              <div className="h-[400px] xl:w-[470px] flex flex-col justify-center items-center bg-[#082D21] text-white shadow-lg rounded-lg p-4 transition-colors duration-300 hover:bg-white hover:text-[#082D21]">
                <div className="rounded-lg flex flex-col justify-center items-center gap-3">
                  <h3 className="mt-4 text-2xl font-semibold">
                    Estoque Grande
                  </h3>
                  <p className="text-center">
                    Com um estoque sempre <br /> completo, você encontra tudo o{" "}
                    <br /> que precisa, sem perder tempo.
                  </p>
                </div>
              </div>

              <div className="h-[400px] xl:w-[470px] flex flex-col justify-center items-center bg-[#082D21] text-white shadow-lg rounded-lg p-4 transition-colors duration-300 hover:bg-white hover:text-[#082D21]">
                <div className="rounded-lg flex flex-col justify-center items-center gap-3">
                  <h3 className="mt-4 text-2xl font-semibold">
                    Estoque Grande
                  </h3>
                  <p className="text-center">
                    Com um estoque sempre <br /> completo, você encontra tudo o{" "}
                    <br /> que precisa, sem perder tempo.
                  </p>
                </div>
              </div>

              <div className="h-[400px] xl:w-[470px] flex flex-col justify-center items-center bg-[#082D21] text-white shadow-lg rounded-lg p-4 transition-colors duration-300 hover:bg-white hover:text-[#082D21]">
                <div className="rounded-lg flex flex-col justify-center items-center gap-3">
                  <h3 className="mt-4 text-2xl font-semibold">
                    Estoque Grande
                  </h3>
                  <p className="text-center">
                    Com um estoque sempre <br /> completo, você encontra tudo o{" "}
                    <br /> que precisa, sem perder tempo.
                  </p>
                </div>
              </div>

              <div className="h-[400px] xl:w-[470px] flex flex-col justify-center items-center bg-[#082D21] text-white shadow-lg rounded-lg p-4 transition-colors duration-300 hover:bg-white hover:text-[#082D21]">
                <div className="rounded-lg flex flex-col justify-center items-center gap-3">
                  <h3 className="mt-4 text-2xl font-semibold">
                    Estoque Grande
                  </h3>
                  <p className="text-center">
                    Com um estoque sempre <br /> completo, você encontra tudo o{" "}
                    <br /> que precisa, sem perder tempo.
                  </p>
                </div>
              </div>

              <div className="h-[400px] xl:w-[470px] flex flex-col justify-center items-center bg-[#082D21] text-white shadow-lg rounded-lg p-4 transition-colors duration-300 hover:bg-white hover:text-[#082D21]">
                <div className="rounded-lg flex flex-col justify-center items-center gap-3">
                  <h3 className="mt-4 text-2xl font-semibold">
                    Acompanhamento da Obra
                  </h3>
                  <p className="text-center">
                    Ajudamos a calcular a quantidade <br /> ideal de material,
                    evitando <br />
                    desperdícios para sua obra.
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-[#0D6B4A] text-white px-10 py-4 text-lg font-bold rounded-md hover:bg-[#FF6600] transition duration-200">
              Tenho Interesse!
            </button>
          </section>

          <section className="space-y-12 my-32 px-10 py-16 text-center bg-[#082D21]">
            <h1 className="text-5xl font-bold text-center">
              Está preparado para elevar o nível <br /> da sua construção? Sair
              do <span className="text-[#FF6600]">Básico</span>
            </h1>
            <p className="text-2xl">
              Se você ficou com alguma dúvida, sobre como podemos te <br />{" "}
              ajudar, clique no botão abaixo para conversarmos.
            </p>
            <button className="bg-[#0D6B4A] text-white px-10 py-4 text-lg font-bold rounded-md hover:bg-[#FF6600] transition duration-200">
              Tenho Dúvidas!
            </button>
          </section>

          <div className="fixed xl:bottom-6 xl:right-28 2xl:right-14 bottom-4 right-4">
            <a
              aria-label="Tire suas dúvidas ou compre pelo whatsapp"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5519995820350&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20produtos!!"
            >
              <button
                className="bg-[#0D6B4A] hover:bg-[#20c157] hover:scale-110 duration-150 transition text-white py-3 px-3 rounded-full shadow-lg"
                aria-label="Whatsapp Flutuante"
              >
                <Image
                  src="/whatsapp.svg"
                  alt="Whatsapp flutuante"
                  width={40}
                  height={40}
                />
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
