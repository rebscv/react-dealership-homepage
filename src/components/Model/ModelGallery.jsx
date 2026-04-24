function ModelGallery ({ images }) {

  return (
    <section className="model-gallery">
      <div className="std-wrapper t-center">

        <h2>Gallery</h2>
        {images?.map((img, i) => (
          <img key={i} src={img} alt="" />
        ))}
        
      </div>
    </section>
  )

}

export default ModelGallery
