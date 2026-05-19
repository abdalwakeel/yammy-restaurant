import React from "react";
import Image from "next/image";
// استيراد مصفوفة الأحداث مباشرة
import { events } from "../data/data"; 

export default function Events() {
  return (
    <section id="events" className="events">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Events</h2>
          <p>Share <span>Your Moments</span> In Our Restaurant</p>
        </div>

        <div className="row gy-4">
          {events.map((event: any) => (
            <div className="col-lg-4 col-md-6" key={event.id}>
              <div className="event-item" style={{ backgroundImage: `url(${event.preview})`, backgroundSize: 'cover', minHeight: '300px' }}>
                <h3>{event.title || event.name}</h3>
                <div className="price">
                  <p><span>${event.price}</span></p>
                </div>
                <p className="description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}