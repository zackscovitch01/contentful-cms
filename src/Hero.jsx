import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            necessitatibus fuga laboriosam hic repellendus porro modi itaque cum
            odit aliquam, quisquam officiis maxime provident vero, debitis
            quasi. Odit adipisci dolorem molestiae harum ullam soluta amet,
            aperiam veritatis hic accusamus voluptatum?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="women and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
