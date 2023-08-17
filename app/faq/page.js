import React from 'react'
import Collapse from './Collapse'
import Footer from '../components/Footer'
import { cedProfile } from '@/assets'
import Image from 'next/image'

export default function page() {

    const faqs = [
        {
            id: 0,
            key: 0,
            question: "Qu'est ce que Wekavit ?",
            response: "Wekavit is a mobile application that enabling people to save their money to cover their future objectives"
        },
        {
            id: 1,
            key: 1,
            question: "Pourquoi utliser Wekavit ?",
            response: "Wekavit is a mobile application that enabling people to save their money to cover their future objectives"
        },
        {
            id: 2,
            key: 2,
            question: "Comment puis-je commencer à épargner ?",
            response: "Wekavit is a mobile application that enabling people to save their money to cover their future objectives"
        },
        {
            id: 3,
            key: 3,
            question: "Quel montant peux-je épargner ?",
            response: "Wekavit is a mobile application that enabling people to save their money to cover their future objectives"
        },
        {
            id: 4,
            key: 4,
            question: "Comment protéger mon épargne ?",
            response: "Wekavit is a mobile application that enabling people to save their money to cover their future objectives"
        },
        {
            id: 5,
            key: 5,
            question: "Comment retirer mon épargne ?",
            response: "Wekavit is a mobile application that enabling people to save their money to cover their future objectives"
        },

    ]

    const Answsers = faqs.map((item) => <Collapse question={item.question} response={item.response} key={item.key} id={item.id} />)
    return (
        <div className='pt-48 w-full h-auto flex flex-col justify-center'>
            <p className="text-center font-semibold text-4xl text-hero-text leading-tight mb-4 sm:w-full sm:text-center sm:text-1.56rem sm:tracking-normal sm:leading-normal sm:mb-2 md:tracking-normal md:text-3xl md:w-full">Questions fréquemment posées</p>
            <h4 className='text-base text-light-gray text-center mb-3 sm:text-xs sm:w-2/3 font-medium md:text-sm'>Tout ce que vous devez savoir sur le produit et sa facturation</h4>
            <div className='w-full flex flex-col justify-center items-center mt-10'>{Answsers}</div>
            <div className='w-full h-auto px-5 mb-7 mt-10'>
                <div className='w-full flex flex-col items-center bg-white py-10 px-20'>
                    <div className='w-1/3 flex items-center justify-center mb-5'>
                        <Image
                            src={cedProfile}
                            alt=''
                            className='w-12 h-12 rounded-full -mr-3'
                        />
                        <Image
                            src={cedProfile}
                            alt=''
                            className='w-14 h-14 rounded-full border-1px border-white -mt-2 z-10'
                        />
                        <Image
                            src={cedProfile}
                            alt=''
                            className='w-12 h-12 rounded-full -ml-3'
                        />
                    </div>
                    <p className="text-center font-semibold text-base text-hero-text leading-tight mb-3 sm:w-full sm:text-center sm:text-1.56rem sm:tracking-normal sm:leading-normal sm:mb-2 md:tracking-normal md:text-3xl md:w-full">Avez-vous encore des questions ?</p>
                    <h4 className='text-sm text-light-gray text-center mb-3 sm:text-xs sm:w-2/3 font-medium md:text-sm'>Tout ce que vous devez savoir sur le produit et sa facturation</h4>
                    <button className='text-white bg-primary-color mt-3 flex justify-center items-center text-sm px-4 py-3 rounded-md'>Entrer en contact</button>
                </div>
            </div>

            <Footer />
        </div>
    )
}
