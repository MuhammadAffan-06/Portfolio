"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
  twinkleDirection: number
}

interface GlowPoint {
  x: number
  y: number
  baseRadius: number
  pulseSpeed: number
}

export default function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const glowPointsRef = useRef<GlowPoint[]>([])
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full size of its container
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      generateStars()
      generateGlows()
    }

    // Generate stars
    const generateStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 800)
      const stars: Star[] = []

      for (let i = 0; i < starCount; i++) {
        const size =
          Math.random() > 0.97
            ? Math.random() * 2 + 1.5
            : Math.random() * 0.8 + 0.5

        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          opacity: Math.random() * 0.5 + 0.4,
          twinkleSpeed: Math.random() * 0.008 + 0.002,
          twinkleDirection: Math.random() > 0.5 ? 1 : -1,
        })
      }

      starsRef.current = stars
    }

    // Generate glow points
    const generateGlows = () => {
      const glows: GlowPoint[] = Array.from({ length: 4 }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseRadius: 80 + Math.random() * 40,
        pulseSpeed: 0.002 + Math.random() * 0.0001,
      }))
      glowPointsRef.current = glows
    }

    // Draw loop
    const drawStars = () => {
      if (!ctx || !canvas) return

      // Clear canvas
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw glowing pulse circles
      const now = Date.now()
      glowPointsRef.current.forEach((glow) => {
        const pulse = (Math.sin(now * glow.pulseSpeed) + 1) / 2
        const radius = glow.baseRadius + pulse * 30

        const gradient = ctx.createRadialGradient(glow.x, glow.y, 0, glow.x, glow.y, radius)
        gradient.addColorStop(0, `rgba(32, 109, 199, ${0.35 + pulse * 0.25})`)
        gradient.addColorStop(1, "rgba(32, 109, 199, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(glow.x, glow.y, radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw stars
      starsRef.current.forEach((star) => {
        star.opacity += star.twinkleSpeed * star.twinkleDirection
        if (star.opacity > 0.8 || star.opacity < 0.3) {
          star.twinkleDirection *= -1
        }

        ctx.fillStyle = `rgba(${180 + Math.random() * 75}, ${120 + Math.random() * 50}, 255, ${star.opacity})`
        ctx.fillRect(
          Math.floor(star.x),
          Math.floor(star.y),
          star.size <= 1 ? 1 : Math.ceil(star.size),
          star.size <= 1 ? 1 : Math.ceil(star.size),
        )

        if (star.size > 1.2) {
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
          ctx.fillRect(Math.floor(star.x), Math.floor(star.y), 1, 1)
        }
      })

      animationRef.current = requestAnimationFrame(drawStars)
    }

    // Initialize
    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    drawStars()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full absolute top-0 left-0 z-0"
      style={{ background: "black" }}
    />
  )
}
