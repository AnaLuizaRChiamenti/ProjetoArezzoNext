import Image from "next/image";
import img_main_banner from '/public/Images/Banner/main_banner.png';
import img_second_banner from '/public/Images/Banner/second_banner.png';
import img_second_banner_2 from '/public/Images/Banner/second_banner_2.png';
import Card from "../components/Card";

export default function MainHome() {
    return (
        <>
            <section className="relative w-full h-screen overflow-hidden">
                <Image
                    src={img_main_banner}
                    alt="banner bolsa marrom"
                    fill
                    className="relative z-0"
                />
                <button className="uppercase absolute bottom-10 mb-5 left-1/2 transform -translate-x-1/2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full shadow-lg hover:bg-black z-20">
                    Confira
                </button>
                <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center py-2 z-10">
                    <p className="text-sm text-[12px] tracking-widest uppercase">
                        <strong>Frete FIXO</strong> em R$9,90 para regiões Sul, Sudeste e capitais de NE e CO.
                    </p>
                </div>
            </section>

            <section className="w-full bg-white py-10">
                <div className="container mx-auto px-10">
                    <div className="flex items-start">
                        <div className="flex flex-col justify-center items-start">
                            <p className="uppercase text-base mb-4">Nova coleção</p>
                            <h2 className="uppercase text-2xl tracking-widest">#Liviaarezzo</h2>
                        </div>
                        <div className="flex items-end gap-1 ml-8">
                            <Image
                                src={img_second_banner_2}
                                alt="banner com a Livia deitada"
                                className="relative z-0"
                            />
                            <Image
                                src={img_second_banner}
                                alt="banner com a Livia ajeitando o coturno"
                                className="relative z-0"
                            />

                            <div className="ml-8 flex flex-col items-start">
                                <p className="text-xl">Conheça o novo coturno</p>
                                <p className="text-lg">Livia Arezzo</p>
                                <button className="bg-black text-sm text-white px-4 py-4 rounded-full mt-5">
                                    Ver coleção
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-gray-100 py-10">
                <div className="mx-auto px-16">
                    <div className="flex justify-between items-center">
                        <h2 className="uppercase text-2xl tracking-widest">Apostas da semana</h2>
                        <button className="underline text-black px-6 py-3 rounded-full text-lg">
                            Ver todos os produtos
                        </button>
                    </div>
                </div>
                <Card />
            </section>

        </>
    );
}
