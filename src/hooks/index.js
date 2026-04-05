import { useEffect, useState } from 'react'

export function useTyped(words) {
  const [text, setText] = useState('')
  const [wi, setWi] = useState(0)
  const [ci, setCi] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wi]
    const timer = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, ci + 1))
        if (ci + 1 === word.length) setTimeout(() => setDeleting(true), 1600)
        else setCi(ci + 1)
      } else {
        setText(word.slice(0, ci - 1))
        if (ci - 1 === 0) {
          setDeleting(false)
          setWi((wi + 1) % words.length)
          setCi(0)
        } else setCi(ci - 1)
      }
    }, deleting ? 55 : 95)
    return () => clearTimeout(timer)
  }, [text, deleting, wi, ci, words])

  return text
}

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up')
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 70)
        })
      },
      { threshold: 0.08 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

export function useActiveSection() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const onScroll = () => {
      let current = ''
      sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return active
}
