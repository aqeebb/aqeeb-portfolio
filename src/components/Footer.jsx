import { SOCIAL } from '../data'

export default function Footer() {
  return (
    <footer>
      <span>© 2025 Mohamed Aqeeb. All rights reserved.</span>
      <div className="footer-links">
        <a href={SOCIAL.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  )
}
