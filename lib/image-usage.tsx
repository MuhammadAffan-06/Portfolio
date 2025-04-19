"use client"
import Image from "next/image"
import { useState } from "react"

interface StyledImageProps {
    src: string
    alt: string
    width?: number
    height?: number
    className?: string
}

export default function StyledImage({ src, alt, width = 200, height = 200, className = "" }: StyledImageProps) {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <div className="relative w-full max-w-md aspect-square mt-5">
            {/* Container with rounded corners */}
            <div className="relative w-full h-full overflow-hidden rounded-2xl">
                {/* Image with blue/purple overlay */}
                <div className="relative w-full h-full">
                    <Image
                        src={src || "/placeholder.svg"}
                        alt={alt}
                        width={width}
                        height={height}
                        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"
                            } ${className}`}
                        onLoad={() => setIsLoaded(true)}
                        style={{
                            filter: "brightness(0.9) contrast(1.1) saturate(1.2)",
                        }}
                    />
                    {/* Blue/purple overlay */}
                    <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply" />
                </div>
            </div>

            {/* Corner elements */}
            <div className="absolute -top-8 -left-8 w-18 h-18 bg-gray-900 rounded-full" />
            <div className="absolute -bottom-8 -right-8 w-18 h-18 bg-gray-900 rounded-full" />
        </div>
    )
}
