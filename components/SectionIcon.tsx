type Props = { className?: string };

const icons: Record<string, (p: Props) => React.ReactElement> = {
  skitouren: ({ className }) => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Mountains — static */}
      <path d="M4 40 L16 14 L24 26 L32 10 L44 40Z" strokeWidth="2" />
      <path d="M28 17 L32 10 L36 17" strokeWidth="2" />
      {/* Skier — slides on hover */}
      <g className="icon-skier">
        <circle cx="12" cy="10" r="2.5" fill="currentColor" strokeWidth="0" />
        <path d="M12 12.5 L10 19 L8 22" strokeWidth="2" />
        <path d="M12 14 L15 17" strokeWidth="2" />
        <path d="M9 14 L6 22" strokeWidth="1.5" />
        <path d="M15 15 L17 22" strokeWidth="1.5" />
        <path d="M5 23 L11 22.5 L13 23" strokeWidth="1.8" />
        <path d="M14 23 L18 22.5 L20 23" strokeWidth="1.8" />
      </g>
    </svg>
  ),

  wintersport: ({ className }) => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Entire snowflake rotates */}
      <g className="icon-snowflake">
        <line x1="24" y1="6" x2="24" y2="42" strokeWidth="2" />
        <line x1="6" y1="24" x2="42" y2="24" strokeWidth="2" />
        <line x1="9.5" y1="9.5" x2="38.5" y2="38.5" strokeWidth="2" />
        <line x1="38.5" y1="9.5" x2="9.5" y2="38.5" strokeWidth="2" />
        <path d="M24 13 L19 18 M24 13 L29 18" strokeWidth="1.5" />
        <path d="M24 35 L19 30 M24 35 L29 30" strokeWidth="1.5" />
        <path d="M13 24 L18 19 M13 24 L18 29" strokeWidth="1.5" />
        <path d="M35 24 L30 19 M35 24 L30 29" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="3" fill="currentColor" strokeWidth="0" />
      </g>
    </svg>
  ),

  wandern: ({ className }) => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Mountains + trail — static */}
      <path d="M4 42 L18 12 L26 24 L32 8 L44 42Z" strokeWidth="2" />
      <path d="M28.5 14.5 L32 8 L35.5 14.5" strokeWidth="2" />
      <path d="M8 38 Q12 34 15 30 Q18 26 22 22 Q25 19 28 16" strokeWidth="1.5" strokeDasharray="2 3" />
      {/* Hiker — bobs on hover */}
      <g className="icon-hiker">
        <circle cx="37" cy="28" r="2.5" fill="currentColor" strokeWidth="0" />
        <path d="M37 30.5 L35 38 L33 43" strokeWidth="1.8" />
        <path d="M35 42 L33 43 L36 43" strokeWidth="1.5" />
        <path d="M37 32 L41 35" strokeWidth="1.8" />
        <path d="M40 29 L43 40" strokeWidth="1.5" />
      </g>
    </svg>
  ),

  mtb: ({ className }) => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Mountain silhouette — static */}
      <path d="M2 38 L14 20 L20 28 L26 16 L36 38Z" strokeWidth="1.5" opacity="0.5" />
      {/* Rear wheel — spins */}
      <g className="icon-wheel">
        <circle cx="14" cy="36" r="7" strokeWidth="2" />
        <circle cx="14" cy="36" r="1.5" fill="currentColor" strokeWidth="0" />
        <line x1="14" y1="29" x2="14" y2="43" strokeWidth="1" />
        <line x1="7" y1="36" x2="21" y2="36" strokeWidth="1" />
        <line x1="9.1" y1="31.1" x2="18.9" y2="40.9" strokeWidth="1" />
        <line x1="18.9" y1="31.1" x2="9.1" y2="40.9" strokeWidth="1" />
      </g>
      {/* Front wheel — spins */}
      <g className="icon-wheel">
        <circle cx="34" cy="36" r="7" strokeWidth="2" />
        <circle cx="34" cy="36" r="1.5" fill="currentColor" strokeWidth="0" />
        <line x1="34" y1="29" x2="34" y2="43" strokeWidth="1" />
        <line x1="27" y1="36" x2="41" y2="36" strokeWidth="1" />
        <line x1="29.1" y1="31.1" x2="38.9" y2="40.9" strokeWidth="1" />
        <line x1="38.9" y1="31.1" x2="29.1" y2="40.9" strokeWidth="1" />
      </g>
      {/* Frame — static */}
      <path d="M14 36 L22 22 L34 36" strokeWidth="2" />
      <path d="M22 22 L27 36" strokeWidth="2" />
      <path d="M22 22 L28 19" strokeWidth="2" />
      <path d="M28 19 L31 17 M28 19 L30 21" strokeWidth="2" />
      {/* Rider — static */}
      <circle cx="26" cy="17" r="2.5" fill="currentColor" strokeWidth="0" />
      <path d="M26 19.5 L24 24 L22 22" strokeWidth="1.8" />
      <path d="M24 21 L28 19" strokeWidth="1.8" />
    </svg>
  ),

  radtouren: ({ className }) => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Rear wheel — spins */}
      <g className="icon-wheel">
        <circle cx="12" cy="34" r="9" strokeWidth="2" />
        <circle cx="12" cy="34" r="2" fill="currentColor" strokeWidth="0" />
        <line x1="12" y1="25" x2="12" y2="43" strokeWidth="1" />
        <line x1="3" y1="34" x2="21" y2="34" strokeWidth="1" />
        <line x1="5.6" y1="27.6" x2="18.4" y2="40.4" strokeWidth="1" />
        <line x1="18.4" y1="27.6" x2="5.6" y2="40.4" strokeWidth="1" />
      </g>
      {/* Front wheel — spins */}
      <g className="icon-wheel">
        <circle cx="36" cy="34" r="9" strokeWidth="2" />
        <circle cx="36" cy="34" r="2" fill="currentColor" strokeWidth="0" />
        <line x1="36" y1="25" x2="36" y2="43" strokeWidth="1" />
        <line x1="27" y1="34" x2="45" y2="34" strokeWidth="1" />
        <line x1="29.6" y1="27.6" x2="42.4" y2="40.4" strokeWidth="1" />
        <line x1="42.4" y1="27.6" x2="29.6" y2="40.4" strokeWidth="1" />
      </g>
      {/* Frame — static */}
      <path d="M12 34 L22 20 L36 34" strokeWidth="2" />
      <path d="M22 20 L28 34" strokeWidth="2" />
      <path d="M28 20 L32 17 M28 20 L32 22" strokeWidth="2" />
      <path d="M28 20 L22 20" strokeWidth="2" />
      {/* Rider — static */}
      <circle cx="25" cy="15" r="2.5" fill="currentColor" strokeWidth="0" />
      <path d="M25 17.5 L23 22 M23 20 L28 20" strokeWidth="1.8" />
      {/* Hills */}
      <path d="M2 44 Q8 38 14 42 Q22 46 30 40 Q38 34 46 40" strokeWidth="1" opacity="0.4" />
    </svg>
  ),

  laufsport: ({ className }) => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Motion lines — fly left on hover */}
      <g className="icon-motion-lines">
        <path d="M8 22 L16 22" strokeWidth="1.5" strokeDasharray="1.5 2" />
        <path d="M6 27 L14 27" strokeWidth="1.5" strokeDasharray="1.5 2" />
        <path d="M8 32 L16 32" strokeWidth="1.5" strokeDasharray="1.5 2" />
      </g>
      {/* Runner — bounces on hover */}
      <g className="icon-runner">
        <circle cx="30" cy="8" r="3.5" fill="currentColor" strokeWidth="0" />
        <path d="M30 11.5 L26 22 L20 32" strokeWidth="2" />
        <path d="M28 16 L20 12" strokeWidth="2" />
        <path d="M27 19 L34 24" strokeWidth="2" />
        <path d="M26 22 L30 32 L36 38" strokeWidth="2" />
        <path d="M26 22 L20 32 L16 38" strokeWidth="2" />
        <path d="M16 38 L12 40 L18 40" strokeWidth="1.5" />
        <path d="M36 38 L34 42 L40 41" strokeWidth="1.5" />
      </g>
      <path d="M4 44 L44 44" strokeWidth="1" opacity="0.4" />
    </svg>
  ),

  klettern: ({ className }) => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Rock face — static */}
      <path d="M10 44 L8 8 L16 14 L22 6 L28 16 L36 10 L40 44Z" strokeWidth="2" />
      <path d="M14 20 L18 26 L16 32" strokeWidth="1" opacity="0.5" />
      <path d="M26 18 L30 24" strokeWidth="1" opacity="0.5" />
      {/* Rope — static */}
      <path d="M30 19.5 Q32 14 34 12 Q36 10 38 8" strokeWidth="1.5" strokeDasharray="2 2" />
      <circle cx="38" cy="8" r="1.5" fill="currentColor" strokeWidth="0" />
      {/* Climber — moves up on hover */}
      <g className="icon-climber">
        <circle cx="30" cy="22" r="2.5" fill="currentColor" strokeWidth="0" />
        <path d="M30 24.5 L28 30" strokeWidth="1.8" />
        <path d="M29 26 L24 22" strokeWidth="1.8" />
        <path d="M29 27 L33 23" strokeWidth="1.8" />
        <path d="M28 30 L25 35" strokeWidth="1.8" />
        <path d="M28 30 L31 35" strokeWidth="1.8" />
      </g>
    </svg>
  ),

  "nordic-walking": ({ className }) => (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Trees — static */}
      <path d="M4 44 L4 32 L8 26 L12 32 L12 44" strokeWidth="1" opacity="0.35" />
      <path d="M36 44 L36 30 L41 22 L46 30 L46 44" strokeWidth="1" opacity="0.35" />
      {/* Path */}
      <path d="M12 44 Q18 42 24 43 Q32 44 36 43" strokeWidth="1" opacity="0.4" />
      {/* Walker — bobs on hover */}
      <g className="icon-walker">
        <circle cx="24" cy="9" r="3.5" fill="currentColor" strokeWidth="0" />
        <path d="M24 12.5 L22 24 L18 36" strokeWidth="2" />
        <path d="M23 16 L15 20" strokeWidth="2" />
        <path d="M22 19 L30 22" strokeWidth="2" />
        <path d="M22 24 L26 34 L30 42" strokeWidth="2" />
        <path d="M22 24 L18 34 L14 42" strokeWidth="2" />
        <path d="M15 20 L10 34" strokeWidth="2" />
        <path d="M10 34 L8 37 L12 36" strokeWidth="1.5" />
        <path d="M30 22 L34 36" strokeWidth="2" />
        <path d="M34 36 L32 40 L36 38" strokeWidth="1.5" />
      </g>
    </svg>
  ),
};

export default function SectionIcon({ id, className }: { id: string; className?: string }) {
  const Icon = icons[id];
  return Icon ? <Icon className={className} /> : null;
}
