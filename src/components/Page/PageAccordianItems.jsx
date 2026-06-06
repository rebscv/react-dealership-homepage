import { useState } from "react";
import "./PageAccordian.css";

function PageAccordianItems({ title, text }) {

  const [isActive, setIsActive] = useState(false);

  return (

    <div className={`page-accordian-row ${isActive ? 'active' : ''}`}>
      
        {title && ( <p className="accord-head page-icon-feature-item-title" onClick={() => setIsActive(!isActive)}><span>{title}</span><span className="accord-head-icon">+</span></p> )}
        {Array.isArray(text) ? (text.map((para, i) => ( <p key={i} className="accord-content page-icon-feature-item-text">{para}</p> ))) : (<p className="accord-content page-icon-feature-item-text">{text}</p>)}

    </div>
    
  );
}

export default PageAccordianItems;