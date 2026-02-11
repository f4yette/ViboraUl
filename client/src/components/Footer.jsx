import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <h4>@ ViboraUK Ltd</h4>

      <div className="credentials">
        <h5><Link to="/footer/tc">Terms and Conditions</Link></h5>
        <h5><Link to="/footer/privacy">Privacy Policy</Link></h5>
        <h5><Link to="/footer/cookies">Cookies</Link></h5>
        <h5><Link to="/footer/delivery">Delivery Information</Link></h5>
        <h5><Link to="/footer/returns">Returns</Link></h5>
        <h5><Link to="/contact">Contact</Link></h5>
      </div>

      <p>&copy; 2025 PADEL UK. All rights reserved.</p>
    </footer>
  );
}
