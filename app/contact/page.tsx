export default function ContactPage() {
  return (
    <div>
      <div style={{ minHeight: "100vh", padding: "4rem", background: "#f5f5f5" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "2rem", color: "#0A1F24" }}>Contact Us</h1>
        <div style={{ maxWidth: "800px" }}>
          <div style={{ background: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", marginBottom: "2rem" }}>
            <h2 style={{ color: "#05B6BC", marginBottom: "1rem" }}>Get in Touch</h2>
            <p style={{ color: "#666", lineHeight: "1.8", marginBottom: "1.5rem" }}>
              We'd love to hear from you. Reach out to us through any of the following channels.
            </p>
          </div>
          
          <div style={{ background: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <h3 style={{ color: "#0A1F24", marginBottom: "1rem" }}>Address</h3>
            <p style={{ color: "#666", lineHeight: "1.8", marginBottom: "1.5rem" }}>
              333, Pushpasiri, Thanthirimulla, Panadura
            </p>
            
            <h3 style={{ color: "#0A1F24", marginBottom: "1rem", marginTop: "2rem" }}>Phone</h3>
            <p style={{ color: "#666", lineHeight: "1.8", marginBottom: "0.5rem" }}>
              +94 77 60 10 600
            </p>
            <p style={{ color: "#666", lineHeight: "1.8", marginBottom: "1.5rem" }}>
              +94 70 43 36 626
            </p>
            
            <h3 style={{ color: "#0A1F24", marginBottom: "1rem", marginTop: "2rem" }}>Email</h3>
            <p style={{ color: "#666", lineHeight: "1.8" }}>
              arkinnovations@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

