export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", padding: "4rem", background: "#f5f5f5" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "2rem", color: "#0A1F24" }}>About Us</h1>
        
        <div style={{ background: "white", padding: "3rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "1.5rem", color: "#05B6BC" }}>Who We Are</h2>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#333", marginBottom: "1.5rem" }}>
            Ark Innovations (Pvt) Ltd is a leading provider of recruitment, manpower supply, and outsourcing services in Sri Lanka. 
            With years of experience in the industry, we specialize in connecting talented professionals with businesses that need 
            reliable, skilled workforce solutions.
          </p>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#333", marginBottom: "1.5rem" }}>
            Our commitment to excellence and personalized service has made us a trusted partner for companies across various 
            industries. We understand that every business has unique staffing needs, and we work closely with our clients to 
            provide customized solutions that drive success.
          </p>
        </div>

        <div style={{ background: "white", padding: "3rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "1.5rem", color: "#05B6BC" }}>Our Mission</h2>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#333", marginBottom: "1.5rem" }}>
            To empower businesses by providing exceptional workforce solutions that enable them to achieve their goals. 
            We strive to be the bridge between talented professionals and organizations seeking excellence.
          </p>
        </div>

        <div style={{ background: "white", padding: "3rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "1.5rem", color: "#05B6BC" }}>Our Values</h2>
          <ul style={{ fontSize: "1.2rem", lineHeight: "2", color: "#333", paddingLeft: "2rem" }}>
            <li><strong>Integrity:</strong> We conduct business with honesty and transparency</li>
            <li><strong>Excellence:</strong> We deliver quality services that exceed expectations</li>
            <li><strong>Innovation:</strong> We continuously adapt to meet evolving market needs</li>
            <li><strong>Partnership:</strong> We build long-term relationships based on trust and mutual success</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

