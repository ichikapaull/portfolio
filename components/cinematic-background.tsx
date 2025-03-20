import Image from "next/image"

export default function CinematicBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Remove any potential border or outline that might appear as a green line */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" style={{ border: "none", outline: "none" }}></div>
      <Image
        src="/bg.png"
        alt="Thorny stems in black and white"
        fill
        priority
        className="object-cover object-center opacity-40"
        style={{ border: "none", outline: "none" }}
      />
    </div>
  )
}

