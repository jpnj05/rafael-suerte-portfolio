import { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { navItems, profile } from "../data/site";

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Navbar
      expand="lg"
      className="site-nav"
      sticky="top"
      expanded={open}
      onToggle={(next) => setOpen(next)}
    >
      <Container fluid className="shell nav-shell">
        <Link className="brand navbar-brand" to="/" onClick={close}>
          <span className="brand-mark" aria-hidden="true">
            R
          </span>
          <span className="brand-text">
            <span className="brand-name">Rafael Suerte</span>
            <span className="brand-sub">Portfolio — 2026</span>
          </span>
        </Link>

        <Navbar.Offcanvas
          id="site-nav-canvas"
          placement="end"
          className="nav-canvas"
          aria-labelledby="site-nav-label"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="site-nav-label" className="canvas-title">
              Navigation
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="nav-links" onSelect={close}>
              {navItems.map((item, index) => (
                <Nav.Item key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `nav-link${isActive ? " is-active" : ""}`
                    }
                    onClick={close}
                  >
                    <span className="nav-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item.label}</span>
                  </NavLink>
                </Nav.Item>
              ))}
            </Nav>

            <div className="nav-canvas-foot">
              <p className="canvas-note">
                Front-end developer &amp; interface designer
              </p>
              <a className="canvas-mail" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <p className="canvas-loc">{profile.location}</p>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

        <div className="nav-right">
          <span className="status-pill d-none d-xl-inline-flex">
            <span className="pulse" aria-hidden="true" />
            {profile.availability}
          </span>
          <Navbar.Toggle
            aria-controls="site-nav-canvas"
            className="nav-toggle"
            label="Toggle navigation"
          />
        </div>
      </Container>
    </Navbar>
  );
}
