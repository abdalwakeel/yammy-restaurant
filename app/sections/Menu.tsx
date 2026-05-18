"use client";

import React, { useState } from "react";
// 1. استيراد البيانات مباشرة من الملف الخاص بك
import { filters as initialFilters, menu as allItems } from "../data/data"; 
import "./menu.css";
import SectionTitle from "../components/SectionTitle";
import MenuItem from "../components/menuItem";

export default function Menu() {
  // 2. نضع البيانات المستوردة كقيمة أولية للـ State
  const [items, setItems] = useState(allItems);
  const [filterList, setFilterList] = useState(initialFilters);

  // تحديث حالة الزر (اللون الذهبي)
  const handleFilterActive = (id: number) => {
    const newFilters = filterList.map((f) => ({
      ...f,
      active: f.id === id,
    }));
    setFilterList(newFilters);
  };

  // الفلترة بناءً على التصنيف
  const handleFilterChange = (id: number, category: string) => {
    handleFilterActive(id);
    
    if (category === "all") {
      setItems(allItems);
    } else {
      // نفلتر المصفوفة الأصلية المستوردة
      const filtered = allItems.filter(
        (item) => item.category === category
      );
      setItems(filtered);
    }
  };

  return (
    <section id="menu" className="menu section-bg">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Our Menu" subtitle="Check Our Tasty Menu" />

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-flters">
              {filterList.map((filter) => (
                <li
                  key={filter.id}
                  className={filter.active ? "filter-active" : ""}
                  onClick={() => handleFilterChange(filter.id, filter.category)}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row menu-container" data-aos="fade-up" data-aos-delay="200">
          {items.length > 0 ? (
            items.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))
          ) : (
            <p className="text-center">No items found in this category.</p>
          )}
        </div>
      </div>
    </section>
  );
}