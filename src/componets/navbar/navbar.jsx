import "./navbar.css"; 



export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <img src="/src/assets/Branding.png" alt="Logo" />
        </div>
        
        <nav className="nav-Links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="menu-btn">
          <img src="/src/assets/Union.png" alt="menu-icon" />
        </div>
        <div className="services">
          <img src="/src/assets/dit.png" alt="Services Icon" />
          <a href="#services">Services</a>
        </div>
        <div className="CTA">
          <div className="cta-content">
          <img src="/src/assets/calendar.png" alt="Calendar Icon" />
          <a href="#getintouch">Get in Touch</a>
          </div>
        </div>
   
    </div>

     </header>
  );
}
