import { useParams } from  "react-router-dom";
import models from "../data/models";

import ModelHero from "../components/model/ModelHero";
import ModelHighlights from "../components/model/ModelHighlights";
import ModelIntro from "../components/model/ModelIntro";
import ModelFeatured from "../components/model/ModelFeatured";
import ModelColourPicker from "../components/model/ModelColourPicker";
import ModelGallery from "../components/model/ModelGallery";
import ModelCTA from "../components/model/ModelCTA";


function ModelDetail() {

    const { slug } = useParams();
    const model = models.find((m) => m.slug === slug);

    if (!model) { return ( 
        
        <main className="model-detail-content">
            <section>
                <div className="std-wrapper t-center">
                    <h2>Model not found</h2>
                </div>
            </section>
        </main>

        

     ); }

    return (
        <main className="model-detail-content">
            

            <ModelHero title={model.hero.title} tagline={model.hero.tagline} image={model.hero.image} />
            {model.highlights && ( <ModelHighlights items={model.highlights} /> )}
            {model.intro && ( <ModelIntro {...model.intro} /> )}
            {model.featured && ( <ModelFeatured featured={model.featured} /> )}
            {model.colours && (
                <ModelColourPicker colours={model.colours} />
            )}
            <ModelGallery images={model.gallery} />
            <ModelCTA />

            
        </main>

    );

}

export default ModelDetail;

