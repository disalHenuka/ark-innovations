export default function IndustriesPage() {
  return (
    <div style={{ minHeight: "100vh", padding: "4rem", background: "#f5f5f5" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem", color: "#0A1F24" }}>Industries We Serve</h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "3rem", color: "#666", maxWidth: "800px" }}>
          We provide workforce solutions across various industries, helping businesses find the right talent for their specific needs
        </p>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          <div style={{ background: "white", padding: "2.5rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
            <h2 style={{ color: "#05B6BC", marginBottom: "1rem", fontSize: "1.5rem" }}>Construction & Engineering</h2>
            <p style={{ color: "#666", lineHeight: "1.8", marginBottom: "1rem" }}>
              We supply skilled construction workers, engineers, project managers, and safety professionals for infrastructure 
              projects, residential developments, and commercial construction.
            </p>
            <p style={{ color: "#666", lineHeight: "1.8" }}>
              Our candidates are certified, safety-trained, and experienced in various construction methodologies.
            </p>
          </div>

          <div style={{ background: "white", padding: "2.5rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
            <h2 style={{ color: "#05B6BC", marginBottom: "1rem", fontSize: "1.5rem" }}>Manufacturing & Production</h2>
            <p style={{ color: "#666", lineHeight: "1.8", marginBottom: "1rem" }}>
              From factory floor workers to production supervisors, we provide manpower solutions for manufacturing facilities 
              across textiles, food processing, electronics, and automotive sectors.
            </p>
            <p style={{ color: "#666", lineHeight: "1.8" }}>
              Quality assurance personnel and production line operators are available to keep your operations running smoothly.
            </p>
          </div>

          <div style={{ background: "white", padding: "2.5rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
            <h2 style={{ color: "#05B6BC", marginBottom: "1rem", fontSize: "1.5rem" }}>Logistics & Warehousing</h2>
            <p style={{ color: "#666", lineHeight: "1.8", marginBottom: "1rem" }}>
              We supply warehouse staff, forklift operators, logistics coordinators, and distribution center workers to support 
              your supply chain operations.
            </p>
            <p style={{ color: "#666", lineHeight: "1.8" }}>
              All our logistics personnel are trained in inventory management and safety protocols.
            </p>
          </div>

          <div style={{ background: "white", padding: "2.5rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
            <h2 style={{ color: "#05B6BC", marginBottom: "1rem", fontSize: "1.5rem" }}>Hospitality & Tourism</h2>
            <p style={{ color: "#666", lineHeight: "1.8", marginBottom: "1rem" }}>
              Hotel staff, restaurant workers, event coordinators, and customer service professionals are available to enhance 
              your hospitality operations.
            </p>
            <p style={{ color: "#666", lineHeight: "1.8" }}>
              Our hospitality staff are trained in customer service excellence and industry best practices.
            </p>
          </div>

          <div style={{ background: "white", padding: "2.5rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
            <h2 style={{ color: "#05B6BC", marginBottom: "1rem", fontSize: "1.5rem" }}>Information Technology</h2>
            <p style={{ color: "#666", lineHeight: "1.8", marginBottom: "1rem" }}>
              We recruit software developers, IT support specialists, system administrators, and technical project managers 
              for companies in the technology sector.
            </p>
            <p style={{ color: "#666", lineHeight: "1.8" }}>
              Our IT professionals stay updated with the latest technologies and certifications.
            </p>
          </div>

          <div style={{ background: "white", padding: "2.5rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
            <h2 style={{ color: "#05B6BC", marginBottom: "1rem", fontSize: "1.5rem" }}>Healthcare & Pharmaceuticals</h2>
            <p style={{ color: "#666", lineHeight: "1.8", marginBottom: "1rem" }}>
              We provide healthcare support staff, laboratory technicians, pharmaceutical representatives, and administrative 
              personnel for medical facilities and healthcare organizations.
            </p>
            <p style={{ color: "#666", lineHeight: "1.8" }}>
              All healthcare personnel meet industry compliance and certification requirements.
            </p>
          </div>
        </div>

        <div style={{ background: "#05B6BC", padding: "3rem", borderRadius: "12px", marginTop: "3rem", textAlign: "center" }}>
          <h2 style={{ color: "white", marginBottom: "1rem", fontSize: "1.8rem" }}>Not Seeing Your Industry?</h2>
          <p style={{ color: "white", fontSize: "1.2rem", lineHeight: "1.8" }}>
            We work with businesses across many sectors. Contact us to discuss your specific industry needs.
          </p>
        </div>
      </div>
    </div>
  );
}

