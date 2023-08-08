import React from 'react'
import { CheckCircle } from '@/assets'
import Image from 'next/image'

export default function Secure() {
    return (
        <div className='w-full h-auto flex flex-col justify-center items-center bg-white pt-14 pb-20'>
            <p className='text-primary-color mb-3 text-center font-bold text-sm sm:-mt-4'>Vous pouvez nous faire confiance</p>
            <p className="w-1/3 font-semibold text-center text-4xl text-hero-text leading-normal mb-4 sm:w-full sm:text-2xl sm:text-center md:text-2xl md:w-full md:mb-6 md:whitespace-nowrap">Nous nous engageons à prendre la sécurité très <br /> au sérieux</p>
            <div className='w-full h-auto flex justify-center items-center mb-6 sm:flex-col'>
                <div className='w-1/5 h-28 flex border-1px border-secure-border mr-3 rounded-xl p-4 sm:w-4/5 sm:m-0 sm:mb-6 md:w-2/5'>
                    <div className='w-1/5'>
                        <Image
                            src={CheckCircle}
                            width={18}
                            height={18}
                        />
                    </div>
                    <div className='w-4/5 -ml-6 mt-0.18rem'>
                        <h4 className='text-xs font-semibold text-text-dark mb-1'>Authentification à deux facteurs</h4>
                        <h4 className='text-xs text-light-gray'>sécurité à votre en exigeant un code envoyé à votre adresse mail</h4>
                    </div>

                </div>
                <div className='w-1/5 h-28 flex border-1px border-secure-border ml-3 rounded-xl p-4 sm:w-4/5 sm:m-0 md:w-2/5'>
                    <div className='w-1/5'>
                        <Image
                            src={CheckCircle}
                            width={18}
                            height={18}
                        />
                    </div>
                    <div className='w-4/5 -ml-6 mt-0.18rem'>
                        <h4 className='text-xs font-semibold text-text-dark mb-1'>Chiffrement fort</h4>
                        <h4 className='text-xs text-light-gray'>est une façon de proteger vos données en converstissant le texte en un langage de code</h4>
                    </div>

                </div>
            </div>
            <div className='w-full h-auto flex justify-center items-center sm:flex-col'>
                <div className='w-1/5 h-28 flex border-1px border-secure-border mr-3 rounded-xl p-4 sm:w-4/5 sm:m-0 sm:mb-6 md:w-2/5'>
                    <div className='w-1/5'>
                        <Image
                            src={CheckCircle}
                            width={18}
                            height={18}
                        />
                    </div>
                    <div className='w-4/5 -ml-6 mt-0.18rem'>
                        <h4 className='text-xs font-semibold text-text-dark mb-1'>Application à jour</h4>
                        <h4 className='text-xs text-light-gray'>la mise à jour regulière de votre application pour corriger toute vulnérabilité</h4>
                    </div>

                </div>
                <div className='w-1/5 h-28 flex border-1px border-secure-border ml-3 rounded-xl p-4 sm:w-4/5 sm:m-0 md:w-2/5'>
                    <div className='w-1/5'>
                        <Image
                            src={CheckCircle}
                            width={18}
                            height={18}
                        />
                    </div>
                    <div className='w-4/5 -ml-6 mt-0.18rem'>
                        <h4 className='text-xs font-semibold text-text-dark mb-1'>Assistance 24/24</h4>
                        <h4 className='text-xs text-light-gray'>vous rencontrez des problèmes, vous pouvez contacter l'équipe d'assistance pour obtenir de l'aide</h4>
                    </div>

                </div>
            </div>

        </div>
    )
}
