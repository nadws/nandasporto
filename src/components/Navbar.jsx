import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">Nanda's Portofolio</Link>
      </div>
      <a href="/resume.pdf" className="cta-btn">
        Resume
      </a>
    </div>
  );
};

export default Navbar;
