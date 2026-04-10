import Link from "next/link";
import Image from "next/image";

export default function World() {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      <h1 className="text-3xl font-bold m-4 justify-center">Mundo Tecnológico</h1>

      <p className="m-4 p-5 flex flex-wrap justify-center fixed-button">
        Nessa série de estudos iremos abordar 
        a tecnologia e o progresso humano. O progresso, os avanços 
        tecnológicos, os veículos e o mundo digital. Esses são os 
        estudos que explicam como a humanidade tem transformado o 
        mundo ao seu redor por meio da inovação e da criatividade. 
        Desde as primeiras ferramentas de pedra até as tecnologias 
        mais avançadas, tudo aquilo que é resultado da engenhosidade
        humana e que tem moldado a nossa sociedade e a nossa forma de viver.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <div className="m-4">
          <a href="/pdfs/progresso.pdf" target="_blank">
          <h2 className="text-3xl font-bold m-4 fixed-top">Progresso</h2>
              <Image src="/images/progresso.png" alt="Progresso" width={300} height={300}/>
          </a>
        </div>

        <div className="m-4">
          <a href="/pdfs/tecnologicos.pdf" target="_blank">
          <h2 className="text-3xl font-bold m-4">Tecnológicos</h2>
            <Image src="/images/tecnologicos.png" alt="Tecnológicos" width={300} height={300} />
          </a>
        </div>

        <div className="m-4">
          <a href="/pdfs/veiculos.pdf" target="_blank">
          <h2 className="text-3xl font-bold m-4">Veículos</h2>
            <Image src="/images/veiculos.png" alt="Veículos" width={300} height={300} />
          </a>
        </div>

        <div className="m-4">
          <a href="/pdfs/aqua_voadores.pdf" target="_blank">
          <h2 className="text-3xl font-bold m-4">Veículos Aquáticos </h2>
          <h2 className="text-3xl font-bold m-4">e Voadores </h2>
            <Image src="/images/voadores.png" alt="Voa" width={300} height={300} />
          </a>
        </div>
        <div className="m-4">
          <a href="/pdfs/mundodigital.pdf" target="_blank">
          <h2 className="text-3xl font-bold m-4">Mundo Digital</h2>
            <Image src="/images/digital.png" alt="Digital" width={300} height={300} />
          </a>
        </div>
        <div className="m-4">
          <a href="/pdfs/mentemaquina.pdf" target="_blank">
          <h2 className="text-3xl font-bold m-4">Mente e Máquina</h2>
            <Image src="/images/ia.png" alt="IA" width={300} height={300} />
          </a>
        </div>
      </div>
    </div>
  );
}