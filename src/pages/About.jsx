import PageHero from "../components/Page/PageHero";
import PageIntro from "../components/Page/PageIntro";
import PageImageText from "../components/Page/PageImageText";
import ContactFormSection from "../components/Page/ContactFormSection";

import aboutJoy from "../assets/images/about/joy-for-generations.webp"
import aboutSoul from "../assets/images/about/soul-of-motion.webp"
import aboutSpace from "../assets/images/about/space-for-emotions.webp"
import aboutSpirit from "../assets/images/about/spirit-of-driving.webp"
import aboutTechnology from "../assets/images/about/technology-that-cares.webp"



function About() {
    return (

        <main>

            <PageHero
                eyebrow="We All Feel It"
                title="About Mazda Hometown"       
                video="/src/assets/images/page-banners/about.mp4"
                alt=""
            />

            <PageIntro
                titleImage="/src/assets/images/homepage/zoom-zoom.gif"
                text="Zoom-Zoom is at the heart of everything we do. It's a celebration of the joy of motion in all its forms. Whether that's accelerating down an open road with the wind in your hair, getting off the beaten track, or being lulled to sleep in the backseat after a big day. No matter how you experience that Zoom-Zoom feeling, our core purpose ensures you feel it every time you get into a Mazda."
                cta="Enquire Now"
            />

            <PageImageText 
                gridClass="grid-l-two-cols no-gaps t-center-below-t"
                title="The Soul of Motion"
                text="We believe that the joy of motion begins by breathing life into our vehicles, starting from the design. Every curve, every line is crafted to capture the soul of motion, even when standing still. Guided by our Kodo philosophy, from the first sketch to the final form, we ensure that every Mazda embodies the bold, pure emotion of driving. Exciting you and inviting you to enjoy every moment."
                image={aboutSoul}
            />

            <PageImageText 
                gridClass="grid-l-two-cols no-gaps  grid-l-reverse t-center-below-t"
                title="Space for Emotions"
                text="Giving every Mazda a soul of its own means getting to its very essence. That is why we design each model following the Japanese concept of Ma – the calm beauty of empty space.By removing all unnecessary elements and leaving only the purest form, every Mazda welcomes you to an interior with abundance of space, light and subtle forms. So you can truly feel your emotions – from joy to exhilaration and everything in between."
                image={aboutSpace}
            />

            <PageImageText 
                gridClass="grid-l-two-cols no-gaps t-center-below-t"
                title="Technology That Cares"
                text="At Mazda we put the people at the centre. Every intuitive technology and advanced safety feature is designed to enhance your driving experience, whether you're on a quick trip or a grand adventure. With our human-centric approach, we put your comfort and protection first, designing everything around you, and those you journey with."
                image={aboutTechnology}
            />

            <PageImageText 
                gridClass="grid-l-two-cols no-gaps  grid-l-reverse t-center-below-t"
                title="Spirit of Driving"
                text="The joy of motion is at its purest when you feel effortlessly connected to the road. Every turn, every exhilarating acceleration feels intuitive and natural. Like horse and rider, there’s a bond and understanding between the two. We call it Jinba-Ittai, and you can feel it in the performance of every Mazda."
                image={aboutSpirit}
            />

            <PageImageText 
                gridClass="grid-l-two-cols no-gaps t-center-below-t"
                title="Joy for Generations"
                text="At Mazda, we want the love of driving to be felt for generations to come. That’s why we’re focused on minimising environmental impact across the entire lifecycle of our vehicles. From delivering real-world fuel economy through our Skyactiv technology and sustainable solutions, to the end-of-life recycling of our vehicle materials. With the commitment to achieve by 2050 carbon neutrality across the entire life cycle and supply chain of our vehicles. So you can continue to love of driving, and the world around you."
                image={aboutJoy}
            />

            <ContactFormSection
                bgColour="grey-bg"
                title="Make an Enquiry"
                text="Got a question? Speak to our friendly team today."
            />

        </main>

    )
}

export default About;