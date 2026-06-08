import PageHero from "../components/Page/PageHero";
import PageIntro from "../components/Page/PageIntro";
import PageIconFeatureGrid from "../components/Page/PageIconFeatureGrid";
import PageImageTextStacked from "../components/Page/PageImageTextStacked";
import AccessoriesFormSection from "../components/Page/AccessoriesFormSection";

import DesignIcon from "../assets/images/accessories/built-last.webp";
import SafetyIcon from "../assets/images/accessories/customer-experience.webp";
import BuiltToLastIcon from "../assets/images/accessories/design.webp";
import WarrantyIcon from "../assets/images/accessories/safety.webp";
import CustomerExperienceIcon from "../assets/images/accessories/warranty.webp";

const accessoriesFeatures = [
    
    {
        itemLayout: "page-icon-feature-stacked",
        icon: DesignIcon,
        title: "Design",
        text: "Designed in parallel with vehicle to create seamless integration, enhancing Mazda's human-centric design approach. "
    },
    {
        itemLayout: "page-icon-feature-stacked",
        icon: SafetyIcon,
        title: "Safety",
        text: "Top safety standards make sure Mazda accessories work cohesively with vehicles from floor mats to bull bars. "
    },
    {
        itemLayout: "page-icon-feature-stacked",
        icon: BuiltToLastIcon,
        title: "Built To Last",
        text: "We test for reliability, suitability, and capability to ensure your accessories are up to the task and last for years. "
    },
    {
        itemLayout: "page-icon-feature-stacked",
        icon: WarrantyIcon,
        title: "Accessory Warranty",
        text: "Mazda Genuine Accessories include the new car 5 year warranty if fitted at delivery or a 2 year warranty at other times."
    },
    {
        itemLayout: "page-icon-feature-stacked",
        icon: CustomerExperienceIcon,
        title: "Customer Experience",
        text: "We provide a complete solution for you and support you in getting the most enjoyment and value from your Mazda."
    }


];

function Accessories() {
    return (

        <main>

            <PageHero
                eyebrow="Genuine Accessories To Suit Your Lifestyle"
                title="It's finance, your way"       
                title="ACCESSORIES"
                image="/src/assets/images/page-banners/accessories.webp"
                imageMobile="/src/assets/images/page-banners/accessories-m.webp"
                alt=""
            />

            <PageIntro
                title="Mazda Genuine Accessories"
            />

            <PageIconFeatureGrid
                wrapperClass="std-wrapper no-padding-top"
                gridClass="grid grid-d-three-cols grid-t-two-cols"
                items={accessoriesFeatures}       
                cta="Enquire Now"         
            />

            <PageImageTextStacked
                bgColour="dark-bg dark-grey-bg"
                title="Mazda Premium Car Care"
                image="/src/assets/images/accessories/interior.webp"
                text="Keep your Mazda looking good as new for years to come with Mazda Premium Car Care. This range of products have been designed and tested with Permagard to withstand everything from the wear and tear from every-day life to the impact of Australia’s harsh conditions. Experience a superior level of protection for the exterior and interior of your Mazda with the peace of mind that comes with the backing of a 5-year transferrable warranty. Give your new Mazda a lasting shine today."
                cta="Enquire Now"
            />

            <AccessoriesFormSection
                title="Make a Parts Enquiry"
            />

        </main>

    )
}

export default Accessories;