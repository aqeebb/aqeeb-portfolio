import { PROJECTS } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="sec-title">Featured <span>Projects</span></h2>
      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <div className={`proj-card fade-up d${(i % 3) + 1}`} key={p.title}>
            <div className="proj-banner">
              <img src={p.img} alt={p.title} className="proj-img" />
              <div className="proj-banner-fade" />
            </div>
            <div className="proj-body">
              <div className="proj-meta">
                <div className="proj-title">{p.title}</div>
                <div className="proj-date">{p.date}</div>
              </div>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-tech">
                {p.tech.map(t => (
                  <span className="p-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
