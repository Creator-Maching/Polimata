import Link from "next/link";
import Image from "next/image";

export default function World() {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      <h1 className="text-3xl font-bold m-4 justify-center">Mundo Material</h1>

      <p className="m-4 p-5 flex flex-wrap justify-center fixed-button">
        Nessa série de estudos iremos abordar 
        todas as ciências da natureza: física, química e 
        biologia. Esses são os estudos que explicam 
        como toda a matéria viva e não viva funcionam 
        nesse planeta. Desde pequenos neurônios até 
        estrelas colossais, por meio da anatomia de 
        seres e a esquemática dos rochas, tudo aquilo 
        que não derivou da criação humana, mas sim, 
        de eventos naturais.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <div className="m-4">
          <a href="/pdfs/mundoinorganico.pdf" target="_blank">
          <h2 className="text-3xl font-bold m-4 fixed-top">Mundo Inorgânico</h2>
              <Image src="/images/lands.png" alt="Lands" width={300} height={300}/>
          </a>
        </div>

        <div className="m-4">
          <a href="/pdfs/vida.pdf" target="_blank">
          <h2 className="text-3xl font-bold m-4">Mundo Orgânico</h2>
            <Image src="/images/animal.png" alt="Animal" width={300} height={300} />
          </a>
        </div>

        <div className="m-4">
          <a href="/pdfs/mundonatural.pdf" target="_blank">
          <h2 className="text-3xl font-bold m-4">Mundo Natural</h2>
            <Image src="/images/natural.png" alt="Nature" width={300} height={300} />
          </a>
        </div>

        <div className="m-4">
          <a href="/pdfs/Evolução.pdf" target="_blank">
          <h2 className="text-3xl font-bold m-4">Evolução</h2>
            <Image src="/images/fosseis.png" alt="Fossils" width={300} height={300} />
          </a>
        </div>
      </div>
    </div>
  );
}