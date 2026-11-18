/**
 * Scroll-driven water & sky motion, plus reveal-on-scroll.
 * Elements opt in with classes/data attributes:
 *   .wave[data-speed][data-drift][data-rise]   horizontal parallax (+ rise in hero)
 *   [data-cloud][data-speed][data-x0][data-w]  clouds drifting across
 *   [data-bird][data-ox][data-sc]              birds gliding across
 *   [data-parallax]                            moves down at given rate (sun)
 *   [data-hero-copy]                           hero text drifts down & fades
 *   [data-whale-dive]                          hero whale button tips down & dives
 *   .reveal                                    fades up when scrolled into view
 */
export function startMotion(): () => void {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      }),
    { threshold: 0.15 },
  )
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el))

  if (reduce) return () => io.disconnect()

  const waves = Array.from(document.querySelectorAll<HTMLElement>('.wave'))
  const clouds = Array.from(document.querySelectorAll<HTMLElement>('[data-cloud]'))
  const birds = Array.from(document.querySelectorAll<HTMLElement>('[data-bird]'))
  const parallax = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'))
  const copy = document.querySelector<HTMLElement>('[data-hero-copy]')
  const whale = document.querySelector<HTMLElement>('[data-whale-dive]')

  const t0 = performance.now()
  let raf = 0

  const frame = (now: number) => {
    const y = window.scrollY
    const t = (now - t0) / 1000
    const vh = window.innerHeight
    const W = window.innerWidth

    waves.forEach((w) => {
      const r = w.getBoundingClientRect()
      if (r.bottom < -200 || r.top > vh + 200) return // offscreen
      const sp = +w.dataset.speed!
      const dr = +(w.dataset.drift || 0)
      const half = r.width / 2
      let x = ((vh - r.top) * sp + t * dr * 0.15) % half
      if (x > 0) x -= half
      const rise = w.dataset.rise ? -y * Math.abs(sp) * 0.6 : 0
      w.style.transform = `translate3d(${x}px,${rise}px,0)`
    })

    if (y < vh * 1.2) {
      clouds.forEach((c) => {
        const s = +c.dataset.speed!
        const w = +c.dataset.w!
        const span = W + w * 2
        const x = (((+c.dataset.x0! / 100) * span + t * (8 + s * 40) + y * s * 0.6) % span) - w
        c.style.transform = `translate3d(${x}px,${-y * s * 1.2}px,0)`
        c.style.opacity = String(Math.max(0, 0.8 - (y / vh) * 0.8))
      })
      birds.forEach((b, i) => {
        const sc = +b.dataset.sc!
        const ox = +b.dataset.ox!
        const span = W + 160
        const x = (((ox / 100) * span * 0.25 + t * 26 * (0.85 + sc * 0.3) + y * 0.25) % span) - 80 + ox
        const bob = Math.sin(t * 0.9 + i * 1.3) * 6
        b.style.transform = `translate3d(${x}px,${bob - y * 0.5}px,0)`
        b.style.opacity = String(Math.max(0, 1 - y / (vh * 0.5)))
      })
      parallax.forEach((p) => {
        p.style.transform = `translateY(${y * +p.dataset.parallax!}px)`
      })
      if (whale) {
        // as you scroll, the whale tips its nose down and dives out of view
        const p = Math.min(1, y / (vh * 0.45))
        const e = p * p * (3 - 2 * p) // smoothstep
        whale.style.transform = `translate3d(${-e * 40}px, ${e * 110}px, 0) rotate(${-e * 28}deg)`
        whale.style.opacity = String(Math.max(0, 1 - Math.pow(p, 1.6)))
      }
      if (copy) {
        copy.style.transform = `translateY(${y * 0.28}px)`
        copy.style.opacity = String(Math.max(0, 1 - y / (vh * 0.7)))
      }
    }

    raf = requestAnimationFrame(frame)
  }
  raf = requestAnimationFrame(frame)

  return () => {
    cancelAnimationFrame(raf)
    io.disconnect()
  }
}
