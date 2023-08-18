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
            response: "Wekavit est une application d'épargne et d'investissement facile à utiliser et accessible de partout permettant à tous et à toutes d'épargner de l'argent pour des objectifs futurs et d'investir dans des projects lucratifs, générateurs des intérêts sur investissement. Avec Wekavit votre liberté financière n'est qu'une question de 2, 3 cliques."
        },
        {
            id: 1,
            key: 1,
            question: "Pourquoi utliser Wekavit ?",
            response: "Utiliser Wekavit pour promouvoir votre indépendance financière en faisant des épargnes à longs ou à courts termes, selon votre durée choisie, selon votre montant voulu et réalisez vos projets. Avec wekavit vous pouvez lier chaque épargne à un objectif bien précis et la date de réalisation de cet objectif. Wekavit laisse aussi votre argent travailler pour vous au moyen des investissements dans des projets rentables et prometeurs proposés par la plateforme"
        },
        {
            id: 2,
            key: 2,
            question: "Quel moyen de paiement pour faire un dépôt ou un retrait ?",
            response: "Utilisez votre opérateur mobile pour faire vos retraits et dépôts, pour le Burundi usez de Lumicash pour déposer de l'argent sur votre compte Wekavit, vous pourrez par la suite précisez le numéro sur lequel vous voulez recevoir le montant que vous voulez retirer. Pour la RDC utilisez AirtelMoney pour vos dépôts et vos retraits. Vous pouvez le faire via un agent de votre opérateur mobile ou via votre compte personnel Mobile Money."
        },
        {
            id: 3,
            key: 3,
            question: "Comment faire mon dépôt initial ?",
            response: "Aprés avoir fini la création de votre compte, (1) appuyez sur déposer, sur l'interface vous allez voir les étapes à suivre, (2) vous allez récupérer le numéro de compte de Wekavit, (3) vous allez y effectuer un dépôt ou un envoi du montant que vous voulez déposer, prenez le code de la transaction (3) complétez le formulaire de confirmation de la transaction, (4) dans un lapse de temps vous allez recevoir le message de confirmation de votre dépôt. Avec cela vous avez déjà une balance avec laquelle vous pouvez débuter votre voyage Wekavit, épargnez, investissez selon votre choix. Il est temps de relancer votre état financier et de planifier la réalisations de vos objectifs"
        },
        {
            id: 4,
            key: 4,
            question: "Comment puis-je commencer à épargner ?",
            response: "C'est simple, il vous suffit de (1) créer votre compte avec votre numéro de téléphone plus d'autres détails,(2) puis avec votre numéro de téléphone vous effectuez votre premier dépôt via votre opérateur mobile pour débiter votre balance, (3) finalement vous cliquez sur l'option (épargne) pour garder en sécurité votre argent selon votre délai choisi, selon le montant entré et selon votre balance"
        },
        {
            id: 5,
            key: 5,
            question: "Comment puis-je commencer à investir?",
            response: "Dans la bannière investissement de l'application, il y a une liste des projets prometeurs, sérieux, étudiez et analysez par Wekavit et en contrat avec Wekavit. Sur chaque projet vous avez la possibilité d'investir un montant, l'application calcule vos gains sur une durée précise. Wekavit endosse la responsabilité de vos investissements et s'engage à respecter à la lettre les termes et conditions de tout investissement faites sur son interface et assure le dépôt de vos gains sur investissement à temps convenu."
        },
        {
            id: 6,
            key: 6,
            question: "Quel montant puis-je épargner ?",
            response: "Vous pouvez épargnez n'importe quel montant avec Wekavit, Wekavit a été conçue pour servir tout le monde selon leurs besoins et leurs moyens. Avec Wekavit l'indépendance financière est plus qu'aujourd'hui possible peu importe votre profession, votre niveau de vie, votre statut, que vous soyez commerçant, étudiant, pharmacien, militaire, professeur, ingénieur vous avez le droit de prendre en main le cours de votre vie."
        },
        {
            id: 7,
            key: 7,
            question: "Quel montant puis-je investir ?",
            response: "Vous pouvez investir n'importe quel montant avec Wekavit, sur chaque projet disponible, le pourcentage de gain est spéecifé, plus votre investissement est raisonable, plus vos gains sont considérables. Avec Wekavit tout le monde a droit de fructifier son argent, investissez et laissez votre argent travailler à votre place."
        },
        {
            id: 7,
            key: 7,
            question: "Comment protéger mon épargne ?",
            response: "Avec Wekavit, vous épargnez votre argent tout en précisant la date à la quelle vous pourrez accomplir votre objectif, et donc retirer votre épargne. Choisissez avec précision la durée de votre épargne car le retrait de votre épargne ne sera possible qu'à la fin de ce délai. Avec cela Wekavit vous aide à proteger votre argent de toute dépense en dehors de la réalisation de vos objectifs fixés. Wekavit vous accompagne sur votre voyage vers une éducation financière saine et une vie pleine de réussite et d'accomplissements."
        },
        {
            id: 8,
            key: 8,
            question: "Mon épargne est il progeté ?",
            response: "En plus de protéger votre épargne de toute utilisation en dehors de vos objectifs, Wekavit fait en sorte que vous soyez le(a) seul(e) à avoir accès à votre compte. A l'aide de vos identités personnelles et confidentielles, de la double authentication Wekavit assure le non accès à votre compte à tout individu n'ayant pas le droit d'y accéder."
        },
        {
            id: 9,
            key: 9,
            question: "Mon investissement est il progeté ?",
            response: "Tout projet d'investissement disponible sur Wekavit, est en partenariat avec Wekavit et ce n'est qu'après une analyse approfondie et experte de chaque projet et un accord commun sur le respect de toutes les conditions et termes que Wekavit selectionne un projet dans lequel vous pouvez investir. Vos investissements sont protégés par des contrats assumés par Wekavit. Touts vos pourcentages et gains sont assumés et pris en charge par Wekavit, tout projet d'investissement sur Wekavit est digne de confiance."
        },
        {
            id: 10,
            key: 10,
            question: "Combien d'épargnes peux-je faire ?",
            response: "Vous pouvez épargnez autant de fois que vous le voulez, autant de fois que vous avez de montant à garder en sécurité pour réaliser un projet, un objectif précis. Wekavit vous accompagne dans toutes les étapes de votre vie, en vous aidant à planifier et à investir dans chacun de vos projets, selon votre choix et selon votre montant. Wekavit prône la liberté financière et le progrès de tout un chacun de nous. Votre vie de rêve vous attend à l'horizon c'est maintenant ou jamais qu'il faut épargner et investir."
        },
        {
            id: 11,
            key: 11,
            question: "Combien de fois peux-je investir ?",
            response: "Comme pour les épargnes, vous avez la possiblité et la liberté d'investir autant de fois que vous le voulez, vous pouvez investir plusieurs fois sur plusieurs projets de votre choix. Plus vous multipliez vos investissements, plus vous multipliez vos intérêts, chaque investissement et peu importe le montant vous génère un gain sur une durée bien déterminée. En quelques cliques, laissez votre argent travailler à votre place et regarder vos gains se multiplier chaque jour. La liberté financière appartient aux plus ambitieux !"
        },
        {
            id: 12,
            key: 12,
            question: "Comment retirer mon épargne ?",
            response: "C'est simple, ouvrez votre compte, vérifiez toutes vos épargnez et cliquez sur celle vous voulez retirer et vous recevrez directement votre argent sur votre numéro de téléphone. Weakvit a confiance en vous, allez et réalisez vos objectifs, vos projets, voyagez, investissez, soyez libres. Votre succès et votre progrès est notre plus grande fierté, Réussissons ensemble"
        },
        {
            id: 13,
            key: 13,
            question: "Comment retirer mon intérêt sur investissement ?",
            response: "Aussi facile que possible, ouvrez votre compte, entrez dans vos investissements et vous verrez touts vos investissements disponibles pour le retrait, cliquez sur l'investissement de votre choix, vous avez le (1) choix de verser vos intérêts dans votre compte initial, l'augmenter sur votre balance ou (2) completez le formulaire de retrait et recevez vos gains sur votre numéro de téléphone. Avec vos gains vivez la vie de vos rêves, faites grandir vos business, voyagez, construisez, profitez d'une vie stable et contrôlée."
        },
        {
            id: 14,
            key: 14,
            question: "Quand retirer mon épargne ?",
            response: "En faisant votre épargne, vous précisez la durée après laquelle vous pouvez retirer le montant épargné, avant la fin de cettre durée votre épargne est protégé de toute utilisation en dehors de votre objectif, avant la fin de cette durée que vous avez choisi votre épargne est bloqué de tout retrait, de toute sous-utilisation, votre épargne est gardé que pour la réalisation de vos objectifs. Avec cette fonctionnalité Wekavit vous fait maître de votre progrès."
        },
        {
            id: 15,
            key: 15,
            question: "Quand retirer mon investissement ?",
            response: "Avant d'investir sur un projet, vérifiez bien les détails de l'investissement, parmi ces détails, il y a la durée que va prendre votre investissement pour vous générer des gains et le pourcentage de vos gains. Pendant cette durée votre argent sera entrain de se multiplier sans que vous puissiez intervenir même pendant que votre sommeil votre argent continue à se multiplier, à la fin de cette durée vous avez directement accès à vos intérêts, que vous pouvez retirer quand vous le voulez ou les investir sur d'autres projets car rappelez-vous plus vous investissez, plus vous gagnez !."
        }

    ]

    const Answsers = faqs.map((item) => <Collapse question={item.question} response={item.response} key={item.key} id={item.id} />)
    return (
        <div className='pt-48 w-full h-auto flex flex-col justify-center sm:items-center'>
            <p className="text-center font-semibold text-4xl text-hero-text leading-tight mb-4 sm:w-full sm:text-center sm:text-1.56rem sm:tracking-normal sm:leading-normal sm:mb-2 md:tracking-normal md:text-3xl md:w-full">Questions fréquemment posées</p>
            <h4 className='text-base text-light-gray text-center mb-3 sm:text-xs sm:w-2/3 font-medium md:text-sm sm:mt-2 sm:mb-0'>Tout ce que vous devez savoir sur le produit et sa facturation</h4>
            <div className='w-full flex flex-col justify-center items-center mt-10'>{Answsers}</div>
            <div className='w-full h-auto px-5 mb-7 mt-10'>
                <div className='w-full flex flex-col items-center bg-white py-10 px-20 sm:px-3'>
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
