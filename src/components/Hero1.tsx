/* eslint-disable react/no-unescaped-entities */
'use client'
import { SetStateAction, useState } from 'react';
import Image from 'next/image';

interface HeroProps {
    activeHero: number;
    handleClick: (num: number) => void;
}




const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleAccordionClick = (index: SetStateAction<number>) => {
        setActiveIndex(index);
    };

    return (
        <section id="Acc5" className="py-8">
            <div className="heroes flex flex-col items-center space-y-8">
                <div id="MEA1-iphone15-mobile" className={`hero iphone15-mobile w-full flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-black via-red-600 to-purple-600 p-6 rounded-lg ${activeIndex === 0 ? '' : 'hidden'}`}>
                    <div className="L text-center md:text-left text-white">
                        <strong className="text-3xl">iPhone 15</strong>
                        <p>De la magie dans l’image</p>
                    </div>
                    <div className="M flex justify-center relative">
                        <Image className="illu w-80 h-auto"
                            src="/images/iphone.webp"
                            alt="iPhone 15"
                            width={1840}
                            height={628}
                        />
                        <Image className="illu mob w-40 h-auto absolute bottom-0 left-1/2 transform -translate-x-1/2"
                         src="/images/iphone1.webp" 
                         alt="iPhone 15" 
                           width={312}
                          height={416}
                         />
                    </div>
                    <div className="R text-center md:text-right text-white">
                        <span className="sticker bg-white text-red-600 px-3 py-1 rounded-full">Bonus reprise de 100€</span>
                        <div className="price text-6xl flex justify-center md:justify-end items-start">
                            <span className="L">59</span>
                            <span className="R text-2xl">€</span>
                        </div>
                        <p className="info">+16,75€/mois pendant 24 mois<br />Avec le forfait 210 Go 5G<br />Engagement 24 mois</p>
                        <a href="#" className="btn3 bg-white text-red-600 px-6 py-3 rounded-full mt-4 inline-block">En profiter</a>
                    </div>
                    <div className="B text-center mt-4">
                        <span className="das text-white cursor-pointer">DAS</span>
                        <div className="bubble hidden bg-white text-red-600 p-4 rounded-lg shadow-lg mt-2">
                            DAS iPhone 15<br />Tête : 0.98 W/kg<br />Tronc : 0.98 W/kg<br />Membres : 2.98 W/kg
                        </div>
                    </div>
                </div>

                <div id="MEA2-TF-Avril-Fibre-fixe" className={`hero TF-Avril-Fibre-fixe w-full ${activeIndex === 1 ? '' : 'hidden'} flex flex-col md:flex-row items-center justify-between bg-red-600 p-6 rounded-lg`}>
                    <div className="L text-center md:text-left text-white">
                        <strong className="text-3xl">fibre + TV <br />+ téléphonie</strong>
                    </div>
                    <div className="M flex justify-center">
                        <Image className="illu w-80 h-auto"
                            src="/images/22187_visuel_desktop_v3.webp"
                            alt="Offre internet abonnement Fibre 29,99€ par mois"
                            width={1240}
                            height={628}
                        />
                        <Image className="illu mob w-40 h-auto"
                            src="/images/21996_visuel_mobile.webp"
                            alt="Offre internet abonnement Fibre 29,99€ par mois"
                            width={312}
                            height={416}
                        />
                    </div>
                    <div className="R text-center md:text-right text-white">
                        <div className="price text-6xl flex justify-center md:justify-end items-start">
                            <span className="L">29</span>
                            <span className="R text-2xl">€99</span>
                            <span className="R text-xl">/mois</span>
                        </div>
                        <p className="info">Engagement 12 mois</p>
                        <a href="/offre-internet" className="btn3 bg-white text-red-600 px-6 py-3 rounded-full mt-4 inline-block">En profiter</a>
                    </div>
                </div>

                <div id="MEA3-googlepixel8a-mobile" className={`hero googlepixel8a-mobile w-full ${activeIndex === 2 ? '' : 'hidden'} flex flex-col md:flex-row items-center justify-between bg-red-600 p-6 rounded-lg`}>
                    <div className="L text-center md:text-left text-white">
                        <Image className="logo inline-block"
                            src="/images/logo_google.svg"
                            alt="Logo Google"
                            width={124}
                            height={62} 
                            />
                        <p>Nouveau</p>
                        <p className="title text-3xl">Google Pixel 8a</p>
                        <p>avec Google AI*</p>
                    </div>
                    <div className="M flex justify-center">
                        <Image className="illu mob w-40 h-auto"
                            src="/images/22745_visuel_mobile.webp"
                            alt="Google Pixel 8a, 150€ de bonus reprise"
                            width={312}
                            height={416}
                        />
                        <Image className="illu w-80 h-auto"
                            src="/images/22745_visuel_desktop.webp"
                            alt="Google Pixel 8a, 150€ de bonus reprise"
                            width={1240}
                            height={627}
                        />
                    </div>
                    <div className="R text-center md:text-right text-white">
                        <div className="price text-6xl flex justify-center md:justify-end items-start">
                            <span className="L">1</span>
                            <span className="R text-2xl">€</span>
                        </div>
                        <p className="info">Avec le forfait 210 Go 5G<br />Engagement 24 mois</p>
                        <a href="/google-pixel8a?forfait=SFR_RFL1_210GO_5G_G1FA%7CG1FA&amp;paymentmode=EN24X" className="btn2 bg-white text-red-600 px-6 py-3 rounded-full mt-4 inline-block">En profiter</a>
                    </div>
                    <div className="B text-center mt-4">
                        <span>*AI = IA = Intelligence Artificielle.</span>
                        <span className="das text-white cursor-pointer">DAS</span>
                        <div className="bubble hidden bg-white text-red-600 p-4 rounded-lg shadow-lg mt-2">
                            DAS Tête : 1 W/kg<br />DAS Tronc : 1.2 W/kg<br />DAS Membres : 2.5 W/kg
                        </div>
                    </div>
                </div>

                <div id="MEA4-Box-8x" className={`hero Box-8x w-full ${activeIndex === 3 ? '' : 'hidden'} flex-col md:flex-row items-center justify-between bg-red-600 p-6 rounded-lg`}>
                    <div className="L text-center md:text-left text-white">
                        <strong className="text-3xl">fibre SFR Box 8X</strong>
                        <p>Une puissance incroyable</p>
                    </div>
                    <div className="M flex justify-center">
                        <Image className="illu w-80 h-auto"
                            src="/images/22094_visuel_desktop_v2.webp"
                            alt="Box 8X jusqu'à 8Gb/s en téléchargement avec SFR Fibre Premium avec le Wi-FI 6"
                            width={124}
                            height={62}
                        />
                        <Image className="illu mob w-40 h-auto"

                            src="/images/22094_visuel_mobile.webp"
                            alt="Box 8X jusqu'à 8Gb/s en téléchargement avec SFR Fibre Premium avec le Wi-FI 6"
                            width={340}
                            height={154}
                        />
                    </div>
                    <div className="R text-center md:text-right text-white">
                        <strong className="apd block text-lg">jusqu'à</strong>
                        <div className="price text-6xl flex justify-center md:justify-end items-start">
                            <span className="L">8</span>
                            <span className="R text-2xl">€</span>
                            <span className="R text-xl">Gb/s*</span>
                        </div>
                        <a href="/box-8/" className="btn3 bg-white text-red-600 px-6 py-3 rounded-full mt-4 inline-block">Découvrir</a>
                    </div>
                    <div className="B text-center mt-4">
                        <span>*Avec SFR Fibre Premium, voir conditions</span>
                    </div>
                </div>
            </div>

            <div className="capsules flex justify-center space-x-4 mt-8">
                <div className="cap s flex flex-col items-center cursor-pointer" onClick={() => handleAccordionClick(0)}>
                    <div>
                        <Image
                            src="/images/mini_iphone-15_acc.webp"
                            alt="iPhone 15"
                            width={52}
                            height={52}

                        /></div>
                </div>
                <div className="cap s flex flex-col items-center cursor-pointer" onClick={() => handleAccordionClick(1)}>
                    <div>
                        <Image src="/images/gellule_fibreV2.webp"
                            alt="Fibre + TV + Téléphonie"
                            width={52}
                            height={52}

                        /></div>
                </div>
                <div className="cap s flex flex-col items-center cursor-pointer" onClick={() => handleAccordionClick(2)}>
                    <div>
                        
                        <Image src="/images/22745_gelule.webp"
                        alt="Google Pixel 8a"
                          width={52}
                          height={52}

                    />
                    </div>
                </div>
                <div className="cap s flex flex-col items-center cursor-pointer" onClick={() => handleAccordionClick(3)}>
                    <div><Image src="/images/22094_visuel_gelule.webp"
                        alt="Box 8X"
                        width={52}
                        height={52}
                    /></div>
                </div>
            </div>
        </section>
    );
};

export default Accordion;


