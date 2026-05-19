import React from "react";
import Image from "next/image";
// استيراد مصفوفة الصور مباشرة
import { gallery } from "../data/data"; 

export default function Gallery() {
  return (
    <section id="gallery" className="gallery section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>gallery</h2>
          <p>Check <span>Our Gallery</span></p>
        </div>

        <div className="row gy-4">
          {gallery.map((img: any) => (
            <div className="col-lg-3 col-md-4" key={img.id}>
              <div className="gallery-item">
                <Image src={img.preview || img.src} className="img-fluid" alt="gallery-img" width={400} height={400} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}