import PageHero from "../components/Page/PageHero";
import PageIntro from "../components/Page/PageIntro";
import PageIconFeatureGrid from "../components/Page/PageIconFeatureGrid";
import PageImageText from "../components/Page/PageImageText";
import PageCardGrid from "../components/Page/PageCardGrid";
import PageAccordian from "../components/Page/PageAccordian";
import FinanceFormSection from "../components/Page/FinanceFormSection";
import PageDisclaimer from "../components/Page/PageDisclaimer";

import GenuinePartsIcon from "../assets/images/service/parts.webp";
import GenuineMaintenanceIcon from "../assets/images/service/maintenance-plan.webp";
import GenuineSoftwareIcon from "../assets/images/service/software-update.webp";
import GenuineHealthChecksIcon from "../assets/images/service/health-check.webp";
import FinanceImg1 from "../assets/images/finance/mazda-assured.webp";
import FinanceImg2 from "../assets/images/finance/fixed-car-rate.webp";

import financeFaqs from "../data/financeFaqs.js";

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

const financeFeatures = [
    
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

const financeDisclaimer = [

    "Approved applicants only. Terms, conditions, fees, charges & lending criteria apply. Mazda Finance is a division of Australian Alliance Automotive Finance Pty Limited ABN 63 002 407 703, Australian Credit Licence 513747. Click here to view our privacy policy.",
    "*The GFV is the minimum value of your Mazda at the end of your finance contract, as determined by Mazda Finance. If you decide to return your car to Mazda Finance at the end of your term, Mazda Finance will pay you the agreed GFV, which will be put against your final payment subject to fair wear and tear conditions and agreed kilometres being met. Terms, conditions, fees, charges & lending criteria apply. Approved applicants only. Mazda Finance is a division of Australian Alliance Automotive Finance Pty Limited ABN 63 002 407 703, Australian Credit Licence 513747.",
    "^Lower repayments compared to a similar term with no balloon final payment. Total interest charges will be higher if a balloon final payment is selected.",
    "Target Market Determinations are available here.",
    <>Click <a href="/my-link">here</a> to view our Consumer Data Right policy.</>
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
                gridClass="grid-l-two-cols t-center-below-t"
                title="Business Car Loans"
                text="Mazda Hometown is the perfect partner for small business and sole traders. With Mazda Finance, tailor a car finance solution to suit you and your business. Find out what you can do from the convenience of Mazda Hometown."
                image="/src/assets/images/finance/business-car-loans.webp"
                cta="Enquire Now"
            />


            <PageIconFeatureGrid
                title="Your Next Steps"
                wrapperClass="sml-wrapper"
                gridClass="grid grid-d-three-cols grid-t-two-cols"
                items={financeFeatures}
            />

            <PageAccordian
                title="FAQs"
                items={financeFaqs}
            />

            <FinanceFormSection
                bgColour="grey-bg"
                title="Make a Finance Enquiry"
                text="Speak to our Finance team today. Complete your car purchase all in one place."
            />

            <PageDisclaimer
                bgColour="grey-bg"
                items={financeDisclaimer}
            />

        </main>        

    )
}

export default Service;