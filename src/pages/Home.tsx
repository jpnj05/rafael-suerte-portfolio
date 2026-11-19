import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Marquee from "../components/Marquee";
import ProjectCard from "../components/ProjectCard";
import RotatingSeal from "../components/RotatingSeal";
import SectionLabel from "../components/SectionLabel";
import {
  heroMeta,
  marqueeItems,
  nowItems,
  profile,
  projects,
  stats,
} from "../data/site";

export default function Home() {
  const navigate = useNavigate();
  const featured = projects.slice(0, 3);

  return (
    <>
      <section className="hero">
        <Container className="shell">
          <Row className="hero-top g-4 g-lg-5">
            <Col lg={7} className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                Portfolio — Vol. 04 / 2026
              </div>

              <h1 className="hero-name">
                <span>Rafael</span>
                <span className="hero-line-2">Felipe</span>
                <span className="hero-line-3">
                  Suerte
                  <span className="hero-star" aria-hidden="true">
                    ✳
                  </span>
                </span>
              </h1>

              <p className="hero-lede">{profile.intro}</p>

              <div className="hero-actions">
                <Link to="/work" className="btn btn-ink">
                  Selected work <span aria-hidden="true">↗</span>
                </Link>
                <Link to="/about" className="btn btn-outline-ink">
                  About &amp; résumé
                </Link>
              </div>
            </Col>

            <Col lg={5}>
              <figure className="portrait">
                <div className="portrait-frame">
                  <img
                    src="/portrait.jpg"
                    alt="Portrait of Rafael Felipe Suerte"
                    width={880}
                    height={1184}
                  />
                </div>
                <RotatingSeal
                  className="portrait-seal"
                  text="OPEN FOR WORK · METRO MANILA, PH · "
                />
                <figcaption>Rafael, at home in Manila — 2026</figcaption>
              </figure>
            </Col>
          </Row>

          <div className="hero-meta">
            {heroMeta.map((item) => (
              <div className="hero-meta-item" key={item.key}>
                <span className="hero-meta-key">{item.key}</span>
                <span className="hero-meta-value">{item.value}</span>
              </div>
            ))}
            <span className="hero-meta-scroll" aria-hidden="true">
              Scroll ↓
            </span>
          </div>
        </Container>
      </section>

      <Marquee items={marqueeItems} />

      <section className="stats">
        <Container className="shell">
          <Row className="g-0">
            {stats.map((stat) => (
              <Col xs={12} md={4} className="stat" key={stat.label}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container className="shell">
          <SectionLabel
            index="01"
            action={
              <Link className="section-action" to="/work">
                All projects <span aria-hidden="true">↗</span>
              </Link>
            }
          >
            Selected work
          </SectionLabel>

          <Row className="g-4">
            {featured.map((project) => (
              <Col md={6} lg={4} key={project.slug}>
                <ProjectCard
                  project={project}
                  cta="View project"
                  onOpen={() => navigate("/work")}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container className="shell">
          <Row className="g-4 g-lg-5 align-items-start">
            <Col lg={5}>
              <SectionLabel index="02">Approach</SectionLabel>
              <h2 className="display">
                A practice built on
                <br />
                <em>slow looking.</em>
              </h2>
              <p className="page-lede">
                I work from the words outward: a grid, a palette, a handful of
                sentences. Then I build the smallest version that still feels
                alive — and test it at 320px before I call it done.
              </p>
            </Col>

            <Col lg={6} className="ms-lg-auto">
              <Card className="now-card">
                <Card.Header>Currently</Card.Header>
                <ListGroup variant="flush">
                  {nowItems.map((item) => (
                    <ListGroup.Item key={item.label}>
                      <span className="now-key">{item.label}</span>
                      <span className="now-value">{item.value}</span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cta">
        <Container className="shell">
          <div className="cta-inner">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                Open for work
              </p>
              <h2>
                Have something
                <br />
                <em>worth making?</em>
              </h2>
            </div>
            <div className="cta-side">
              <p>
                I take on a handful of projects each term — a site, a small
                product, a brand that needs a voice. Tell me what you are
                building and what it should feel like.
              </p>
              <Link className="btn btn-ink" to="/contact">
                Start a conversation <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
