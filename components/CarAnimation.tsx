'use client';

import { useState, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

export default function CarAnimation() {
  const [rolling, setRolling] = useState(false);
  const [done, setDone] = useState(false);
  const [headlightsOn, setHeadlightsOn] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleRoll = () => {
    if (rolling) return;
    setRolling(true);
    setHeadlightsOn(true);

    setTimeout(() => {
      setRolling(false);
      setDone(true);
      setTimeout(() => {
        document.getElementById('service-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 600);
    }, 1800);
  };

  const WheelSVG = ({ spinning }: { spinning: boolean }) => (
    <svg
      viewBox="0 0 40 40"
      className={`w-full h-full ${spinning ? 'animate-wheel-spin' : ''}`}
      style={{ transformOrigin: 'center center' }}
    >
      {/* Outer tire */}
      <circle cx="20" cy="20" r="18" fill="#1a1a1a" stroke="#A7A9AC" strokeWidth="1.5" />
      {/* Inner rim */}
      <circle cx="20" cy="20" r="11" fill="#2a2a2a" stroke="#A7A9AC" strokeWidth="1" />
      {/* Hub */}
      <circle cx="20" cy="20" r="4" fill="#E10600" />
      {/* Spokes */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <line
          key={i}
          x1="20" y1="20"
          x2={20 + 10 * Math.cos((deg * Math.PI) / 180)}
          y2={20 + 10 * Math.sin((deg * Math.PI) / 180)}
          stroke="#A7A9AC"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ))}
      {/* Tire tread dots */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <circle
          key={i}
          cx={20 + 16 * Math.cos((deg * Math.PI) / 180)}
          cy={20 + 16 * Math.sin((deg * Math.PI) / 180)}
          r="1.2"
          fill="#333"
        />
      ))}
    </svg>
  );

  const CarSVG = () => (
    <svg viewBox="0 0 420 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Shadow under car */}
      <ellipse cx="210" cy="148" rx="170" ry="8" fill="rgba(0,0,0,0.5)" />

      {/* Main body lower */}
      <path
        d="M40 100 L40 120 Q40 130 50 130 L370 130 Q380 130 380 120 L380 100 Z"
        fill="#1F2124"
        stroke="#A7A9AC"
        strokeWidth="1"
      />

      {/* Main body upper */}
      <path
        d="M80 100 L100 60 Q120 40 150 38 L280 38 Q310 40 325 60 L345 100 Z"
        fill="#1F2124"
        stroke="#A7A9AC"
        strokeWidth="1"
      />

      {/* Roof */}
      <path
        d="M120 100 L135 65 Q148 48 168 46 L260 46 Q278 48 292 65 L305 100 Z"
        fill="#2a2d30"
        stroke="#A7A9AC"
        strokeWidth="0.5"
      />

      {/* Windshield */}
      <path
        d="M135 95 L148 68 Q158 54 173 52 L248 52 Q262 54 272 68 L283 95 Z"
        fill="rgba(100,180,255,0.08)"
        stroke="rgba(167,169,172,0.4)"
        strokeWidth="0.8"
      />

      {/* Side windows */}
      <path d="M136 94 L148 68 Q156 55 170 53 L200 53 L200 94 Z"
        fill="rgba(80,140,200,0.07)" stroke="rgba(167,169,172,0.3)" strokeWidth="0.5" />
      <path d="M205 53 L245 53 Q257 55 265 68 L275 94 L205 94 Z"
        fill="rgba(80,140,200,0.07)" stroke="rgba(167,169,172,0.3)" strokeWidth="0.5" />

      {/* Door panel lines */}
      <line x1="200" y1="95" x2="200" y2="128" stroke="#A7A9AC" strokeWidth="0.5" opacity="0.4" />
      <line x1="135" y1="115" x2="340" y2="115" stroke="#A7A9AC" strokeWidth="0.3" opacity="0.3" />

      {/* Side stripe - red accent */}
      <path
        d="M52 112 L370 112"
        stroke="#E10600"
        strokeWidth="2"
        opacity="0.7"
        strokeLinecap="round"
      />

      {/* Front bumper */}
      <path
        d="M345 100 Q368 102 378 112 L378 128 Q370 130 358 130 L340 130 L345 100 Z"
        fill="#2a2d30"
        stroke="#A7A9AC"
        strokeWidth="0.7"
      />

      {/* Rear bumper */}
      <path
        d="M78 100 Q55 102 44 112 L44 128 Q52 130 64 130 L82 130 L78 100 Z"
        fill="#2a2d30"
        stroke="#A7A9AC"
        strokeWidth="0.7"
      />

      {/* Headlights (right side = front) */}
      <rect x="350" y="96" width="22" height="10" rx="2" fill={headlightsOn ? '#fffde0' : '#333'} />
      {headlightsOn && (
        <>
          <rect x="350" y="96" width="22" height="10" rx="2" fill="#fffde0" opacity="0.9" />
          <ellipse cx="361" cy="101" rx="30" ry="8" fill="rgba(255,253,200,0.06)" />
        </>
      )}

      {/* Taillights (left side = rear) */}
      <rect x="48" y="96" width="20" height="10" rx="2" fill={headlightsOn ? '#E10600' : '#5a0000'} />
      {headlightsOn && (
        <ellipse cx="48" cy="101" rx="20" ry="6" fill="rgba(225,6,0,0.15)" />
      )}

      {/* Grill lines */}
      {[0, 3, 6, 9].map(offset => (
        <line key={offset} x1="356" y1={108 + offset} x2="376" y2={108 + offset}
          stroke="#A7A9AC" strokeWidth="0.8" opacity="0.4" />
      ))}

      {/* Wheel wells */}
      <path d="M290 130 Q320 128 340 130" stroke="#A7A9AC" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M80 130 Q100 128 120 130" stroke="#A7A9AC" strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
  );

  return (
    <section className="relative bg-[#0B0B0D] overflow-hidden py-16 lg:py-20">
      {/* Section label */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-8 bg-[#E10600]" />
          <span className="text-[#E10600] text-xs font-bold tracking-[0.25em] uppercase">
            Interactive Demo
          </span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-black text-white mt-3">
          Roll In. <span className="text-[#A7A9AC]">We'll Handle the Rest.</span>
        </h2>
        <p className="text-[#A7A9AC] text-sm mt-2 tracking-wide">
          Start your service request in seconds.
        </p>
      </div>

      {/* Road / Stage area */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative bg-[#0e1012] border border-[#1F2124] overflow-hidden"
          style={{ minHeight: '280px' }}
        >
          {/* Road surface */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#141618]">
            {/* Road center line */}
            <div className="absolute top-6 left-0 right-0 flex gap-8 px-8">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="h-[2px] w-12 bg-[#A7A9AC]/20 flex-shrink-0" />
              ))}
            </div>
          </div>

          {/* Background grid */}
          <div className="absolute inset-0 grid-texture opacity-30 pointer-events-none" />

          {/* Red motion streaks (appear when rolling) */}
          {rolling && (
            <div className="absolute left-0 bottom-24 flex flex-col gap-2 pointer-events-none">
              {[220, 160, 280, 120, 200].map((w, i) => (
                <div
                  key={i}
                  className="h-[2px] animate-red-streak"
                  style={{
                    width: `${w}px`,
                    background: 'linear-gradient(90deg, transparent, #E10600, #ff4444)',
                    animationDelay: `${i * 80}ms`,
                    marginLeft: `${i % 2 === 0 ? 0 : 20}px`,
                  }}
                />
              ))}
            </div>
          )}

          {/* Car assembly */}
          <div
            className={`absolute transition-all ${rolling ? 'animate-car-roll' : ''} ${done ? 'translate-x-[45px]' : ''}`}
            style={{
              bottom: '80px',
              left: '60px',
              width: '380px',
              height: '160px',
              transition: rolling ? 'none' : 'all 0.3s ease',
            }}
          >
            {/* Car body SVG */}
            <div className="absolute inset-0">
              <CarSVG />
            </div>

            {/* Front wheel */}
            <div
              className="absolute"
              style={{ width: '54px', height: '54px', bottom: '-18px', right: '52px' }}
            >
              <WheelSVG spinning={rolling} />
            </div>

            {/* Rear wheel */}
            <div
              className="absolute"
              style={{ width: '54px', height: '54px', bottom: '-18px', left: '38px' }}
            >
              <WheelSVG spinning={rolling} />
            </div>

            {/* Headlight glow */}
            {headlightsOn && (
              <div
                className="absolute right-0 top-[35%] w-20 h-8 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at right, rgba(255,253,200,0.3) 0%, transparent 70%)',
                }}
              />
            )}
          </div>

          {/* CTA Button area */}
          <div className="absolute top-8 right-8 flex flex-col items-end gap-3">
            {!done ? (
              <button
                onClick={handleRoll}
                disabled={rolling}
                className={`group flex items-center gap-3 font-bold text-sm tracking-widest uppercase px-6 py-3 transition-all duration-200 border ${
                  rolling
                    ? 'bg-[#E10600]/20 border-[#E10600]/50 text-[#E10600]/70 cursor-wait'
                    : 'bg-[#E10600] hover:bg-[#b00500] border-[#E10600] text-white cursor-pointer'
                }`}
                style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
              >
                {rolling ? (
                  <>
                    <span className="animate-pulse">Rolling In...</span>
                  </>
                ) : (
                  <>
                    Wheels Roll
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            ) : (
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-2 bg-[#E10600]/10 border border-[#E10600]/40 px-4 py-2">
                  <span className="w-2 h-2 bg-[#E10600] rounded-full animate-blink" />
                  <span className="text-[#E10600] text-xs font-bold tracking-wider uppercase">
                    Ready for service
                  </span>
                </div>
                <button
                  onClick={() => document.getElementById('service-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 text-[#A7A9AC] hover:text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  Open Service Request <ChevronRight size={12} />
                </button>
              </div>
            )}

            {/* Instruction text */}
            {!rolling && !done && (
              <p className="text-[#A7A9AC]/60 text-xs tracking-wide text-right max-w-[160px]">
                Click to see the interaction — then we open your form.
              </p>
            )}
          </div>

          {/* Corner accent lines */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#E10600]" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#E10600]" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#E10600]/40" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#E10600]/40" />
        </div>

        {/* Caption */}
        <p className="text-center text-[#A7A9AC]/50 text-xs tracking-widest uppercase mt-4">
          This interaction is a sample of what makes this not a normal website
        </p>
      </div>
    </section>
  );
}
