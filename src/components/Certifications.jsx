import { CERTS } from '../data'

export default function Certifications() {
  return (
    <section id="certifications" className="section alt">
      <h2 className="sec-title">Certifications &amp; <span>Badges</span></h2>
      <div className="certs-grid">
        {CERTS.map(c => (
          <div className="cert-card fade-up" key={c.name}>
            <div className="cert-ico">{c.ico}</div>
            <div>
              <div className="cert-name">{c.name}</div>
              <div className="cert-by">{c.by}</div>
              <div className="cert-when">{c.when}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
