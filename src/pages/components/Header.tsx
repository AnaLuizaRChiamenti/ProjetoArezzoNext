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
                <section className="flex gap-8">
                    <button>NOVIDADES</button>
                    <button>SAPATOS</button>
                    <button>BOTAS</button>
                    <button>BOLSAS</button>
                    <button>ACESSÓRIOS</button>
                    <button>PROMOÇÕES</button>
                    <div className="w-0.5 h-8 bg-black" />
                    <button>BRIZZA</button>
                </section>
            </div>

            <section className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                    <Image src={icon_local} alt="icone de localização" width={35} height={35} />
                    <p className="underline ml-2">ATIVE SUA LOCALIZAÇÃO</p>
                </div>
                <Image src={icon_favorite} alt="icone de favoritos" width={35} height={35} />
                <Image src={icon_people} alt="icone de perfil" width={33} height={35} />
                <Image src={icon_bag} alt="icone de sacola" width={35} height={35} />
            </section>
        </header>
    );
}
