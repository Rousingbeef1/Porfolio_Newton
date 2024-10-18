import Image from "next/image";
import NavBar from "../components/Navbar";

export default function pitangaBrasil() {
    const imagem1 = require('../../../public/pitangabrasilimagens/Mask group.png')
    const imagem2 = require('../../../public/pitangabrasilimagens/Mask group-1.png')
    const imagem3 = require('../../../public/pitangabrasilimagens/Mask group-2.png')
    const imagem4 = require('../../../public/pitangabrasilimagens/Mask group-3.png')
    const imagem5 = require('../../../public/pitangabrasilimagens/Mask group-4.png')

    return (
        <>
            <NavBar></NavBar>
            
            <section className="grid grid-cols-1 gap-12 md:grid-cols-2 bg-white md:py-32 md:px-40 h-screen py-6">
                <div className="flex flex-col gap-14 md:row-start-1">
                    <Image src={imagem1} alt={"1"}></Image>
                    <Image src={imagem2} alt={"2"}></Image>
                    <Image src={imagem3} alt={"3"}></Image>
                    <div className="grid grid-flow-col grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-14">
                        <Image src={imagem4} alt={"4"}></Image>
                        <Image src={imagem5} alt={"5"}></Image>
                    </div>
                </div>
                <div className="row-start-1 md:order-0 p-4">
                    <h1 className=" md:text-[2vw] text-2xl mb-4 md:leading-normal text-black">Projeto:<br />PITANGA BRASIL</h1>
                    <span className="font-poppinsBold md:text-[1vw] text-lg text-black">Modelo:</span>
                    <span className="font-poppins md:text-[1vw] text-lg text-black"> identidade visual</span>
                    <p className="font-poppins md:text-[1vw] leading-relaxed text-lg text-black">Objetivo: desenvolver a identidade visual para uma garrafa de suco natural de pitanga, contemplando a criação do rótulo e sua adaptação para um cartão de visita.</p>
                    <p className="font-poppins md:text-[1vw] leading-relaxed mt-4 text-lg text-black">Sobre:  A logo apresenta um estilo desenhado com duas pitangas bem vermelhas, simbolizando frescor e naturalidade. O fundo em verde pastel, combinado com a cor branca, transmite uma sensação de leveza e frescor, reforçando a conexão com a natureza e a autenticidade do produto.</p>
                </div>
            </section>
        </>
    );
}