export default function ContactPage() {
  return (
    <div style={{ minHeight: "100vh", padding: "4rem", background: "#f5f5f5" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem", color: "#0A1F24" }}>Contact Us</h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "3rem", color: "#666", maxWidth: "800px" }}>
          Get in touch with us to discuss your workforce needs. We're here to help you find the right solutions.
        </p>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
          <div style={{ background: "white", padding: "2.5rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
            <h2 style={{ color: "#05B6BC", marginBottom: "1.5rem", fontSize: "1.5rem" }}>📍 Office Address</h2>
            <p style={{ color: "#666", lineHeight: "1.8", fontSize: "1.1rem" }}>
              333, Pushpasiri,<br />
              Thanthirimulla,<br />
              Panadura,<br />
              Sri Lanka
            </p>
          </div>

          <div style={{ background: "white", padding: "2.5rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
            <h2 style={{ color: "#05B6BC", marginBottom: "1.5rem", fontSize: "1.5rem" }}>📞 Phone Numbers</h2>
            <p style={{ color: "#666", lineHeight: "1.8", marginBottom: "0.5rem", fontSize: "1.1rem" }}>
              <strong>Mobile:</strong> +94 77 60 10 600
            </p>
            <p style={{ color: "#666", lineHeight: "1.8", fontSize: "1.1rem" }}>
              <strong>Mobile:</strong> +94 70 43 36 626
            </p>
            <p style={{ color: "#666", lineHeight: "1.8", marginTop: "1rem", fontSize: "0.95rem" }}>
              Available Monday - Friday: 8:00 AM - 6:00 PM
            </p>
          </div>

          <div style={{ background: "white", padding: "2.5rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
            <h2 style={{ color: "#05B6BC", marginBottom: "1.5rem", fontSize: "1.5rem" }}>✉️ Email</h2>
            <p style={{ color: "#666", lineHeight: "1.8", marginBottom: "1rem", fontSize: "1.1rem" }}>
              <strong>General Inquiries:</strong><br />
              <a href="mailto:arkinnovations@gmail.com" style={{ color: "#05B6BC", textDecoration: "none" }}>
                arkinnovations@gmail.com
              </a>
            </p>
            <p style={{ color: "#666", lineHeight: "1.8", fontSize: "0.95rem" }}>
              We typically respond within 24 hours
            </p>
          </div>
        </div>

        <div style={{ background: "white", padding: "3rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
          <h2 style={{ color: "#05B6BC", marginBottom: "1.5rem", fontSize: "1.8rem" }}>Send Us a Message</h2>
          <p style={{ color: "#666", lineHeight: "1.8", fontSize: "1.1rem", marginBottom: "2rem" }}>
            Have questions about our services or need a quote? Reach out to us through any of the channels above, 
            and our team will be happy to assist you. Whether you're looking for temporary staff, permanent placements, 
            or outsourcing solutions, we're here to help you find the perfect workforce solution for your business.
          </p>
          <p style={{ color: "#666", lineHeight: "1.8", fontSize: "1.1rem" }}>
            We work with businesses of all sizes, from startups to large enterprises, and we're committed to providing 
            personalized service that meets your unique requirements.
          </p>
        </div>
      </div>
    </div>
  );
}

