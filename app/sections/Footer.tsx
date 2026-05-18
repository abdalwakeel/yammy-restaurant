import React from "react";
import Link from "next/link";
import "./footer.css";

export default function Footer() {
  return (
    <footer id="footer">
      {/* Footer Top */}
      <div className="footer-top">
        <div className="container">
          <div className="row">

            {/* Footer Info */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3>Restaurant</h3>

                <p>
                  100 Your Street <br />
                  State 1234, AUS <br />
                  <br />

                  <strong>Phone:</strong> +2 01119857458
                  <br />

                  <strong>Email:</strong> info@example.com
                  <br />
                </p>

                {/* Social Links */}
                <div className="social-links mt-3">
                  <a href="#" className="twitter">
                    <i className="bi bi-twitter-x"></i>
                  </a>

                  <a href="#" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </a>

                  <a href="#" className="instagram">
                    <i className="bi bi-instagram"></i>
                  </a>

                  <a href="#" className="youtube">
                    <i className="bi bi-youtube"></i>
                  </a>

                  <a href="#" className="reddit">
                    <i className="bi bi-reddit"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>

              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="/">Home</Link>
                </li>

                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="/about">About Us</Link>
                </li>

                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="/menu">Menu</Link>
                </li>

                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="/events">Events</Link>
                </li>

                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="/gallery">Gallery</Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>

              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="#">Functions</Link>
                </li>

                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="#">Parties</Link>
                </li>

                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="#">Events</Link>
                </li>

                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="#">Private Chef</Link>
                </li>

                <li>
                  <i className="bx bx-chevron-right"></i>
                  <Link href="#">Ceremony</Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>

              <p>
                Subscribe to our newsletter and get the latest updates,
                offers, and events directly to your inbox.
              </p>

              <form>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />

                <input type="submit" value="Subscribe" />
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Restaurant</span>
          </strong>
          . All Rights Reserved
        </div>

        <div className="credits">
          Designed by{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abdalwakeel mohamed
          </a>
        </div>
      </div>
    </footer>
  );
}