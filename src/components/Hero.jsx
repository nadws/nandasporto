import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image
        src="/images/profile.jpeg"
        className="profile-img"
        width={300}
        height={300}
        alt="Joe's personal headshot"
      />
      <div className="hero-text">
        <h1>Hey, I'm Nanda 👋</h1>
        <p>
          I'm a software developer from Banjarmasin, Indonesia. I love building
          (and sometimes designing) websites, apps, and all kinds of digital
          products.
        </p>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/nanda_wahyudiii?igsh=MWQxMmtzN2c2NWdqbA=="
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://github.com/nadws"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nandaw-wahyudi-6221a21b4/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
