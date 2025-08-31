import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const images = [
    import.meta.env.BASE_URL + 'images/PRJ_001.JPG',
    import.meta.env.BASE_URL + 'images/PRJ_002.JPG',
    import.meta.env.BASE_URL + 'images/PRJ_003.JPG',
    import.meta.env.BASE_URL + 'images/PRJ_004.JPG',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <section id="hero" className="hero slideshow-hero"> {/* Added slideshow-hero class */}
        <div className="slideshow-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Project Image ${index + 1}`}
              className={index === currentImageIndex ? 'slide active' : 'slide'}
            />
          ))}
          <div className="hero-overlay-content"> {/* Overlay for text */}
            <h1 className="fade-in-text">船の中に「特別な居心地」を。</h1>
          </div>
        </div>
      </section>

      <section className="section"> {/* Moved this section outside the hero */} 
        <div className="container">
          <h1>長崎の海と共に、ものづくりの未来を担う</h1> 
          <p>ゆうき工芸は、長崎市に拠点を置き、船舶内装工事とオーダーメイド家具製作を専門としています。一つひとつの仕事に心を込め、確かな技術でお客様の信頼に応えてきました。事業拡大を見据え、私たちの技術と情熱を受け継いでくれる新しい仲間を募集しています。</p>
          <Link to="/services" className="btn-primary">事業内容を見る</Link>
          <Link to="/jobs" className="btn-primary">求人情報を見る</Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;