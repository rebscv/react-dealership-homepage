import { useParams } from  "react-router-dom";
import models from "../data/models";


function modelDetail() {

    const { slug } = useParams();

    const model = models.find((m) => m.slug === slug);

    if (!model) return <div>Model not found</div>;

    return (
        <section className="model-detail-content">
            <div className="std-wrapper">


                <h1>{model.title}</h1>
                <p>{model.description}</p>


            </div>
        </section>

    );

}

export default modelDetail;

