import { EXPERIENCE } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="section alt">
      <h2 className="sec-title">Work <span>Experience</span></h2>
      <div className="timeline fade-up">
        {EXPERIENCE.map(e => (
          <div className="tl-item" key={e.role}>
            <div className="tl-date">{e.date}</div>
            <div className="tl-role">{e.role}</div>
            <div className="tl-co">{e.company}</div>
            <ul className="tl-points">
              {e.points.map(p => <li key={p}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
