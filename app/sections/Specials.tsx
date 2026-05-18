"use client";

import React, { useState } from "react";
import "./specials.css";
import SectionTitle from "../components/SectionTitle";
// 1. استيراد مصفوفة البيانات ومصفوفة الفلاتر مباشرة من ملف الـ data المحلي
import { specials, specialsFilters } from "../data/data";
import SpecialsItem from "../components/SpecialsItem";

interface SpecialItemType {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  content: string;
  active: boolean;
}

export default function Specials() {
  // 2. ربط الـ State بالبيانات المحلية مباشرة لحل مشكلة الـ Loading والـ Loops
  const [items, setItems] = useState<SpecialItemType[]>(specials);
  const [filters, setFilters] = useState(specialsFilters);

  // 3. دالة الانتقال بين التابات وتغيير المحتوى النشط
  const handleSpecialChange = (id: number) => {
    // تحديث حالة التابات ليصبح التاب المضغوط فقط هو الـ active
    const updatedFilters = filters.map((filter) => ({
      ...filter,
      active: filter.id === id,
    }));
    setFilters(updatedFilters);

    // تحديث العناصر ليعرض العنصر المتوافق مع التاب النشط
    const updatedItems = specials.map((item) => ({
      ...item,
      active: item.id === id,
    }));
    setItems(updatedItems);

    const handleFilterActive = (id: number) => {
      specialsFilters.map((filter) => {
        filter.active = false;
        if (filter.id === id) filter.active = true;
      });
    };
  };

  return (
    <section id="specials" className="specials">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Specials" subtitle="Check Our Specials" />

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          {/* القائمة الجانبية (التابات) */}
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              {filters.map((filter) => (
                <li className="nav-item" key={filter.id}>
                  <a
                    className={`nav-link ${filter.active ? "active show" : ""}`}
                    onClick={() => handleSpecialChange(filter.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {filter.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* محتوى الـ تابات */}
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">
              {items.length > 0 ? (
                items.map((item) => <SpecialsItem key={item.id} item={item} />)
              ) : (
                <p className="text-center text-muted">No specials found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
