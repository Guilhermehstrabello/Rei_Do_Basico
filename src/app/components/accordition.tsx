import { useState } from 'react';

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Define o estado como número ou null

  const toggleAccordion = (index: number): void => { // Define o tipo do parâmetro como number
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="2xl:w-[calc(1640px+280px)] xl:w-[calc(1240px+280px)] 2xl:-ml-[260px] xl:-ml-[40px] flex flex-col bg-gradient-to-b from-[#08221F] via-[#082D22] to-[#08221F] gap-8 mb-24 mt-20">
      <button className="py-4" onClick={() => toggleAccordion(0)}>
        <h2 className="text-[68px] font-bold">Missão</h2>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${openIndex === 0 ? 'max-h-[200px]' : 'max-h-0'}`}>
        {openIndex === 0 && (
          <p className="text-base mx-auto md:w-[540px] w-[320px] text-left text-white">Oferecer materiais de construção de alta qualidade e acessíveis para transformar projetos em realidade, garantindo praticidade, eficiência e excelência no atendimento, ajudando nossos clientes a construir seus sonhos com solidez e segurança.</p>
        )}
      </div>

      <button className="py-4" onClick={() => toggleAccordion(1)}>
        <h2 className="text-[68px] font-bold">Valores</h2>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${openIndex === 1 ? 'max-h-[560px]' : 'max-h-0'}`}>
        {openIndex === 1 && (
          <p className="text-base mx-auto md:w-[780px] w-[320px] text-left text-white space-y-6">
            <span className='font-bold'>Compromisso com a Qualidade: </span> Fornecer produtos confiáveis e duráveis que atendam às necessidades dos clientes. <br />
            <span className='font-bold'>Excelência no Atendimento: </span> Priorizar o relacionamento com o cliente, garantindo uma experiência personalizada. <br />
            <span className='font-bold'>Transparência: </span> Manter uma comunicação clara e honesta em todas as etapas, desde a compra até a entrega. <br />
            <span className='font-bold'>Inovação: </span> Estar sempre atualizado com as últimas tendências e soluções do setor para oferecer o melhor aos nossos clientes. <br />
            <span className='font-bold'>Sustentabilidade: </span> Compromisso com práticas sustentáveis, promovendo o uso consciente dos recursos e o respeito ao meio ambiente. <br />
          </p>
        )}
      </div>

      <button className="py-4" onClick={() => toggleAccordion(2)}>
        <h2 className="text-[68px] font-bold">Expertise</h2>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${openIndex === 2 ? 'max-h-[260px]' : 'max-h-0'}`}>
        {openIndex === 2 && (
          <p className="text-base mx-auto md:w-[720px] w-[320px] text-left text-white">Ser reconhecido como referência em materiais de construção, oferecendo bem mais do que o básico, tornando-se a primeira escolha de nossos clientes em toda a região. Buscamos trabalhar com foco 100% na qualidade, no atendimento de excelência e no desenvolvimento sustentável do setor de construção civil.</p>
        )}
      </div>
    </section>
  );
};

export default Accordion;
