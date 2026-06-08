import { useState } from "react"; 
import PageContactCard from "./PageContactCard";

import "./PageContactTabs.css"

function PageContactTabs({ text, items = [] }) {

  const [activeTab, setActiveTab] = useState(0);

  return (

    <section className="page-contact-tabs-grid grey-bg">
      <div className="lrg-wrapper">

        <div className="t-center"><p>{text}</p></div>



        <div className="tabs-overflow">


          <div className="page-contact-tabs-nav default-tabs">
            {items.map((item, index) => ( 
              <button key={index} className={`${activeTab === index ? "active" : ""}`} onClick={() => setActiveTab(index)}>{item.title}</button>
           ))}
          </div>


        </div>




        <div className="page-contact-tabs-content">
          {items[activeTab] && ( <PageContactCard {...items[activeTab].content} /> )}        
        </div>

        


      </div>
    </section>

  );
}

export default PageContactTabs;