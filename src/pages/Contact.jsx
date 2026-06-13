import { main } from "framer-motion/client";
import PageHero from "../components/Page/PageHero";
import PageIntro from "../components/Page/PageIntro";
import PageContactTabs from "../components/Page/PageContactTabs";
import ContactFormSection from "../components/Page/ContactFormSection";


const locations = [
    
    {
        title: "Sales",
        content: {
            title: "Sales Department",
            address: "123 Fake Street, Cityville",
            phone: "(03) 9900 0099",
            hours: [
                "Mon - Fri: 9:00 AM - 5:30 PM",
                "Sat: 8:30 AM - 5:00 PM",
                "Sun: Closed"
            ],
            mapLink: "https://maps.app.goo.gl/e9jTAjteLLXv9T326",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.818795190753!2d144.9690882!3d-37.81771315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b6e9fcc44f%3A0x38e74745ead60eab!2sFed%20Square!5e0!3m2!1sen!2sau!4v1780897956424!5m2!1sen!2sau"
        }
        
    },
    {
        title: "Service",        
        content: {
            title: "Service Department",
            address: "987 Fake Street, Cityville",
            phone: "(03) 9800 0089",
            hours: [
                "Mon - Fri: 7:00 AM - 3:00 PM",
                "Sat: 7:00 AM - 12:00 PM",
                "Sun: Closed"
            ],
            mapLink: "https://maps.app.goo.gl/QDJEVtmT5iUWGB8E8",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.1598150635677!2d144.9628754773527!3d-37.809725471976755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642cb954b1ce9%3A0xf187674ba9830e78!2sState%20Library%20Victoria!5e0!3m2!1sen!2sau!4v1780898173804!5m2!1sen!2sau"
        }
    }

];

function Contact() {
    return (

        <main>


            <PageHero
                eyebrow="Let's chat"
                title="Contact Us"

                image="/src/assets/images/page-banners/finance.webp"
                imageMobile="/src/assets/images/page-banners/finance-m.webp"
                alt=""
            />

            <PageContactTabs
                text="Talk to to one of our friendly staff and find your Zoom-Zoom."
                items={locations}
            />

            <ContactFormSection
                title="Make an Enquiry"
                text="Let's chat. Send us a message and we will get back to you."
            />


        </main>

    )
}

export default Contact;