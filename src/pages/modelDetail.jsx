import React, { useEffect } from "react";
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
import ModelGrades from "../components/model/ModelGrades";
import ModelCTA from "../components/model/ModelCTA";
import ModelText from "../components/model/ModelText";
import ModelTextBgImage from "../components/model/ModelTextBgImage";
import ModelColumnSlider from "../components/model/ModelColumnSlider";
import ModelColumns from "../components/model/ModelColumns";
import ModelColumnTextImage from "../components/model/ModelColumnTextImage";
import ModelRelated from "../components/model/ModelRelated";



function ModelDetail() {

    const { slug } = useParams();
    const location = useLocation();
    const version = location.pathname.split("/")[1];

    const model = models.find((m) => m.slug === slug);
    
    useEffect(() => {
        document.body.classList.add("model-body");
        return () => { document.body.classList.remove("model-body"); };
    }, [slug]);

    const renderSection = (section) => {

        switch (section.type) {

            case "hero": return ( <ModelHero {...model[section.data]} /> );
            case "highlights": return ( <ModelHighlights highlights={model[section.data]} /> );
            case "intro": return ( <ModelIntro {...model[section.data]} menuTitle={model.menuTitle} version={version} /> );
            case "featured": return ( <ModelFeatured featured={model[section.data]} /> );
            case "colours": return ( <ModelColourPicker colours={model[section.data]} /> );
            case "technology": return ( <ModelTechnology {...model[section.data]} /> );
            case "grades": return ( <ModelGrades {...model[section.data]} menuTitle={model.menuTitle} version={version} /> );
            case "gallery": return ( <ModelGallery {...model[section.data]} /> );
            case "cta": return ( <ModelCTA {...model[section.data]} menuTitle={model.menuTitle} version={version} /> );
            case "modelText": return ( <ModelText {...model[section.data]} /> );
            case "modelTextBgImage": return ( <ModelTextBgImage {...model[section.data]} /> );
            case "modelColumnSlider": return ( <ModelColumnSlider {...model[section.data]} /> );
            case "modelColumns": return ( <ModelColumns {...model[section.data]} /> );
            case "modelColumnTextImage": return ( <ModelColumnTextImage {...model[section.data]} /> );
            case "modelRelated": return ( <ModelRelated {...model[section.data]} /> );

            default: return null;
        }     

    };


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

        

        <main className={`model-detail-content model-${model.slug}`}>

            {model.nav && ( <ModelNav nav={model.nav} menuTitle={model.menuTitle} version={version} /> )}

            {model.sections.map((section, index) => (
                <React.Fragment key={`${section.type}-${index}`}>{renderSection(section, index)}</React.Fragment>
            ))}

        </main>

    );

}

export default ModelDetail;

