import PageHero from "../components/Page/PageHero";
import PageIntro from "../components/Page/PageIntro";
import PageIconFeatureGrid from "../components/Page/PageIconFeatureGrid";
import PageImageText from "../components/Page/PageImageText";
import PageCardGrid from "../components/Page/PageCardGrid";
import ServiceFormSection from "../components/Page/ServiceFormSection";

import GenuinePartsIcon from "../assets/images/service/parts.webp";
import ServiceExplainedImg1 from "../assets/images/page-banners/service.webp";


const serviceFeatures = [
    {
        icon: GenuinePartsIcon,
        title: "Genuine Parts",
        text: "We only use parts made for Mazda, by Mazda."
    },
    {
        icon: GenuinePartsIcon,
        title: "Software Updates",
        text: "Updating your Mazda with the latest driver technologies."
    },
    {
        icon: GenuinePartsIcon,
        title: "Ongoing Maintenance Plan",
        text: "Preserve your vehicle's value with a tailored service schedule."
    },
    {
        icon: GenuinePartsIcon,
        title: "Full Health Checks",
        text: "Our unique Modular Diagnostic system tests your vehicle's vital functions."
    }
];

const serviceExplained = [
    {
        title: "HOW MUCH WILL MY NEXT SERVICE COST?",
        text: "Type in your VIN or registration number, and we'll estimate this for you.",
        image: ServiceExplainedImg1
    },
    {
        title: "Software Updates",
        text: "Type in your VIN or registration number, and we'll estimate this for you.",
        image: ServiceExplainedImg1
    }

];

function Service() {
    return (

        <main>

            <PageHero
                title="Mazda Service Select"
                image="/src/assets/images/page-banners/service.webp"
                imageMoible="/src/assets/images/page-banners/service-m.webp"
                alt=""
            />

            <PageIntro
                title="Genuine Confidence"
                text="When it comes to keeping your vehicle in tip-top shape, only a Mazda Genuine Service can deliver the assurance and peace of mind you’re looking for."
            />

            <PageIconFeatureGrid
                title="Why Service With Us?"
                columns={2}
                items={serviceFeatures}
            />

            <PageImageText
                title="Over 150 Certified Mazda Service Dealerships Nationwide"
                text="Wherever you are, genuine service for your Mazda is never far away."
                image="/src/assets/images/page-banners/service.webp"
            />

            <PageCardGrid
                title="Our Servicing Pricing explained"
                text="We make it as simple as possible to understanding our service pricing."
                items={serviceExplained}
            />


            <ServiceFormSection
                title="Book a Service"
                text="Need a service?"
            />

        </main>        

    )
}

export default Service;