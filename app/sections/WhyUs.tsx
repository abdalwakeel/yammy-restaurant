import React from "react";
// استيراد مصفوفة الميزات مباشرة
import { whyUs } from "../data/data"; 

export default function WhyUs() {
  return (
    <section id="why-us" className="why-us section-bg">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          {whyUs.map((item: any) => (
            <div className="col-lg-4" key={item.id}>
              <div className="box">
                <span>0{item.id}</span>
                <h4>{item.title || item.name}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}