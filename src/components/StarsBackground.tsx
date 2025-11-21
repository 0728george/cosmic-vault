'use client';

export function StarsBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-900 via-cosmic-800 to-black" />
      <div
        className="absolute inset-0 bg-[radial-gradient(2px_2px_at_20px_30px,#eee,transparent),radial-gradient(2px_2px_at_40px_70px,#fff,transparent),radial-gradient(1px_1px_at_90px_40px,#fff,transparent),radial-gradient(1px_1px_at_130px_80px,#eee,transparent),radial-gradient(2px_2px_at_160px_30px,#fff,transparent)] bg-[length:200px_200px] animate-twinkle opacity-30"
      />
    </div>
  );
}
