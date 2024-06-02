/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import '@/app/globals.css'


const Alerte = () => {
    return (
        <div>

            <div className="relative max-w-screen-xl mx-auto bg-transparent ph_spacer">
                <div className="px-[120px] md:px-16 lg:px-4">
                    <div className="ph_container__child grid-col-2 layout-alert">
                        <div>
                            <div className="2 text">
                                <p className="paragraph2 wide-padded text-slate-900">
                                    <strong>Les tarifs des forfaits Internet</strong> sont sujets à des fluctuations fréquentes. Laissez PlanHub Price Alert vous envoyer un e-mail avec les prix les moins chers disponibles.
                                </p>

                                <div className="flex justify-center items-center">
                                    <a
                                        href="#"
                                        className="btn_basic btn_primary "
                                        style={{ width: 170, height: 48 }}
                                        title="Search"
                                        aria-label="Search"
                                    >
                                        Laissez un message
                                        <span className="icon glyphicon glyphicon-bell" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="3 img">
                            <div className="container-img">
                                <Image
                                    src="/svg/price.svg"
                                    alt="statistics"
                                    className="ph_center responsive-img"
                                    height={38}
                                    width={85}
                                />
                                <Image
                                    src="/svg/arrow.svg"
                                    alt="arrow"
                                    className="ph_center arrow"
                                    height={34}
                                    width={19}

                                />
                                <Image
                                    src="/svg/notif.svg"
                                    alt="alert"
                                    className="ph_center responsive-img"
                                    height={38}
                                    width={85}

                                />
                                <Image
                                    src="/svg/arrow.svg"
                                    alt="arrow"
                                    className="ph_center arrow"
                                    height={34}
                                    width={19}
                                />
                                <Image
                                    src="/svg/mail_send.svg"
                                    alt="mail-phone"
                                    className="ph_center responsive-img"
                                    height={38}
                                    width={85}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Alerte