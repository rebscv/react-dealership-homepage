import PageHero from "../components/Page/PageHero";
import PageIntro from "../components/Page/PageIntro";
import PageImageText from "../components/Page/PageImageText";
import TestDriveFormSection from "../components/Page/TestDriveFormSection";

import "./Offers.css";


function BookTestDrive() {
    return (

        <main>

            <PageHero
                title="Book a Test Drive"
                image="/src/assets/images/page-banners/book-a-test-drive.webp"
                imageMobile="/src/assets/images/page-banners/book-a-test-drive-m.webp"
                alt="CX-80 Driving on country side"
            />

            <TestDriveFormSection
                title="Book your test drive today"
                text="Choose any Mazda you Love Your Mazda Experience Begins Here."
            />

        </main>

    )
}

export default BookTestDrive;