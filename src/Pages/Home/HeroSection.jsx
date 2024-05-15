
export default function HeroSection() {

  const handleButtonClick = () => {
    // Redirect to LinkedIn profile
    // window.location.href = 'https://www.linkedin.com/in/naveenkumar2701';

    // Open LinkedIn profile in a new tab
    window.open('https://www.linkedin.com/in/naveenkumar2701', '_blank');
  };

  const handleDownloadResume = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '/assets/NaveenKumar R.pdf'; // Path to your PDF file
    downloadLink.download = 'NaveenKumar R.pdf'; // Name of the downloaded file
    downloadLink.click();
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm NaveenKumar R</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            "As a full-stack developer, I'm passionate about building seamless solutions that blend front-end elegance with back-end efficiency. With a user-centric approach and a drive for innovation, I thrive in dynamic environments, collaborating closely with teams to deliver impactful software solutions."
          </p>
        </div>
        <button className="btn btn-primary" onClick={handleDownloadResume}>Download Resume</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/Navin.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
