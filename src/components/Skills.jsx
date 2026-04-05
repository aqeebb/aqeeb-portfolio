import { SKILLS } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="sec-title">Technical <span>Skills</span></h2>
      <div className="skills-grid">
        {SKILLS.map((s, i) => (
          <div className={`skill-card fade-up d${(i % 3) + 1}`} key={s.label}>
            <div className="skill-card-header">
              <div
                className="skill-ico"
                style={{ background: s.color, border: `1px solid ${s.border}` }}
              >
                {s.icon}
              </div>
              <span className="skill-cat">{s.label}</span>
            </div>
            <div className="skill-tags">
              {s.tags.map(t => (
                <span className="skill-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
