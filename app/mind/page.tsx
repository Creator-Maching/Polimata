import Link from "next/link";
import Image from "next/image";

export default function World() {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      <h1 className="text-3xl font-bold m-4 justify-center">Mundo Mental</h1>

      <p className="m-4 p-5 flex flex-wrap justify-center fixed-button">
        Nessa série de estudos iremos focar nos seres humanos
        e suas criações. A cultura, a ideologia, a mente e o poder 
        são os temas que iremos abordar. Esses são os estudos que explicam 
        como a humanidade se organiza, se relaciona e se desenvolve. 
        Desde as tradições culturais até as estruturas de poder, tudo aquilo 
        que é resultado da criação humana, mas que também influencia a nossa 
        existência e a nossa percepção do mundo.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <div className="m-4">
          <a href="/pdfs/Cultura.pdf" target="_blank">
          <h2 className="text-3xl font-bold m-4 fixed-top">Cultura</h2>
              <Image src="/images/cultura.png" alt="Cultura" width={300} height={300}/>
          </a>
        </div>

        <div className="m-4">
          <a href="/pdfs/Ideologia.pdf" target="_blank">
          <h2 className="text-3xl font-bold m-4">Ideologia</h2>
            <Image src="/images/ideologia.png" alt="Ideologia" width={300} height={300} />
          </a>
        </div>

        <div className="m-4">
          <a href="/pdfs/mente.pdf" target="_blank">
          <h2 className="text-3xl font-bold m-4">Mente</h2>
            <Image src="/images/mente.png" alt="Mente" width={300} height={300} />
          </a>
        </div>

        <div className="m-4">
          <a href="/pdfs/poder.pdf" target="_blank">
          <h2 className="text-3xl font-bold m-4">Poder</h2>
            <Image src="/images/poder.png" alt="Poder" width={300} height={300} />
          </a>
        </div>
      </div>
    </div>
  );
}