import Image from "next/image";
import zzlogo from '/public/Images/Logos/ZZLOGO.png';
import icon_local from '/public/Images/Icons/icon-local.svg';
import icon_favorite from '/public/Images/Icons/icon-favorite.svg';
import icon_people from '/public/Images/Icons/icon-people.svg';
import icon_bag from '/public/Images/Icons/icon-bag.svg';
import { navButtons } from "./utils/navButtons";
import { useEffect } from "react";
import { GetProducts } from "../api/get-products";


export default function Header() {
    return (
        <header className="w-full h-28 flex items-center justify-between px-20">
            <div className="flex items-center gap-20">
                <Image alt="arezzo-logo" src={zzlogo} width={120} height={50} />
                <nav className="flex gap-8">
                    {navButtons.map(button => (
                        <button key={button.id} className="relative hover:border-b-2 hover:border-black">
                            {button.text}
                        </button>
                    ))}
                    <div className="w-0.5 h-8 bg-black" />
                    <button className="relative hover:border-b-2 hover:border-black">BRIZZA</button>
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
