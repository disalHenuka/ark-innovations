export default function ServicesPage() {
  return (
    <div>
      <div style={{ minHeight: "100vh", padding: "4rem", background: "#f5f5f5" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "2rem", color: "#0A1F24" }}>Our Services</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", maxWidth: "1200px" }}>
          <div style={{ background: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <h2 style={{ color: "#05B6BC", marginBottom: "1rem" }}>Recruitment & Talent Acquisition</h2>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              We help businesses find the right talent for their teams through comprehensive recruitment strategies.
            </p>
          </div>
          <div style={{ background: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <h2 style={{ color: "#05B6BC", marginBottom: "1rem" }}>Manpower Supply</h2>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Reliable and skilled workforce solutions tailored to your business needs.
            </p>
          </div>
          <div style={{ background: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <h2 style={{ color: "#05B6BC", marginBottom: "1rem" }}>Outsourcing Services</h2>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Comprehensive outsourcing solutions to streamline your operations.
            </p>
          </div>
          <div style={{ background: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <h2 style={{ color: "#05B6BC", marginBottom: "1rem" }}>Executive Search</h2>
            <p style={{ color: "#666", lineHeight: "1.6" }}>
              Specialized recruitment for senior-level and executive positions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

