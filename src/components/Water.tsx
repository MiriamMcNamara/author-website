import { useMemo } from 'react'

const W = 2880

/** Abstract periodic wave (sum of sines). Period is W/2, so a 200%-wide strip loops seamlessly. */
function wavePath(h: number, base: number, amps: number[], seed: number) {
  const half = W / 2
  let d = `M0 ${h}`
  for (let x = 0; x <= W; x += 8) {
    const t = ((x % half) / half) * Math.PI * 2
    let y = base
    amps.forEach((a, i) => {
      y += a * Math.sin(t * (i + 1) + seed * (i + 1.7))
    })
    d += ` L${x} ${y.toFixed(1)}`
  }
  return `${d} L${W} ${h} Z`
}

interface WaveProps {
  color: string
  base: number
  amps: number[]
  seed: number
  /** horizontal movement per pixel scrolled (negative = leftward) */
  speed: number
  /** idle drift, so the water breathes when the page is still */
  drift?: number
  opacity?: number
  viewHeight?: number
  /** hero waves also rise as you scroll */
  rise?: boolean
}

export function Wave({ color, base, amps, seed, speed, drift = 0, opacity = 1, viewHeight = 300, rise }: WaveProps) {
  const d = useMemo(() => wavePath(viewHeight, base, amps, seed), [viewHeight, base, amps, seed])
  return (
    <div className="wave" data-speed={speed} data-drift={drift} data-rise={rise ? '1' : undefined}>
      <svg viewBox={`0 0 ${W} ${viewHeight}`} preserveAspectRatio="none" aria-hidden="true">
        <path d={d} fill={color} fillOpacity={opacity} />
      </svg>
      <div className="wave-fill" style={{ background: color, opacity }} />
    </div>
  )
}

/** Wavy edge between two sections: `back` is a mid-tone, `front` is the colour of the next section. */
export function WaveDivider({ back, front, seed = 0, flip = false, background }: { back: string; front: string; seed?: number; flip?: boolean; background?: string }) {
  const s = flip ? -1 : 1
  return (
    <div className="wave-divider" aria-hidden="true" style={background ? { background } : undefined}>
      <Wave color={back} base={38} amps={[16, 8, 4]} seed={seed + 0.5} speed={-0.22 * s} drift={30} viewHeight={100} />
      <Wave color={front} base={58} amps={[14, 7, 4]} seed={seed + 2} speed={0.3 * s} drift={-40} viewHeight={100} />
    </div>
  )
}

// Small deterministic PRNG so bubbles don't reshuffle between renders
function rng(seed: number) {
  return () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }
}

interface BubblesProps {
  count: number
  variant: 'light' | 'dark'
  duration: [number, number] // min seconds, random extra
  seed?: number
  className?: string
  style?: React.CSSProperties
}

export function Bubbles({ count, variant, duration, seed = 1, className = '', style }: BubblesProps) {
  const bubbles = useMemo(() => {
    const r = rng(seed)
    return Array.from({ length: count }, () => {
      const size = variant === 'light' ? 5 + r() * 9 : 4 + r() * 10
      return {
        left: `${3 + r() * 94}%`,
        width: size,
        height: size,
        animationDuration: `${duration[0] + r() * duration[1]}s`,
        animationDelay: `${-r() * (duration[0] + duration[1])}s`,
      }
    })
  }, [count, variant, duration, seed])

  return (
    <div className={`bubbles ${variant} ${className}`} style={style} aria-hidden="true">
      {bubbles.map((b, i) => (
        <span key={i} style={b} />
      ))}
    </div>
  )
}
