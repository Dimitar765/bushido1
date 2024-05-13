function Gallery() {

  const getImages = () => {
    const images = [];
    for (let i = 1; i <= 12; i++) {
      images.push(`${i}.jpg`);
    }
    return images;
  }

  return (
    <>


      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-slate-200 animate-fade-up animate-duration-3000 animate-delay-100">
        {getImages().map((image, index) => (
          <div key={index}>
            <img className="h-full max-w-full rounded-lg" src={image} alt="" />
          </div>
        ))}

      </div>

    </>)
}

export default Gallery
