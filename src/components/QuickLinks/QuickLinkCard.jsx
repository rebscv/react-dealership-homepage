function QuickLinkCard({ title, description, url, image }) {
  return (
    <div className="quicklink-card">
        <a href={url}></a>
        <div className="q-img"><img src={image} alt={title} /></div>
        <h3>{title}</h3>
        <p>{description}</p>      
    </div>
  )
}

export default QuickLinkCard


