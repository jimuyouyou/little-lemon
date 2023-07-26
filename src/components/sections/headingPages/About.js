export default function About() {
  return (
    <article className="about-us">
      <section className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Berlin</h2>
        <p className="about-subtext">Little Lemon was opened in 2002 by 6 international classmates from an online course.
          They offer the best and native food they can. For the restaurant management, those stakeholders discuss online and invite their friends to evaluate what can be improved.</p>
      </section>

      <section className="double-image">
        <img className="about-1" src={require('../../../assets/food/food3.jpeg')} alt="Little Lemon restaurant cuisine 1"></img>
        <img className="about-2" src={require('../../../assets/food/food2.jpeg')} alt="Little Lemon restaurant cuisine 2"></img>
      </section>
    </article>
  );
}