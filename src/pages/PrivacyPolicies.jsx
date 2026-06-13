import PageHero from "../components/Page/PageHero";
import PageIntro from "../components/Page/PageIntro";

function PrivacyPolicies() {
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

        </main>

    )
}

export default PrivacyPolicies;