import { useParams, useLocation } from  "react-router-dom";
import models from "../data/models";

import "./modelDetail.css";

import ModelHero from "../components/model/ModelHero";
import ModelNav from "../components/model/ModelNav";
import ModelHighlights from "../components/model/ModelHighlights";
import ModelIntro from "../components/model/ModelIntro";
import ModelFeatured from "../components/model/ModelFeatured";
import ModelColourPicker from "../components/model/ModelColourPicker";
import ModelTechnology from "../components/model/ModelTechnology";
import ModelGallery from "../components/model/ModelGallery";
import ModelSafety from "../components/model/ModelSafety";
import ModelGrades from "../components/model/ModelGrades";
import ModelCTA from "../components/model/ModelCTA";
import { use } from "react";


function ModelDetail() {

    const { slug } = useParams();
    const location = useLocation();
    const version = location.pathname.split("/")[1];

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
            
            {model.nav && ( <ModelNav nav={model.nav} menuTitle={model.menuTitle} version={version} /> )}
            {model.hero && ( <ModelHero {...model.hero} /> )}            
            {model.highlights && ( <ModelHighlights highlights={model.highlights} /> )}
            {model.intro && ( <ModelIntro {...model.intro} menuTitle={model.menuTitle} version={version} /> )}
            {model.featured && ( <ModelFeatured featured={model.featured} /> )}
            {model.colours && ( <ModelColourPicker colours={model.colours} /> )}
            {model.technology && ( <ModelTechnology {...model.technology} /> )}
            {model.safety && ( <ModelSafety {...model.safety} /> )}
            {model.grades && ( <ModelGrades {...model.grades} menuTitle={model.menuTitle} version={version} /> )}
            {model.gallery && ( <ModelGallery {...model.gallery} /> )}
            {model.cta && ( <ModelCTA {...model.cta} menuTitle={model.menuTitle} version={version} /> )}

            
        </main>

    );

}

export default ModelDetail;

