import "./App.css";

import logo from "./assets/tla-logo.svg";
import heroTires from "./assets/hero-tires.png";
import diamondPlate from "./assets/diamond-plate.png";

import {
  Phone,
  MessageCircle,
  CircleGauge,
  Wrench,
  Car,
  BatteryCharging,
  Fuel,
  LockKeyhole,
  Recycle,
} from "lucide-react";


function App() {

  /* =========================================
     SERVICES DATA
  ========================================= */

  const services = [
    {
      icon: CircleGauge,
      title: "Used Tires",
      description:
        "Used tires available for your vehicle. Call or text to ask about current inventory.",
    },

    {
      icon: Wrench,
      title: "Mount & Dismount",
      description:
        "Mobile tire mounting and dismounting service right at your location.",
    },

    {
      icon: CircleGauge,
      title: "Flat Repair",
      description:
        "Flat repairs, patches, valve stems, and bead cleaning.",
    },

    {
      icon: Car,
      title: "Spare Tire Service",
      description:
        "Need your spare put on? We'll come to you and get you back on the road.",
    },

    {
      icon: BatteryCharging,
      title: "Jump Starts",
      description:
        "Dead battery? We'll come to your location and get you moving.",
    },

    {
      icon: Fuel,
      title: "Fuel Delivery",
      description:
        "Ran out of gas? We'll bring fuel directly to you.",
    },

    {
      icon: LockKeyhole,
      title: "Lockouts",
      description:
        "Locked your keys in your vehicle? Give us a call.",
    },

    {
      icon: Recycle,
      title: "Tire Disposal",
      description:
        "Tire disposal services available for customers who need unwanted tires removed.",
    },
  ];


  /* =========================================
     PAGE
  ========================================= */

  return (
    <div className="app">


      {/* =========================================
          NAVIGATION
      ========================================= */}

      <header className="navbar">

        <div className="nav-container">

          <a
            href="#"
            className="nav-logo-link"
          >
            <img
              src={logo}
              alt="TLA Mobile Tire Service"
              className="nav-logo"
            />
          </a>


          <nav className="desktop-nav">

            <a
              href="#services"
              className="nav-link active"
            >
              Services
            </a>

            <a
              href="#why-tla"
              className="nav-link"
            >
              Why TLA
            </a>

            <a
              href="#service-area"
              className="nav-link"
            >
              Service Area
            </a>

            <a
              href="#contact"
              className="nav-link"
            >
              Contact
            </a>

          </nav>


          <a
            href="tel:8164910455"
            className="nav-call"
          >
            <Phone size={18} />

            <span>
              Call Now
            </span>
          </a>

        </div>

      </header>


      {/* =========================================
          HERO
      ========================================= */}

      <section
        className="hero"
        style={{
          backgroundImage: `url(${heroTires})`,
        }}
      >

        <div className="hero-overlay"></div>


        <div className="hero-container">

          <div className="hero-content">

            <p className="hero-eyebrow">
              24/7 MOBILE ROADSIDE SERVICE
            </p>


            <h1 className="hero-title">

              WE COME TO

              <span>
                YOU.
              </span>

            </h1>


            <div className="hero-accent-line">
              <span></span>
            </div>


            <p className="hero-description">
              Professional mobile tire and roadside assistance
              serving Kansas City, Kansas, Kansas City,
              Missouri, and surrounding areas.
            </p>


            <div className="hero-buttons">

              <a
                href="tel:8164910455"
                className="hero-button call-button"
              >

                <Phone size={20} />

                <span>
                  CALL 816-491-0455
                </span>

              </a>


              <a
                href="sms:8164910455"
                className="hero-button text-button"
              >

                <MessageCircle size={21} />

                <span>
                  TEXT US
                </span>

              </a>

            </div>


            <p className="hero-note">
              Don't wait on the side of the road.
              We'll come to you.
            </p>

          </div>

        </div>


        {/* =========================================
            HERO BOTTOM STRIP
        ========================================= */}

        <div className="hero-bottom">

          <span>
            TIRE SERVICE
          </span>

          <i></i>

          <span>
            ROADSIDE ASSISTANCE
          </span>

          <i></i>

          <strong>
            24/7
          </strong>

        </div>

      </section>


      {/* =========================================
          MOBILE SERVICES
      ========================================= */}

      <section
        id="services"
        className="services-section"
      >

        <div className="services-heading">

          <p className="section-label">
            WHAT WE DO
          </p>

          <h2>
            MOBILE SERVICES
          </h2>

          <p>
            Roadside assistance when and where you need it.
          </p>

        </div>


        <div className="services-grid">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <article
                className="service-card"
                key={index}
              >

                <div className="service-icon">

                  <Icon
                    size={44}
                    strokeWidth={1.5}
                  />

                </div>


                <h3>
                  {service.title}
                </h3>


                <div className="service-line"></div>


                <p>
                  {service.description}
                </p>

              </article>
            );

          })}

        </div>

      </section>

      {/* ====================
        CUSTOMER REVIEWS
      ==================== */}

      <section
        id="reviews"
        className="reviews-section"
        style={{
          backgroundImage: `url(${diamondPlate})`,
        }}
      >

        <div className="reviews-heading">

          <p className="section-label">
            CUSTOMER REVIEWS
          </p>

          <h2>
            WHAT OUR CUSTOMERS SAY
          </h2>

          <div className="rating-summary">

            <div className="rating-stars">
              ★★★★★
            </div>

            <strong>
              5.0
            </strong>

            <span>
              Customer Rated
            </span>

          </div>

        </div>

        <div className="reviews-grid">

          {/* REVIEW 1 */}

          <article className="review-card">

            <div className="review-stars">
              ★★★★★
            </div>

            <p className="review-text">
              "Fast, professional, and came right to me when I was stuck. Great service from start to finish!"
            </p>

            <div className="review-author">

              <div className="review-avatar">
                J
              </div>

              <div className="review-author-info">

                <strong>
                  Jacob C.
                </strong>

                <span>
                  Kansas City, MO
                </span>

              </div>

            </div>

          </article>

          {/* REVIEW 2 */}

          <article className="review-card">

            <div className="review-stars">
              ★★★★★
            </div>

            <p className="review-text">
              "They showed up quickly and got my tire changed without any hassle. Definitely recommend TLA!"
            </p>

            <div className="review-author">

              <div className="review-avatar">
                M
              </div>

              <div className="review-author-info">

                <strong>
                  Mary G.
                </strong>

                <span>
                  Kansas City, KS
                </span>

              </div>

            </div>

          </article>

          {/* REVIEW 3 */}

          <article className="review-card">

            <div className="review-stars">
              ★★★★★
            </div>

            <p className="review-text">
              "Being able to call someone who actually comes to you makes a huge difference. Excellent service!"
            </p>

            <div className="review-author">

              <div className="review-avatar">
                A
              </div>

              <div className="review-author-info">

                <strong>
                  Allen P.
                </strong>

                <span>
                  Kansas City area
                </span>

              </div>

            </div>

          </article>

        </div>

      </section>


      {/* =========================================
          WHY TLA
      ========================================= */}

      <section
        id="why-tla"
        className="why-section"
      >

        <div className="why-container">


          {/* IMAGE */}

          <div className="why-image">

            <img
              src={heroTires}
              alt="Tires and mobile tire service"
            />

            <div className="why-image-overlay"></div>

          </div>


          {/* TEXT */}

          <div className="why-content">

            <p className="section-label">
              WHY TLA
            </p>

            <h2>
              ROADSIDE HELP
              <span>
                THAT COMES TO YOU
              </span>
            </h2>

            <p className="why-description">
              When you're stuck with a flat tire, dead battery,
              or another roadside problem, you shouldn't have
              to figure out how to get your vehicle to a shop.
            </p>

            <p className="why-description">
              TLA Mobile Tire Service brings roadside assistance
              directly to your location — day or night.
            </p>

          </div>


          {/* BENEFITS */}

          <div className="why-benefits">


            <div className="why-benefit">

              <div className="benefit-icon">
                ◷
              </div>

              <div>

                <strong>
                  24/7
                </strong>

                <span>
                  Available around
                  the clock
                </span>

              </div>

            </div>


            <div className="why-benefit">

              <div className="benefit-icon">
                ⌖
              </div>

              <div>

                <strong>
                  ON-SITE
                </strong>

                <span>
                  We come directly
                  to you
                </span>

              </div>

            </div>


            <div className="why-benefit">

              <div className="benefit-icon">
                ◇
              </div>

              <div>

                <strong>
                  LOCAL
                </strong>

                <span>
                  Kansas City &
                  surrounding areas
                </span>

              </div>

            </div>


          </div>

        </div>

      </section>

      {/* ====================
        SERVICE AREA
      ==================== */}

      <section
        id="service-area"
        className="area-section"
      >

        <div className="area-container">

          <div className="area-heading">

            <p className="section-label">
              WHERE WE GO
            </p>

            <h2>
              SERVING KANSAS CITY &amp; BEYOND
            </h2>

          </div>

          <div className="area-grid">

            <div className="area-card">

              <div className="area-icon">
                ⌖
              </div>

              <div className="area-card-content">

                <strong>
                  KANSAS CITY, KS
                </strong>

                <span>
                  Mobile service available
                </span>

              </div>

            </div>

            <div className="area-card">

              <div className="area-icon">
                ⌖
              </div>

              <div className="area-card-content">

                <strong>
                  KANSAS CITY, MO
                </strong>

                <span>
                  Mobile service available
                </span>

              </div>

            </div>

            <div className="area-card">

              <div className="area-icon">
                ⌖
              </div>

              <div className="area-card-content">

                <strong>
                  SURROUNDING AREAS
                </strong>

                <span>
                  Serving the greater KC area
                </span>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================
        FINAL CTA
      ===================== */}

      <section
        id="contact"
        className="cta-section"
      >

        <div className="cta-container">

          <div className="cta-content">

            <p className="section-label">
              STRANDED?
            </p>

            <h2>
              NEED HELP RIGHT NOW?
            </h2>

            <p>
              Call or text TLA Mobile Tire Service and we'll come to you.
            </p>

          </div>

          <div className="cta-buttons">

            <a
              href="tel:8164910455"
              className="cta-button cta-call"
            >

              <Phone size={20} />

              <span>
                816-491-0455
              </span>

            </a>

            <a
              href="sms:8164910455"
              className="cta-button cta-text"
            >

              <MessageCircle size={20} />

              <span>
                TEXT US
              </span>

            </a>

          </div>

        </div>

      </section>

      {/* ====================
        FOOTER
      ==================== */}

      <footer className="site-footer">

        <div className="footer-container">

          <div className="footer-brand">

            <img
              src={logo}
              alt="TLA Mobile Tire Service"
            />

            <p>
              24/7 Mobile Tire &amp; Roadside Assistance
            </p>

          </div>

          <div className="footer-contact">

            <span className="footer-label">
              CALL OR TEXT
            </span>

            <a
              href="tel:8164910455"
              className="footer-phone"
            >
              816-491-0455
            </a>

            <span className="footer-location">
              Kansas City, KS • Kansas City, MO
              <br />
              &amp; Surrounding Areas
            </span>

          </div>

          <div className="footer-buttons">

            <a
              href="tel:8164910455"
              className="footer-button footer-call"
            >

              <Phone size={18} />

              <span>
                CALL NOW
              </span>

            </a>

            <a
              href="sms:8164910455"
              className="footer-button footer-text"
            >

              <MessageCircle size={18} />

              <span>
                TEXT US
              </span>

            </a>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 TLA Mobile Tire Service.
            All rights reserved.
          </p>

          <span>
            Kansas City &amp; Surrounding Areas
          </span>

        </div>

        <div className="footer-credit">

          <span>
            Designed &amp; Developed by
          </span>

          <strong>
            Maddie W
          </strong>
          
        </div>

      </footer>


    </div>
  );
}


export default App;