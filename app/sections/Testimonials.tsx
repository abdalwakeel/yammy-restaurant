import React from "react";
import Image from "next/image";
// استيراد مصفوفة الآراء مباشرة
import { testimonials } from "../data/data"; 

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Testimonials</h2>
          <p>What They Are <span>Saying About Us</span></p>
        </div>

        <div className="row gy-4">
          {testimonials.map((item: any) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  {item.description || item.text}
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <Image src={item.preview || item.image} className="testimonial-img" alt={item.name} width={100} height={100} />
                <h3>{item.name}</h3>
                <h4>{item.role || item.job}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}