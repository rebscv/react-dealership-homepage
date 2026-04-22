import "./range.css"

import RangeCard from "./RangeCard";
import models from "../../data/models";


function Range () {
    

    return (
        <section className="range">
            <div className="std-wrapper t-center">

                <h2>Find Your Zoom Zoom</h2>

                <div className="grid grid-d-four-cols grid-l-three-cols grid-t-two-cols">
                    {models.map((car) => (
                        <RangeCard key={car.id} {...car} />
                    ))}
                </div>

            </div>
        </section>
    );

}

export default Range;