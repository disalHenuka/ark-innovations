import "@/app/styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        
        <div className="footerSection">
          <h3>
            Ark Innovations (Pvt) Ltd
          </h3>
          <p>
            Providing recruitment, manpower supply, and outsourcing services
            that empower businesses to succeed through skilled and reliable
            workforce solutions.
          </p>
        </div>

        <div className="footerSection">
          <h3>Our Services</h3>
          <ul>
            <li>Recruitment & Talent Acquisition</li>
            <li>Manpower Supply</li>
            <li>Outsourcing Services</li>
            <li>Executive Search</li>
          </ul>
        </div>

        <div className="footerSection">
          <h3>Contact</h3>
          <p>333, Pushpasiri, Thanthirimulla, Panadura</p>
          <p style={{ marginTop: "0.5rem" }}>+94 77 60 10 600</p>
          <p>+94 70 43 36 626</p>
          <p style={{ marginTop: "0.5rem" }}>arkinnovations@gmail.com</p>
        </div>
      </div>

      <div className="footerBottom">
        © {new Date().getFullYear()} Ark Innovations (Pvt) Ltd. All rights reserved.
      </div>
    </footer>
  );
}
