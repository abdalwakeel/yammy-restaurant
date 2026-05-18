import React from 'react';
import './contact.css';
import SectionTitle from '../components/SectionTitle'; // 1. صلحنا الاستيراد (تأكد من المسار الصحيح في مشروعك)

export default function Contact() {
  return (
    <section id="Contact" className="contact">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Contact" subtitle="Contact Us" />
      </div>

      <div data-aos="fade-up">
        <iframe
          style={{ border: 0, width: '100%', height: '350px' }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76179.90155865456!2d29.301047717284625!3d40.980267370496215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7a85eb327e7%3A0xf866f2f79c44d305!2sL&#39;Olivetto%20Restaurant!5e1!3m2!1sar!2seg!4v1779069068679!5m2!1sar!2seg"
          allowFullScreen
          title="Google Maps"
        ></iframe>
      </div>

      <div className="container" data-aos="fade-up">
        <div className="row mt-5">
          
          {/* 2. الجزء الأيسر: معلومات الاتصال (col-lg-4) */}
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>100 Your Street, Your City, State 1234</p>
              </div>

              <div className="open-hours">
                <i className="bi bi-clock"></i>
                <h4>Open Hours:</h4>
                <p>
                  Monday-Saturday:
                  <br />
                  11:00 AM - 23:00 PM
                </p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+61 1234 5678</p>
              </div>
            </div> {/* نهاية الـ info */}
          </div> {/* 3. نهاية الـ col-lg-4 الصحيحة هنا */}

          {/* 4. الجزء الأيمن: نموذج الاتصال (col-lg-8) أصبح منفصلاً وبجانبه */}
          <div className="col-lg-8 mt-5 mt-lg-0">
            <form role="form" className="contact-form">
              
              {/* حقول الاسم والإيميل بجانب بعضهم */}
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div> {/* 5. صلحنا إغلاق الـ row الخاص بالاسم والإيميل هنا */}

              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={8}
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>

              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div> {/* نهاية الـ col-lg-8 */}

        </div> {/* نهاية الـ row الرئيسي */}
      </div> {/* نهاية الـ container */}
    </section>
  );
}