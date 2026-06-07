function PageIconFeatureItem({ icon, title, text, itemLayout }) {
  return (

    <div className={`page-icon-feature-item ${itemLayout || ``}`}>

      

      {icon && (
        <div className="page-icon-feature-item-img">
          <img src={icon} alt="" />
        </div>
      )}

      <div className="page-icon-feature-item-content">

        {title && ( <h3 className="page-icon-feature-item-title">{title}</h3> )}
        {text && ( <p className="page-icon-feature-item-text">{text}</p> )}

      </div>



    </div>
    
  );
}

export default PageIconFeatureItem;