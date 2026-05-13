import { useParams } from  "react-router-dom";
import models from "../data/models";

import "./modelDetail.css";

import ModelHero from "../components/model/ModelHero";
import ModelHighlights from "../components/model/ModelHighlights";
import ModelIntro from "../components/model/ModelIntro";
import ModelFeatured from "../components/model/ModelFeatured";
import ModelColourPicker from "../components/model/ModelColourPicker";
import ModelTechnology from "../components/model/ModelTechnology";
import ModelGallery from "../components/model/ModelGallery";
import ModelSafety from "../components/model/ModelSafety";
import ModelGrades from "../components/model/ModelGrades";
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
            

            {model.hero && ( <ModelHero {...model.hero} /> )}
            {model.highlights && ( <ModelHighlights items={model.highlights} /> )}
            {model.intro && ( <ModelIntro {...model.intro} /> )}
            {model.featured && ( <ModelFeatured featured={model.featured} /> )}
            <ModelColourPicker colours={model.colours} />
            <ModelTechnology technology={model.technology} />
            <ModelSafety safety={model.safety} />
            <ModelGrades grades={model.grades} />
            {model.cta && ( <ModelCTA {...model.cta} /> )}
            

            
        </main>

    );

}

export default ModelDetail;

