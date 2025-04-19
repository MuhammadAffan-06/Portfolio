"use client"

import { useEffect, useState } from "react"
import styles from "./starry-background.module.css"

interface StarProps {
  size: number
  top: string
  left: string
  animationDelay: string
  brightness: number
}

interface GlowingCircleProps {
  size: number
  top: string
  left: string
  animationDuration: string
  animationDelay: string
}

const Star = ({ size, top, left, animationDelay, brightness }: StarProps) => {
  // Calculate color based on brightness (more purple for brighter stars)
  const purpleIntensity = Math.floor(180 + brightness * 75)
  const color = `rgb(255, ${purpleIntensity}, 255)`

  return (
    <div
      className={styles.star}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top,
        left,
        backgroundColor: color,
        boxShadow: `0 0 ${size * 0.5}px ${size * 0.2}px ${color}`,
        animationDelay,
      }}
    />
  )
}

const GlowingCircle = ({ size, top, left, animationDuration, animationDelay }: GlowingCircleProps) => {
  const color = "#206DC7" // The specific blue color requested

  return (
    <div
      className={styles.glowingCircle}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top,
        left,
        backgroundColor: color,
        boxShadow: `0 0 ${size * 2.5}px ${size * 1.5}px ${color}`,
        animationDuration,
        animationDelay,
      }}
    />
  )
}

export default function StarryBackground() {
  const [stars, setStars] = useState<StarProps[]>([])
  const [glowingCircles, setGlowingCircles] = useState<GlowingCircleProps[]>([])

  useEffect(() => {
    // Generate stars and glowing circles based on viewport size
    const generateElements = () => {
      // Reduced star count (increased divisor from 500 to 1500)
      const starCount = Math.floor((window.innerWidth * window.innerHeight) / 1500)
      const newStars: StarProps[] = []

      for (let i = 0; i < starCount; i++) {
        // Create a variety of star sizes with mostly small stars
        let size
        const rand = Math.random()

        if (rand > 0.995) {
          // Very rare large stars (0.5%)
          size = Math.random() * 3 + 2
        } else if (rand > 0.98) {
          // Uncommon medium stars (1.5%)
          size = Math.random() * 1.5 + 1.5
        } else {
          // Common small stars (98%)
          size = Math.random() * 0.8 + 0.5
        }

        newStars.push({
          size,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          brightness: Math.random(),
        })
      }

      // Generate fewer but larger glowing circles only on the left and right edges
      // Reduced count due to larger size
      const circleCount = Math.floor((window.innerWidth * window.innerHeight) / 60000)
      const newGlowingCircles: GlowingCircleProps[] = []

      for (let i = 0; i < circleCount; i++) {
        // Much larger circles (15-30px)
        const size = Math.random() * 15 + 15

        // Decide whether to place on left or right edge
        const isLeftSide = Math.random() > 0.5

        // Position horizontally only on edges (0-15% or 85-100% of screen width)
        const leftPosition = isLeftSide ? `${Math.random() * 15}%` : `${85 + Math.random() * 15}%`

        newGlowingCircles.push({
          size,
          top: `${Math.random() * 100}%`,
          left: leftPosition,
          animationDuration: `${Math.random() * 5 + 10}s`, // 10-15s for slower glow with larger circles
          animationDelay: `${Math.random() * 5}s`,
        })
      }

      setStars(newStars)
      setGlowingCircles(newGlowingCircles)
    }

    generateElements()

    // Regenerate elements on window resize
    window.addEventListener("resize", generateElements)
    return () => window.removeEventListener("resize", generateElements)
  }, [])

  return (
    <div className={styles.background}>
      {stars.map((star, index) => (
        <Star key={`star-${index}`} {...star} />
      ))}
      {glowingCircles.map((circle, index) => (
        <GlowingCircle key={`circle-${index}`} {...circle} />
      ))}
    </div>
  )
}
