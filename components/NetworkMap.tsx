'use client';

import React from 'react';

export default function NetworkMap() {
  return (
    <div
      className="relative w-full max-w-xl mx-auto aspect-square flex items-center justify-center select-none"
      aria-hidden="true"
    >
      {/* Ambient glow backgrounds */}
      <div className="absolute inset-0 bg-radial from-[#C7A45D]/10 via-[#5CC8E8]/5 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute w-72 h-72 rounded-full bg-[#102A43]/50 blur-2xl pointer-events-none" />

      {/* Decorative SVG Network */}
      <svg
        className="relative w-full h-full text-[#C7A45D]"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldBeam" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C7A45D" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#5CC8E8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#E1C783" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C7A45D" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0B1B2E" stopOpacity="0.05" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Concentric institutional rings */}
        <circle cx="300" cy="300" r="260" stroke="#C7A45D" strokeOpacity="0.12" strokeDasharray="3 6" />
        <circle cx="300" cy="300" r="200" stroke="#5CC8E8" strokeOpacity="0.1" />
        <circle cx="300" cy="300" r="140" stroke="#C7A45D" strokeOpacity="0.16" strokeDasharray="4 8" />
        <circle cx="300" cy="300" r="80" stroke="#E1C783" strokeOpacity="0.2" />

        {/* Stylized African Continental Geometry Polygon Backbone */}
        <path
          d="M 230 110
             L 370 120
             L 440 180
             L 480 250
             L 430 300
             L 390 350
             L 360 430
             L 330 490
             L 300 520
             L 285 470
             L 250 370
             L 190 330
             L 150 280
             L 140 230
             L 180 180
             Z"
          stroke="#C7A45D"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          fill="url(#orbitGrad)"
          strokeLinejoin="round"
        />

        {/* Secondary inner contour lines */}
        <path
          d="M 230 110 L 290 260 L 390 350"
          stroke="#5CC8E8"
          strokeWidth="1"
          strokeOpacity="0.3"
        />
        <path
          d="M 140 230 L 290 260 L 480 250"
          stroke="#C7A45D"
          strokeWidth="1"
          strokeOpacity="0.3"
        />
        <path
          d="M 290 260 L 300 520"
          stroke="#C7A45D"
          strokeWidth="1"
          strokeOpacity="0.35"
        />

        {/* International sovereign connection arcs to partner hubs (Europe, Americas, Asia) */}
        <path
          d="M 290 260 C 240 150, 160 90, 90 70"
          stroke="url(#goldBeam)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeOpacity="0.7"
        />
        <path
          d="M 370 120 C 430 80, 500 70, 540 80"
          stroke="url(#goldBeam)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeOpacity="0.7"
        />
        <path
          d="M 430 300 C 490 320, 530 360, 560 410"
          stroke="#5CC8E8"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          strokeOpacity="0.6"
        />

        {/* Strategic Continental Academic Nodes (Coordinates) */}
        {/* Node 1: North hub (Casablanca/Tunis axis) */}
        <g transform="translate(230, 110)">
          <circle r="4" fill="#C7A45D" filter="url(#glow)" />
          <circle r="10" stroke="#C7A45D" strokeOpacity="0.3" className="animate-ping" />
        </g>

        {/* Node 2: West hub 1 (Dakar axis) */}
        <g transform="translate(140, 230)">
          <circle r="4" fill="#5CC8E8" filter="url(#glow)" />
          <circle r="8" stroke="#5CC8E8" strokeOpacity="0.4" />
        </g>

        {/* Node 3: West hub 2 (Abidjan/Cotonou axis) */}
        <g transform="translate(190, 310)">
          <circle r="5" fill="#E1C783" filter="url(#glow)" />
          <circle r="11" stroke="#E1C783" strokeOpacity="0.3" />
        </g>

        {/* Node 4: Central hub (Yaoundé/Brazzaville) */}
        <g transform="translate(290, 320)">
          <circle r="6" fill="#C7A45D" filter="url(#glow)" />
          <circle r="14" stroke="#C7A45D" strokeOpacity="0.35" className="animate-pulse" />
        </g>

        {/* Node 5: Central Sovereign Core (Coordination CEIUE) */}
        <g transform="translate(290, 260)">
          <circle r="8" fill="#FBF8F1" filter="url(#glow)" />
          <circle r="18" stroke="#C7A45D" strokeWidth="1.5" strokeOpacity="0.8" />
          <circle r="26" stroke="#5CC8E8" strokeWidth="1" strokeDasharray="2 4" strokeOpacity="0.5" />
        </g>

        {/* Node 6: East hub 1 (Addis-Abeba / Kigali axis) */}
        <g transform="translate(420, 260)">
          <circle r="5" fill="#5CC8E8" filter="url(#glow)" />
          <circle r="10" stroke="#5CC8E8" strokeOpacity="0.4" />
        </g>

        {/* Node 7: East hub 2 (Nairobi / Dar-es-Salaam) */}
        <g transform="translate(420, 320)">
          <circle r="4" fill="#C7A45D" />
          <circle r="8" stroke="#C7A45D" strokeOpacity="0.4" />
        </g>

        {/* Node 8: South hub */}
        <g transform="translate(330, 470)">
          <circle r="4.5" fill="#E1C783" />
          <circle r="9" stroke="#E1C783" strokeOpacity="0.3" />
        </g>

        {/* External Global Partner Nodes */}
        <g transform="translate(90, 70)">
          <circle r="3.5" fill="#5CC8E8" />
          <circle r="7" stroke="#5CC8E8" strokeOpacity="0.5" />
        </g>
        <g transform="translate(540, 80)">
          <circle r="3.5" fill="#C7A45D" />
          <circle r="7" stroke="#C7A45D" strokeOpacity="0.5" />
        </g>
        <g transform="translate(560, 410)">
          <circle r="3" fill="#5CC8E8" />
        </g>

        {/* Discrete Institutional Micro-Labels */}
        <text x="290" y="240" textAnchor="middle" fill="#E1C783" fontSize="10" fontFamily="monospace" letterSpacing="2">
          AXE SOUVERAIN
        </text>
        <text x="140" y="215" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="monospace">
          OUEST
        </text>
        <text x="440" y="245" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="monospace">
          EST & CORNE
        </text>
        <text x="330" y="500" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="monospace">
          AUSTRAL
        </text>
      </svg>
    </div>
  );
}
