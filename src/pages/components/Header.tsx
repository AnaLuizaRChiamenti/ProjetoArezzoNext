import Image from "next/image";
import zzlogo from '../../../public/Images/Logos/ZZLOGO.png';
import icon_local from '../../../public/Images/Icons/icon-local.svg';
import icon_favorite from '../../../public/Images/Icons/icon-favorite.svg';
import icon_people from '../../../public/Images/Icons/icon-people.svg';
import icon_bag from '../../../public/Images/Icons/icon-bag.svg';

export default function Header() {
    return (
        <header className="bg-slate-500 w-full h-28 flex items-center justify-between px-20">
            <div className="flex items-center gap-20">
                <Image alt="arezzo-logo" src={zzlogo} width={100} height={50} />
                <nav className="flex gap-8">
                    <button className="btn-hover-effect">NOVIDADES</button>
                    <button className="btn-hover-effect">SAPATOS</button>
                    <button className="btn-hover-effect">BOTAS</button>
                    <button className="btn-hover-effect">BOLSAS</button>
                    <button className="btn-hover-effect">ACESSÓRIOS</button>
                    <button className="btn-hover-effect">PROMOÇÕES</button>
                    <div className="w-0.5 h-8 bg-black" />
                    <button className="btn-hover-effect">BRIZZA</button>
                </nav>
            </div>

            <section className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                    <button className="flex items-center">
                        <Image src={icon_local} alt="ícone de localização" width={35} height={35} />
                        <p className="underline ml-2">ATIVE SUA LOCALIZAÇÃO</p>
                    </button>
                </div>

                <button>
                    <Image src={icon_favorite} alt="ícone de favoritos" width={35} height={35} />
                </button>

                <button>
                    <Image src={icon_people} alt="ícone de perfil" width={33} height={35} />
                </button>

                <button>
                    <Image src={icon_bag} alt="ícone de sacola" width={35} height={35} />
                </button>
            </section>

        </header>
    );
}
