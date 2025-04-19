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

export default function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
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
    }

    // Generate stars
    const generateStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 800) // Slightly higher density
      const stars: Star[] = []

      for (let i = 0; i < starCount; i++) {
        // Create mostly small stars with a few larger ones
        const size =
          Math.random() > 0.97
            ? Math.random() * 2 + 1.5 // Larger stars (3%)
            : Math.random() * 0.8 + 0.5 // Smaller stars (97%)

        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          opacity: Math.random() * 0.5 + 0.4, // Slightly higher minimum opacity
          twinkleSpeed: Math.random() * 0.008 + 0.002, // Adjusted twinkling speed
          twinkleDirection: Math.random() > 0.5 ? 1 : -1,
        })
      }

      starsRef.current = stars
    }

    // Draw stars
    const drawStars = () => {
      if (!ctx || !canvas) return

      // Clear canvas
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      starsRef.current.forEach((star) => {
        // Update star twinkling
        star.opacity += star.twinkleSpeed * star.twinkleDirection

        // Change direction if reaching opacity bounds
        if (star.opacity > 0.8 || star.opacity < 0.3) {
          star.twinkleDirection *= -1
        }

        // Draw crisp star with purple tint
        ctx.fillStyle = `rgba(${180 + Math.random() * 75}, ${120 + Math.random() * 50}, ${255}, ${star.opacity})`

        // Use a small rectangle for sharper stars instead of circles with gradients
        ctx.fillRect(
          Math.floor(star.x),
          Math.floor(star.y),
          star.size <= 1 ? 1 : Math.ceil(star.size),
          star.size <= 1 ? 1 : Math.ceil(star.size),
        )

        // Add a white center to brighter stars for a sharper look
        if (star.size > 1.2) {
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
          ctx.fillRect(Math.floor(star.x), Math.floor(star.y), 1, 1)
        }
      })

      // Continue animation
      animationRef.current = requestAnimationFrame(drawStars)
    }

    // Initialize
    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    drawStars()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full absolute top-0 left-0 z-0" style={{ background: "black" }} />
}
