import PageHero from "../components/Page/PageHero";
import PageIntro from "../components/Page/PageIntro";
import ServiceFormSection from "../components/Page/ServiceFormSection";


function BookService() {
    return (

        <main>

            <PageHero
                title="Mazda Service Select"
                image="/src/assets/images/page-banners/service.webp"
                imageMobile="/src/assets/images/page-banners/service-m.webp"
                alt="Various Mazda Parts"
            />
            
            <ServiceFormSection
                title="Book a Service"
                text="Need a service?"
                bgColour="grey-bg"
            />


        </main>

    )
}

export default BookService;