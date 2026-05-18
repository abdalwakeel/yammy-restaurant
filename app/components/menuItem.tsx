
import React from 'react';
import './menuItem.css';
import Link from 'next/link';



export default function MenuItem({
  item,
}: {
  item: {
    id: number;
    name: string;
    ingredients:string;
    preview: string;
    price: number;
    
  };
}) {
  return (
    <div className="col-lg-6 menu-item">
      <img src={item.preview} className="menu-img" alt={item.name} />
      <div className="menu-content">
        <Link href={`/menu/${item.id}`}>{item.name}</Link>
        <span>${item.price}</span>
      </div>
      <div className="menu-ingredients">{item.ingredients}</div>
    </div>
  );
}