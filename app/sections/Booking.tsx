"use client";

import React, { useState } from "react";
import "./booking.css";
import SectionTitle from "../components/SectionTitle";

export default function Booking() {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    people: "",
    message: "",
    validate: "",
  };
  const [text, setText] = useState(initialState);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value, validate: '' });
  };

  const handleSubmitBooking = async (e: React.FormEvent | any) => {
    e.preventDefault();

    // 1. التحقق من الحقول المطلوبة
    if (
      text.name === '' ||
      text.email === '' ||
      text.date === '' ||
      text.time === ''
    ) {
      setText({ ...text, validate: 'incomplete' });
      return;
    }

    // 2. إرسال الطلب (تم نقله إلى هنا داخل الدالة)
    try {
      // تحويل الحالة إلى loading فوراً قبل بدء الـ fetch ليظهر للمستخدم
      setText({ ...text, validate: 'loading' });

      const response = await fetch('http://api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(text),
      });

      const result = await response.json();
      
      if (response.ok && result) {
        setText({ ...text, validate: 'success' });
        console.log('Success:', result);
      } else {
        setText({ ...text, validate: 'error' });
      }
    } catch (error) {
      setText({ ...text, validate: 'error' });
      console.error('Error:', error);
    }
  };

  return (
    <section id="book-a-table" className="book-a-table">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Reservation" subtitle="Book a Table" />

        <form
          onSubmit={handleSubmitBooking}
          className="booking-form"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row">
            {/* Name Input */}
            <div className="col-lg-4 col-md-6 form-group">
              <input
                type="text"
                name="name"
                value={text.name}
                className="form-control"
                placeholder="Your Name"
                onChange={handleTextChange}
              />
            </div>

            {/* Email Input */}
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                value={text.email}
                placeholder="Your Email"
                onChange={handleTextChange}
              />
            </div>

            {/* Phone Input */}
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input
                type="text"
                className="form-control"
                name="phone"
                value={text.phone}
                placeholder="Your Phone"
                onChange={handleTextChange}
              />
            </div>

            {/* Date Input */}
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="date"
                name="date"
                className="form-control"
                value={text.date}
                placeholder="Date"
                onChange={handleTextChange}
              />
            </div>

            {/* Time Input */}
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="time"
                className="form-control"
                name="time"
                value={text.time}
                placeholder="Time"
                onChange={handleTextChange}
              />
            </div>

            {/* People Input */}
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="number"
                className="form-control"
                name="people"
                value={text.people}
                placeholder="# of people"
                onChange={handleTextChange}
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              value={text.message}
              rows={5}
              placeholder="Message"
              onChange={handleTextChange}
            ></textarea>
          </div>

          {/* Validation Messages */}
          <div className="mb-3">
            {text.validate === 'loading' && (
              <div className="loading">Send Booking</div>
            )}
            {text.validate === 'incomplete' && (
              <div className="error-message">
                Please fill in all above details for booking a table
              </div>
            )}
            {text.validate === 'success' && (
              <div className="sent-message">
                Your booking request was sent. We will call back or send an Email to
                confirm your reservation. Thank you!
              </div>
            )}
            {text.validate === 'error' && (
              <div className="error-message">Server Error</div>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit">Book a Table</button>
          </div>
        </form>
      </div>
    </section>
  );
}