import PageHero from "../components/Page/PageHero";
import PageIntro from "../components/Page/PageIntro";
import PageIconFeatureGrid from "../components/Page/PageIconFeatureGrid";
import PageImageText from "../components/Page/PageImageText";
import PageCardGrid from "../components/Page/PageCardGrid";
import PageAccordian from "../components/Page/PageAccordian";
import ServiceFormSection from "../components/Page/ServiceFormSection";

import GenuinePartsIcon from "../assets/images/service/parts.webp";
import GenuineMaintenanceIcon from "../assets/images/service/maintenance-plan.webp";
import GenuineSoftwareIcon from "../assets/images/service/software-update.webp";
import GenuineHealthChecksIcon from "../assets/images/service/health-check.webp";
import FinanceImg1 from "../assets/images/finance/mazda-assured.webp";
import FinanceImg2 from "../assets/images/finance/fixed-car-rate.webp";


const finaceCards = [
    {
        title: "Mazda Assured",
        text: [
            "Drive away with confidence for the road ahead with lower repayments^. Thanks to a Guaranteed Future Value* with a Mazda Assured car loan, you can enjoy a new Mazda more often.",
            "Build your Mazda and calculate your repayments."
        ],
        btn: "Enquire Now",
        link: "#enquire",
        image: FinanceImg1,
        alt: "Couple walking next to Mazda"
    },
    {
        title: "FIXED RATE CAR LOAN",
        text: "Take control with a Fixed Rate car loan tailored to you. Select a car loan term up to 7 years, choose your repayment frequency and the option to include a deposit or a balloon payment. Visit our build tool to create your perfect Mazda and calculate repayments.",
        btn: "Enquire Now",        
        link: "#enquire",        
        image: FinanceImg2,
        alt: "Happy Couple in front of Mazda"
    }

];

const serviceFeatures = [
    
    {
        icon: GenuinePartsIcon,
        text: "How to Apply"
    },
    {
        icon: GenuinePartsIcon,
        text: "Calculate Repayments"
    },
    {
        icon: GenuineMaintenanceIcon,
        text: "Contact Us"
    },

];

const faqs = [
    
    {
        title: "What Identification and Documents do I need to apply?",
        text: "Before applying for car finance there are several documents you need to have ready. We have a checklist you can print to make sure you have everything you need."
    },

    {
        title: "Why should I borrow from Mazda Finance?",
        text: "We calculate your rate based on your credit score and other personal criteria determined by us. This means you can always be sure of a rate that’s transparent and tailored to your circumstances. As Mazda Finance is arranged through your Mazda Dealer at the time you purchase your vehicle, it’s simple and convenient too."
    }

];

function Service() {
    return (

        <main>

            <PageHero
                eyebrow="Convenience and confidence with Mazda Finance"
                title="It's finance, your way"                
                image="/src/assets/images/page-banners/finance.webp"
                imageMobile="/src/assets/images/page-banners/finance-m.webp"
                alt=""
            />

            <PageIntro
                text="Complete your car purchase all in one place - Mazda Hometown. Get to know Mazda Hometown as they assist you in finding car finance that suits your journey with Mazda Finance.  "
            />

            <PageCardGrid
                padding="no-padding-top"
                items={finaceCards}
            />

            <PageImageText
                bgColour="grey-bg"
                title="Business Car Loans"
                text="Mazda Hometown is the perfect partner for small business and sole traders. With Mazda Finance, tailor a car finance solution to suit you and your business. Find out what you can do from the convenience of Mazda Hometown."
                image="/src/assets/images/finance/business-car-loans.webp"
                cta="Enquire Now"
            />


            <PageIconFeatureGrid
                title="Your Next Steps"
                wrapperClass="sml-wrapper"
                gridClass="grid grid-d-three-cols grid-l-two-cols"
                items={serviceFeatures}
            />

            <PageAccordian
                title="FAQs"
                items={faqs}
            />

            <ServiceFormSection
                title="Book a Service"
                text="Need a service?"
            />

        </main>        

    )
}

export default Service;