import PageHero from "../components/Page/PageHero";
import PageIntro from "../components/Page/PageIntro";
import PageImageText from "../components/Page/PageImageText";
import ContactFormSection from "../components/Page/ContactFormSection";

import "./Offers.css";


function Offers() {
    return (

        <main>

            <PageHero
                title="Mazda offers"
                image="/src/assets/images/page-banners/offers.webp"
                imageMobile="/src/assets/images/page-banners/offers-m.webp"
                alt="Various Mazda Parts"
            />

            <PageIntro
                text="Explore the latest offers and deals available across the Mazda range."
            />

            <PageImageText
                wrapperClass="lrg-wrapper no-padding-top"
                gridClass="grid-d-two-cols grey-bg offer-content-grid t-center-below-d"
                title="Mazda Finance Offer"
                text={[
                    "Get 2.99% Annual Percentage Rate† for business applicants on new and demo 2025 Mazda BT-50 XS Dual Cab models with Mazda Assured at participating Mazda Dealers.",
                    "H model only. 36 month loan term only. Trade, keep, return. Pay the balloon final payment to keep your Mazda."
                ]}
                image="/src/assets/images/offers/bt-50-offer.webp"
                imageBg="/src/assets/images/offers/bt-50-offer.webp"
                cta="Enquire Now"
                tcs="†Finance applications must be first received between 01/05/2026 and 30/06/2026, and settled by 31/07/2026. Excludes fleet, rental, government and employee vehicles. Not to be used in conjunction with any other offer. Approved applicants only. Terms, conditions, fees, charges and lending criteria apply. Mazda Finance is a division of Australian Alliance Automotive Finance Pty Limited ABN 63 002 407 703, Australian Credit Licence 513747 and reserves the right to change, extend or withdraw this offer."
            />

            <PageImageText
                wrapperClass="lrg-wrapper no-padding-top"
                gridClass="grid-d-two-cols grid-d-reverse grey-bg offer-content-grid t-center-below-d"
                eyebrowTitle="All-new, All-Electric"
                title="Mazda CX-6e Pre-Order Offer"
                text="Free upgrade worth $3,000 when you pre-order. Pre-order the Mazda CX-6e today and receive the Azami for the price of the GT. Available to the first 1,000 customers."
                image="/src/assets/images/offers/free-upgrade-offer.webp"
                imageBg="/src/assets/images/offers/free-upgrade-offer.webp"
                cta="Enquire Now"
                tcs="#Pre-Order offer only valid on Mazda CX-6e GT model and limited to the first 1,000 orders. Fleet customers excluded. Offer subject to change."
            />

            <ContactFormSection
                bgColour="grey-bg"
                title="Make an Enquiry"
                text="Let's chat. Send us a message and we will get back to you."
            />

        </main>

    )
}

export default Offers;