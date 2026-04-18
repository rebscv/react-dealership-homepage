function QuickLinkCard({ title, description, url, image }) {
  return (
    <div className="quicklink-card">
        <a href={url}></a>
        <div className="q-img"><img src={image} alt={title} /></div>
        <div className="q-text">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="btn btn-underline">Read More</div>
        </div>  
    </div>
  )
}

export default QuickLinkCard


