import React from 'react'
import { BusinessMan } from '@/assets'
import Image from 'next/image'

export default function Steps() {
    return (
        <div className="w-full px-24 py-16 flex h-auto justify-center sm:px-7 sm:flex-col sm:py-12 md:px-11">
            <div className='w-2/4 flex justify-center h-73vh object-cover sm:w-full sm:h-65vh sm:mb-6 md:w-58% md:h-57vh'>
                <Image src={BusinessMan}
                    width={500}
                    height={500}
                    alt=''
                    className='object-cover border-service-border border-2 rounded-md md:-mt-4 md:-ml-5' />
            </div>
            <div className='w-2/4 h-full flex flex-col sm:w-full sm:justify-center md:bg-slate-0 md:-mt-4 md:ml-5'>
                <p className="w-2/3 font-semibold text-4xl text-hero-text leading-tight mb-4 sm:w-full sm:text-center sm:text-1.56rem sm:tracking-normal sm:leading-normal sm:mb-2 md:tracking-normal md:text-3xl md:w-full">Cela ne prend que 5 minutes</p>
                <div className='w-full flex mb-8 md:-ml-1 md:mb-9'>
                    <div className='w-10 flex flex-col justify-center items-center text-primary-color h-auto font-black text-lg sm:text-base sm:-mt-2 md:-mt-4'>01 <hr className='rotate-90 w-20 h-2.5px border-none bg-step-divider rounded-lg mt-12 md:mt-14' /></div>
                    <div className='ml-9 mt-4 sm:ml-2 sm:flex sm:justify-center sm:flex-col sm:w-full sm:-mt-1 md:ml-3'>
                        <h3 className='font-black text-lg tracking-wider mb-4 text-dark-primary-color sm:text-base md:-mt-1 md:mb-3'>Créer un compte</h3>
                        <p className='leading-relaxed text-light-gray w-2/3 sm:w-full sm:text-sm md:w-full'>Créez un compte avec votre nom, votre adresse mail et votre numéro de téléphone.</p>
                    </div>
                </div>
                <div className='w-full flex mt-3 mb-12 md:-ml-1 md:-mb-2'>
                    <div className='w-10 flex flex-col justify-center items-center text-primary-color h-auto font-black text-lg sm:text-base md:-mt-20'>02 <hr className='rotate-90 w-32 h-2.5px border-none bg-step-divider rounded-lg mt-20' /></div>
                    <div className='ml-9 mt-1 sm:ml-3 md:ml-3 md:-mt-9'>
                        <h3 className='font-black text-lg tracking-wider mb-2 text-dark-primary-color mt-4 sm:text-base md:mb-0'>Ajouter un moyen de paiement</h3>
                        <p className='leading-relaxed text-light-gray w-2/3 mt-6 sm:w-full sm:text-sm md:w-full md:mt-3 md:text-justify'>A l'aide de votre compte mobile money ou d'un virement bancaire configurez votre premier plan.</p>
                    </div>
                </div>
                <div className='w-full flex mt-8 mb-8 md:-ml-1'>
                    <div className='w-10 flex flex-col justify-center items-center text-primary-color h-auto font-black text-lg sm:text-base sm:-mt-3 md:-mt-10'>03<hr className='rotate-90 w-32 h-2.5px border-none bg-transparent rounded-lg mt-20' /></div>
                    <div className='ml-9 sm:ml-3 sm:mt-1 md:ml-3 md:-mt-1'>
                        <h3 className='font-black text-lg tracking-wider mb-4 text-dark-primary-color sm:text-base md:mb-3'>Regarder votre argent se fructifier</h3>
                        <p className=' leading-relaxed text-light-gray w-2/3 sm:w-full sm:text-sm md:w-full md:text-justify'>Asseyz vous, détendez et laissez votre travail pour vous toute la journée, tous les jours</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
