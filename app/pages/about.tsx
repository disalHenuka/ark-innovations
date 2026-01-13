import Home from "../pages/home";

export default function AboutPage() {
  return (
    <div>
      <div style={{ minHeight: "100vh", padding: "4rem", background: "#f5f5f5" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "2rem", color: "#0A1F24" }}>About Us</h1>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#333", maxWidth: "800px" }}>
          Ark Innovations (Pvt) Ltd is a leading provider of recruitment, manpower supply, 
          and outsourcing services. We specialize in connecting talented professionals with 
          businesses that need reliable, skilled workforce solutions.
        </p>
      </div>
    </div>
  );
}

