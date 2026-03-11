function QuickLinkCard({ title, description, url }) {
  return (
    <div className="quicklink-card">
      <a href={url}>
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  )
}

export default QuickLinkCard


