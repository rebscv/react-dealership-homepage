import { useState, useEffect } from "react";

import "./ModelNav.css";

function ModelNav ({ nav, menuTitle, version }) {

  const { title, items, cta } = nav;
  const [modelNavMenuOpen, setModelNavMenuOpen] = useState(false);
  const toggleModelNavMenu = () => { if (window.innerWidth < 1024) {setModelNavMenuOpen(prev => !prev);} };

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) {setModelNavMenuOpen(false);} };
    window.addEventListener("resize", handleResize);
    return () => { window.removeEventListener("resize", handleResize); };
  }, []);

  useEffect(() => {
      if (modelNavMenuOpen) { document.body.classList.add("show-model-nav-menu"); } 
      else { document.body.classList.remove("show-model-nav-menu"); }
      return () => { document.body.classList.remove("show-model-nav-menu"); };
  }, [modelNavMenuOpen]);

  const closeModelMenu = () => { setModelNavMenuOpen(false); };

  return (
    <section className="model-nav dark-bg">
      <div className="std-wrapper">

        <div className="model-nav-flex">

          

          <div className="model-nav-title h4" onClick={toggleModelNavMenu}>
            <div className="menu-title">{menuTitle}</div>
            <div className="mobile-menu-title">
              Explore
              <svg className="icon-arrow-right"><use href="/icons.svg#icon-arrow-right"></use></svg>
            </div>
          </div>

          <ul className="model-nav-list">
            {items.map((item, index) => (
              <li key={index}><a href={item.link} className="smooth-scroll" onClick={toggleModelNavMenu}>{item.name}</a></li>
            ))}
          </ul>

          <a href={`/${version}/book-a-test-drive?model=${encodeURIComponent(menuTitle)}`} className="btn btn-outline smooth-scroll">Book a Test Drive</a>

          

        </div>

      </div>    
    </section>
  );

}

export default ModelNav;
