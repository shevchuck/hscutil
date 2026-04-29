import React, { useState } from "react";

const brand = {
  green: "#2f9800",
  greenDark: "#267a00",
  greenSoft: "#edf7e8",
  greenRing: "#d8e9ce",
  slate: "#0f172a",
  muted: "#5b6473",
};

const services = [
  "Constructability Review",
  "Construction Management",
  "Project Management",
  "General Consulting",
  "Outage Sequencing & Scheduling",
  "Bid Review Analysis",
  "QA/QC Services",
  "Escort / Safety Watchmen",
];

const clients = [
  { name: "UCS", mark: "U" },
  { name: "Greene Construction", mark: "G" },
  { name: "Gannett Flemming Engineering", mark: "GF" },
  { name: "WSP", mark: "W" },
  { name: "AUI Power", mark: "B" },
];

const differentiators = [
  {
    title: "Field-Tested Planning",
    text: "Support that starts early with constructability reviews, practical scope guidance, and clear execution planning.",
  },
  {
    title: "Construction-Focused Oversight",
    text: "Hands-on consulting for transmission work, outage coordination, QA/QC, safety support, and day-to-day project execution.",
  },
  {
    title: "Trusted Partnership",
    text: "A collaborative approach built on responsiveness, communication, and solutions tailored to utility project realities.",
  },
];

const capabilities = [
  {
    title: "Transmission Project Support",
    text: "Practical guidance for overhead transmission work, outage coordination, field readiness, and execution support.",
  },
  {
    title: "Utility + Contractor Coordination",
    text: "A clear bridge between utilities, engineering firms, contractors, and field teams when alignment matters most.",
  },
  {
    title: "Experienced Consulting Presence",
    text: "A polished, credible presentation that reflects the professionalism expected in the utility and infrastructure space.",
  },
];

function SectionHeading({ eyebrow, title, text, light = false }) {
  return (
    <div style={{ maxWidth: 760 }}>
      <p
        style={{
          marginBottom: 12,
          fontSize: 13,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.22em",
          color: light ? "#d8f0c9" : brand.green,
        }}
      >
        {eyebrow}
      </p>
      <h2
        style={{
          margin: 0,
          fontSize: "clamp(2rem, 4vw, 2.5rem)",
          lineHeight: 1.1,
          color: light ? "#fff" : brand.slate,
        }}
      >
        {title}
      </h2>
      {text ? (
        <p
          style={{
            marginTop: 16,
            fontSize: 18,
            lineHeight: 1.8,
            color: light ? "rgba(255,255,255,0.88)" : brand.muted,
          }}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}

function Card({ children, style = {} }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e2e8f0",
        borderRadius: 28,
        boxShadow: "0 8px 24px rgba(15, 23, 42, 0.06)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Button({ href, children, primary = false, onClick, style = {} }) {
  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        padding: "14px 22px",
        borderRadius: 18,
        textDecoration: "none",
        fontWeight: 700,
        border: primary ? "none" : "1px solid #cbd5e1",
        background: primary ? brand.green : "#fff",
        color: primary ? "#fff" : brand.slate,
        ...style,
      }}
    >
      {children}
    </a>
  );
}

function MobileMenuLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        display: "block",
        padding: "14px 16px",
        borderRadius: 16,
        textDecoration: "none",
        color: brand.slate,
        fontWeight: 600,
        background: "#f8fafc",
      }}
    >
      {children}
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const base = import.meta.env.BASE_URL;
  const logoSrc = `${base}logo-hs-utility.svg`;
  const heroBg = `${base}hero-power-lines.jpg`;
  const servicesBg = `${base}services-bg.jpg`;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
        color: brand.slate,
        fontFamily:
          'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
            .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 14px !important;
          }
          .desktop-cta {
            display: none !important;
          }
          .mobile-menu-button {
            display: inline-flex !important;
          }
          .header-inner {
            align-items: flex-start !important;
          }
          .brand-block {
            min-width: 0;
            flex: 1 1 auto;
          }
          .brand-title {
            font-size: 12px !important;
            letter-spacing: 0.18em !important;
            line-height: 1.25 !important;
          }
          .brand-subtitle {
            font-size: 12px !important;
            line-height: 1.3 !important;
          }
          .brand-logo {
            height: 38px !important;
          }

          .hero-stat-grid {
            grid-template-columns: 1fr !important;
            max-width: 100% !important;
          }

          .hero-main-grid {
            gap: 28px !important;
          }

          .hero-right-card {
            max-width: 100% !important;
            margin-left: 0 !important;
          }

          .hero-right-panels {
            grid-template-columns: 1fr !important;
          }
        }

        @media (min-width: 901px) {
          .mobile-menu-button {
            display: none !important;
          }
          .mobile-menu-panel {
            display: none !important;
          }
        }
      `}</style>

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(255,255,255,0.94)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(226,232,240,0.9)",
        }}
      >
        <div
          className="header-inner"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <a
            href="#top"
            onClick={closeMenu}
            className="brand-block"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              cursor: "pointer",
              minWidth: 0,
            }}
          >
            <img
              src={logoSrc}
              alt="H&S Utility Consulting LLC Logo"
              className="brand-logo"
              style={{ height: 44, width: "auto", objectFit: "contain", flexShrink: 0 }}
            />
            <div style={{ minWidth: 0 }}>
              <div
                className="brand-title"
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.24em",
                  color: brand.green,
                  whiteSpace: "normal",
                }}
              >
                H&amp;S Utility Consulting
              </div>
              <div
                className="brand-subtitle"
                style={{
                  fontSize: 14,
                  color: "#64748b",
                  whiteSpace: "normal",
                }}
              >
                Transmission consulting support
              </div>
            </div>
          </a>

          <nav
            className="desktop-nav"
            style={{
              display: "flex",
              gap: 22,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <a href="#about" style={navLink}>About</a>
            <a href="#services" style={navLink}>Services</a>
            <a href="#capabilities" style={navLink}>Capabilities</a>
            <a href="#clients" style={navLink}>Clients</a>
            <a href="#contact" style={navLink}>Contact</a>
          </nav>

          <div className="desktop-cta">
            <Button
              href="#contact"
              primary
              onClick={closeMenu}
              style={{
                width: "100%",
                marginTop: 8,
                padding: "12px 16px",
                fontSize: 15,
                borderRadius: 14,
              }}
            >
              Request a Consultation
            </Button>
          </div>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen((prev) => !prev)}
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 16px",
              borderRadius: 16,
              border: "1px solid #cbd5e1",
              background: "#fff",
              color: brand.slate,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

          {menuOpen && (
            <div
              className="mobile-menu-panel"
              style={{
                width: "100%",
                marginTop: 8,
                padding: 16,
                border: "1px solid #e2e8f0",
                borderRadius: 24,
                background: "#fff",
                boxShadow: "0 10px 30px rgba(15,23,42,0.08)",
              }}
            >
              <div style={{ display: "grid", gap: 12 }}>
                <MobileMenuLink href="#about" onClick={closeMenu}>About</MobileMenuLink>
                <MobileMenuLink href="#services" onClick={closeMenu}>Services</MobileMenuLink>
                <MobileMenuLink href="#capabilities" onClick={closeMenu}>Capabilities</MobileMenuLink>
                <MobileMenuLink href="#clients" onClick={closeMenu}>Clients</MobileMenuLink>
                <MobileMenuLink href="#contact" onClick={closeMenu}>Contact</MobileMenuLink>

                <Button
                  href="#contact"
                  primary
                  onClick={closeMenu}
                  style={{
                    width: "calc(100% - 24px)",
                    margin: "8px auto 0",
                    padding: "12px 16px",
                    fontSize: 15,
                    borderRadius: 14,
                    boxSizing: "border-box",
                    display: "flex",
                  }}
                >
                  Request a Consultation
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      <section
        id="top"
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.55), rgba(2, 6, 23, 0.55)), url('${heroBg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="hero-main-grid"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "70px 20px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 40,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 16px",
                borderRadius: 999,
                border: `1px solid rgba(255,255,255,0.22)`,
                background: "rgba(255,255,255,0.12)",
                color: "#ffffff",
                fontSize: 14,
                fontWeight: 600,
                boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                backdropFilter: "blur(6px)",
              }}
            >
              Overhead transmission consulting with practical field insight
            </div>

            <h1
              style={{
                marginTop: 24,
                marginBottom: 0,
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                maxWidth: 900,
                color: "#ffffff",
              }}
            >
              Utility consulting built for safer, smoother project execution.
            </h1>

            <p
              style={{
                marginTop: 24,
                maxWidth: 680,
                fontSize: 20,
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.88)",
              }}
            >
              H&amp;S Utility Consulting provides experienced support for overhead
              transmission projects, from constructability and planning to field
              coordination, QA/QC, and construction oversight.
            </p>

            <div
              style={{
                marginTop: 32,
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <Button href="#contact" primary>
                Get Started
              </Button>
              <Button href="#services">Explore Services</Button>
            </div>

            <div
              className="hero-stat-grid"
              style={{
                marginTop: 28,
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 12,
                maxWidth: 760,
              }}
            >
              <Card
                style={{
                  padding: 16,
                  background: "rgba(255,255,255,0.72)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.34)",
                  boxShadow: "0 8px 22px rgba(15,23,42,0.10)",
                  borderRadius: 24,
                }}
              >
                <div style={statEyebrow}>Experience</div>
                <div style={statTitle}>50+ Years Combined</div>
                <div style={statBody}>
                  Deep industry experience supporting utility and transmission project work.
                </div>
              </Card>

              <Card
                style={{
                  padding: 16,
                  background: "rgba(255,255,255,0.72)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.34)",
                  boxShadow: "0 8px 22px rgba(15,23,42,0.10)",
                  borderRadius: 24,
                }}
              >
                <div style={statEyebrow}>Field Support</div>
                <div style={statTitle}>Real-World Project Insight</div>
                <div style={statBody}>
                  Guidance shaped by active construction environments, coordination needs, and field realities.
                </div>
              </Card>

              <Card
                style={{
                  padding: 16,
                  background: "rgba(255,255,255,0.72)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.34)",
                  boxShadow: "0 8px 22px rgba(15,23,42,0.10)",
                  borderRadius: 24,
                }}
              >
                <div style={statEyebrow}>Client Focus</div>
                <div style={statTitle}>Clear Communication</div>
                <div style={statBody}>
                  Practical consulting support built around responsiveness, clarity, and execution.
                </div>
              </Card>
            </div>
          </div>

          <div>
            <Card
              className="hero-right-card"
              style={{
                padding: 20,
                background: "rgba(255,255,255,0.66)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.26)",
                boxShadow: "0 10px 28px rgba(15,23,42,0.10)",
                maxWidth: 500,
                marginLeft: "auto",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={logoSrc}
                  alt="H&S Utility Consulting LLC Logo"
                  style={{ maxHeight: 155, width: "auto", objectFit: "contain" }}
                />
              </div>

              <div
                className="hero-right-panels"
                style={{
                  marginTop: 20,
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: 12,
                }}
              >
                <div style={miniPanel}>
                  <div style={miniPanelTitle}>Core Focus</div>
                  <div style={miniPanelText}>
                    Constructability, outage planning, field support, project
                    execution, and utility construction consulting.
                  </div>
                </div>
                <div style={miniPanel}>
                  <div style={miniPanelTitle}>Service Territory</div>
                  <div style={miniPanelText}>
                    Supporting utilities, engineering firms, and contractors with
                    responsive, project-ready expertise.
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" style={sectionWrap}>
        <div style={sectionGrid}>
          <div>
            <SectionHeading
              eyebrow="About"
              title="A practical consulting partner for utility transmission work"
              text="The current H&S site emphasizes overhead transmission support, a collaborative approach, and more than 50 years of combined experience. This refreshed layout turns that message into a cleaner, more modern first impression."
            />

            <div style={{ marginTop: 32, color: "#475569", lineHeight: 1.9, fontSize: 17 }}>
              <p>
                H&amp;S Utility Consulting is positioned to help clients navigate
                the real-world demands of utility construction and transmission
                projects. The goal of this design is to present the company as
                experienced, capable, and easy to work with.
              </p>
              <p>
                Instead of repeating generic marketing language, the new site
                focuses on clarity: who H&amp;S helps, what the company does, and
                why clients can trust the team when project conditions get
                complicated.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gap: 16 }}>
            {differentiators.map((item) => (
              <Card key={item.title} style={{ padding: 24 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: brand.slate }}>
                  {item.title}
                </div>
                <p style={{ marginTop: 10, color: "#475569", lineHeight: 1.8 }}>
                  {item.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        style={{
          ...sectionWrap,
          position: "relative",
          backgroundImage: `linear-gradient(rgba(248,250,252,0.6), rgba(248,250,252,0.6)), url('${servicesBg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div style={sectionInner}>
          <SectionHeading
            eyebrow="Services"
            title="Utility consulting services that support planning, execution, and field readiness"
            text="Built from the services already listed on the current site, reorganized into a more professional presentation that is easier to scan and trust."
          />

          <div className="services-grid" style={cardGrid3}>
            {services.map((service) => (
              <Card
                key={service}
                style={{
                  padding: 24,
                  background: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <div style={iconDot}>✓</div>
                <div style={{ fontSize: 20, fontWeight: 700, marginTop: 16 }}>
                  {service}
                </div>
                <p style={{ marginTop: 10, color: "#475569", lineHeight: 1.8 }}>
                  Professional support tailored to project needs, team
                  coordination, and real utility construction constraints.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" style={sectionWrap}>
        <div style={sectionInner}>
          <SectionHeading
            eyebrow="Capabilities"
            title="A stronger consulting presence for utilities, engineers, and contractors"
            text="This added section helps the site feel more like an established utility consulting firm and less like a basic brochure page."
          />

          <div style={cardGrid3}>
            {capabilities.map((item) => (
              <Card key={item.title} style={{ padding: 28 }}>
                <div style={iconDot}>●</div>
                <div style={{ fontSize: 22, fontWeight: 700, marginTop: 16 }}>
                  {item.title}
                </div>
                <p style={{ marginTop: 12, color: "#475569", lineHeight: 1.8 }}>
                  {item.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="clients" style={{ ...sectionWrap, background: "#f8fafc" }}>
        <div style={sectionInner}>
          <SectionHeading
            eyebrow="Clients"
            title="Organizations H&S Utility Consulting has worked with"
          />

          <div
            style={{
              marginTop: 32,
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            {clients.map((client) => (
              <div
                key={client.name}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 22px rgba(15,23,42,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 18px rgba(15,23,42,0.06)";
                }}
                style={{
                  padding: "16px 26px",
                  borderRadius: 999,
                  background: "#ffffff",
                  border: "1px solid #cfd9e4",
                  color: "#334155",
                  fontWeight: 600,
                  fontSize: 17,
                  lineHeight: 1.3,
                  boxShadow: "0 6px 18px rgba(15,23,42,0.06)",
                  transition: "all 0.15s ease",
                  cursor: "default",
                }}
              >
                {client.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        style={{
          padding: "80px 20px",
          background: "#020617",
          color: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 36,
            alignItems: "start",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                color: "#8fe05f",
              }}
            >
              Contact
            </div>
            <h2
              style={{
                marginTop: 16,
                marginBottom: 0,
                fontSize: "clamp(2rem, 4vw, 2.5rem)",
                lineHeight: 1.1,
              }}
            >
              Let’s talk about your next utility project.
            </h2>
            <p
              style={{
                marginTop: 24,
                maxWidth: 640,
                color: "#cbd5e1",
                lineHeight: 1.8,
                fontSize: 18,
              }}
            >
              This contact area can be wired to a real form, email inbox, CRM,
              or embedded scheduling link once the site is moved into production.
            </p>

            <div style={{ marginTop: 28, display: "grid", gap: 14, color: "#cbd5e1" }}>
              <div>Serving utilities, contractors, and engineering partners</div>
              <div>info@hscutility.com</div>
              <div>(Add business phone)</div>
            </div>
          </div>

          <div
            style={{
              background: "#fff",
              color: brand.slate,
              borderRadius: 30,
              padding: 32,
              boxShadow: "0 18px 44px rgba(0,0,0,0.25)",
            }}
          >
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              style={{ display: "grid", gap: 18 }}
            >
              <input type="hidden" name="form-name" value="contact" />

              <div style={twoCol}>
                <div>
                  <label style={labelStyle}>Name</label>
                  <input name="name" placeholder="Your name" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Company</label>
                  <input name="company" placeholder="Company name" style={inputStyle} />
                </div>
              </div>

              <div style={twoCol}>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input name="phone" placeholder="(555) 555-5555" style={inputStyle} />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Project Details</label>
                <textarea
                  name="details"
                  rows={5}
                  placeholder="Tell us about the project, support needed, timeline, or outage planning requirements."
                  style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                />
              </div>

              <button
                type="submit"
                style={{
                  border: "none",
                  borderRadius: 18,
                  background: brand.green,
                  color: "#fff",
                  padding: "16px 20px",
                  fontSize: 16,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

const navLink = {
  color: "#475569",
  textDecoration: "none",
  fontWeight: 600,
  fontSize: 14,
};

const statEyebrow = {
  fontSize: 10,
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: brand.green,
};

const statTitle = {
  marginTop: 6,
  fontSize: 18,
  fontWeight: 800,
  lineHeight: 1.2,
  color: "#0b132b",
};

const statBody = {
  marginTop: 8,
  fontSize: 13,
  color: "#475569",
  lineHeight: 1.5,
};

const miniPanel = {
  borderRadius: 22,
  background: "rgba(255,255,255,0.55)",
  padding: 18,
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.32)",
};

const miniPanelTitle = {
  fontSize: 12,
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  color: brand.green,
};

const miniPanelText = {
  marginTop: 12,
  color: "#334155",
  lineHeight: 1.8,
  fontSize: 16,
};

const sectionWrap = {
  padding: "80px 20px",
};

const sectionInner = {
  maxWidth: 1200,
  margin: "0 auto",
};

const sectionGrid = {
  maxWidth: 1200,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: 40,
  alignItems: "start",
};

const cardGrid3 = {
  marginTop: 48,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 18,
};

const iconDot = {
  width: 44,
  height: 44,
  borderRadius: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: brand.greenSoft,
  color: brand.green,
  fontWeight: 800,
};

const twoCol = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 16,
};

const labelStyle = {
  display: "block",
  marginBottom: 8,
  fontSize: 14,
  fontWeight: 600,
  color: "#334155",
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  borderRadius: 18,
  border: "1px solid #cbd5e1",
  padding: "14px 16px",
  fontSize: 15,
  outline: "none",
};