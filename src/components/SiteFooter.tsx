import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LocalTime from "./LocalTime";
import { navItems, profile } from "../data/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="shell">
        <p className="footer-eyebrow">Next</p>
        <Link className="footer-big" to="/contact">
          Say hello
          <span aria-hidden="true">↗</span>
        </Link>

        <Row className="footer-cols g-4">
          <Col xs={12} md={6} lg={4}>
            <p className="footer-brand">Rafael Felipe Suerte</p>
            <p className="footer-blurb">
              Front-end developer and interface designer making sharp,
              considered things for the web. Currently studying, always
              building.
            </p>
          </Col>

          <Col xs={6} md={3} lg={2}>
            <p className="footer-col-title">Index</p>
            <ul className="footer-links">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={6} md={3} lg={3}>
            <p className="footer-col-title">Elsewhere</p>
            <ul className="footer-links">
              {profile.socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noreferrer">
                    {social.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col xs={12} md={12} lg={3}>
            <p className="footer-col-title">Contact</p>
            <ul className="footer-links">
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                  {profile.phone}
                </a>
              </li>
              <li>{profile.location}</li>
            </ul>
            <LocalTime className="footer-time" />
          </Col>
        </Row>

        <div className="footer-bottom">
          <span>© 2026 Rafael Felipe Suerte</span>
          <span>Designed &amp; built in Iloilo City</span>
          <span className="footer-bottom-note">
            React · Vite · React-Bootstrap
          </span>
        </div>

        <span className="footer-wordmark" aria-hidden="true">
          Rafael Suerte
        </span>
      </Container>
    </footer>
  );
}
