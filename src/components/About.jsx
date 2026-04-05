export default function About() {
  return (
    <section id="about" className="section alt">
      <h2 className="sec-title">About <span>Me</span></h2>
      <div className="about-wrap fade-up">
        <div className="about-text">
          <p>
            I'm a motivated Artificial Intelligence &amp; Machine Learning graduate with a passion
            for building technology that creates real impact. From MERN-stack web apps to AI-powered
            computer vision systems, I thrive at the intersection of intelligent systems and elegant software.
          </p>
          <p>
            I bring a strong analytical mindset, attention to detail, and a drive to write clean,
            maintainable code. Whether it's building APIs, training ML models, or visualizing data
            in Power BI — I enjoy the full journey from idea to deployment.
          </p>
          <div className="about-chips">
            {['MERN Stack', 'Machine Learning', 'Computer Vision', 'Power BI', 'REST APIs', 'Data Analytics'].map(c => (
              <span className="chip" key={c}>{c}</span>
            ))}
          </div>
        </div>

        <div className="about-sidebar">
          <div>
            <div className="sidebar-block-title">Languages Spoken</div>
            <div className="lang-pills">
              {['English', 'Hindi', 'Urdu', 'Kannada', 'Tulu'].map(l => (
                <span className="lang-pill" key={l}>{l}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="sidebar-block-title">Hobbies</div>
            <div className="hobby-list">
              {[['✈️', 'Travelling'], ['🌱', 'Gardening'], ['🏏', 'Cricket']].map(([ico, h]) => (
                <div className="hobby-item" key={h}>
                  <span className="hobby-icon">{ico}</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
