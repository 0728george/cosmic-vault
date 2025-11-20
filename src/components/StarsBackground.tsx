"use client";

export function StarsBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-cosmic-gradient" />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(2px 2px at 20px 30px, #eee, transparent),
                            radial-gradient(2px 2px at 40px 70px, #fff, transparent),
                            radial-gradient(1px 1px at 90px 40px, #fff, transparent),
                            radial-gradient(1px 1px at 130px 80px, #eee, transparent),
                            radial-gradient(2px 2px at 160px 30px, #fff, transparent)`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          animation: "twinkle 20s linear infinite",
        }}
      />
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
