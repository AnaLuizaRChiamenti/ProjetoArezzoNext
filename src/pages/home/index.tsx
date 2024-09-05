import Image from "next/image";
import img_main_banner from '../../../public/Images/Banner/main_banner.png';

export default function MainBanner() {
    return (
        <div className="relative w-full h-[calc(100vh-130px)] overflow-hidden">
            <Image
                src={img_main_banner}
                alt="banner bolsa marrom"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
        </div>
    );
}
