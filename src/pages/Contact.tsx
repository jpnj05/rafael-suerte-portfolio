import { useState } from "react";
import type { FormEvent } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";
import LocalTime from "../components/LocalTime";
import PageIntro from "../components/PageIntro";
import { profile } from "../data/site";

export default function Contact() {
  const [validated, setValidated] = useState(false);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setValidated(true);
      return;
    }

    setValidated(false);
    setSent(true);
    form.reset();
  };

  return (
    <Container className="shell">
      <PageIntro
        eyebrow="Contact — Say hello"
        title={
          <>
            Let's make
            <br />
            <em>something.</em>
          </>
        }
        lede="A project, an internship, a second pair of eyes on a layout — my inbox is open. I reply within a day or two, usually with questions."
      />

      <Row className="g-4 g-lg-5 contact-row">
        <Col lg={5}>
          <a className="email-line" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="copy-row">
            <Button className="btn-outline-ink copy-btn" onClick={copyEmail}>
              {copied ? "Copied ✓" : "Copy email"}
            </Button>
            <span className="copy-note" role="status" aria-live="polite">
              {copied ? "Address copied to clipboard" : "Or click to copy"}
            </span>
          </div>

          <ListGroup variant="flush" className="contact-list">
            <ListGroup.Item>
              <span className="contact-key">Phone</span>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                {profile.phone}
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="contact-key">Location</span>
              <span>{profile.location}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="contact-key">Local time</span>
              <LocalTime label="" className="contact-time" />
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="contact-key">Status</span>
              <span>{profile.status}</span>
            </ListGroup.Item>
          </ListGroup>

          <div className="contact-socials">
            <p className="footer-col-title contact-social-title">
              Elsewhere
            </p>
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>{social.label}</span>
                <span className="social-handle">{social.handle} ↗</span>
              </a>
            ))}
          </div>
        </Col>

        <Col lg={7}>
          <Card className="form-card">
            <Card.Body>
              <p className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                Start here
              </p>
              <h2 className="form-title">Tell me about it.</h2>

              {sent ? (
                <Alert className="form-alert" role="status">
                  <p>
                    <strong>Noted, thank you.</strong> This is a portfolio demo,
                    so nothing was actually sent — but the email address above
                    reaches me for real.
                  </p>
                  <Button
                    variant="link"
                    className="form-alert-btn"
                    onClick={() => setSent(false)}
                  >
                    Write another
                  </Button>
                </Alert>
              ) : (
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group controlId="contact-name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          name="name"
                          placeholder="Your name"
                          autoComplete="name"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please add your name.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="contact-email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          required
                          type="email"
                          name="email"
                          placeholder="you@studio.com"
                          autoComplete="email"
                        />
                        <Form.Control.Feedback type="invalid">
                          A valid email helps me reply.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group controlId="contact-topic">
                        <Form.Label>What is this about?</Form.Label>
                        <Form.Select name="topic" defaultValue="Website">
                          <option>Website</option>
                          <option>Product / app</option>
                          <option>Identity &amp; type</option>
                          <option>Internship</option>
                          <option>Something else</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group controlId="contact-message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          required
                          as="textarea"
                          rows={4}
                          name="message"
                          placeholder="What are you building, and what should it feel like?"
                        />
                        <Form.Control.Feedback type="invalid">
                          A sentence or two is plenty.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="form-foot">
                    <Button className="btn-ink" type="submit">
                      Send message <span aria-hidden="true">↗</span>
                    </Button>
                    <span className="form-note">
                      Demo form — nothing leaves this page. Email works.
                    </span>
                  </div>
                </Form>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
