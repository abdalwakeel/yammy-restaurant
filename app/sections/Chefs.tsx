import React from "react";
import Image from "next/image";
// استيراد مصفوفة الطهاة مباشرة من ملف البيانات الثابتة
import { chefs } from "../data/data"; 

export default function Chefs() {
  return (
    <section id="chefs" className="chefs section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Chefs</h2>
          <p>Our <span>Professional</span> Chefs</p>
        </div>

        <div className="row gy-4">
          {chefs.map((chef: any) => (
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100" key={chef.id}>
              <div className="chef-member">
                <div className="member-img">
                  <Image src={chef.preview} className="img-fluid" alt={chef.name} width={400} height={400} />
                </div>
                <div className="member-info">
                  <h4>{chef.name}</h4>
                  <span>{chef.role || chef.title}</span>
                  <p>{chef.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}