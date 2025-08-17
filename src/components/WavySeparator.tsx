interface WavySeparatorProps {
  fromColor: 'violet' | 'green' | 'white';
  toColor: 'violet' | 'green' | 'white';
}

export function WavySeparator({ fromColor, toColor }: WavySeparatorProps) {
  // Create more organic wavy SVG separators
  const getWavePath = (variant: string) => {
    switch (variant) {
      case 'violet-to-green':
        return "M0,60 C150,80 350,20 500,60 C650,100 850,40 1200,60 L1200,120 L0,120 Z";
      case 'green-to-violet':  
        return "M0,0 C150,40 350,0 500,20 C650,40 850,0 1200,20 L1200,120 L0,120 Z";
      case 'violet-to-white':
        return "M0,60 C200,20 400,80 600,40 C800,0 1000,60 1200,30 L1200,120 L0,120 Z";
      case 'white-to-green':
        return "M0,40 C200,80 400,20 600,60 C800,100 1000,40 1200,70 L1200,120 L0,120 Z";
      default:
        return "M0,60 L1200,60 L1200,120 L0,120 Z";
    }
  };

  const getColors = () => {
    const colorMap = {
      violet: 'var(--violet-primary)',
      green: 'var(--green-primary)', 
      white: '#ffffff'
    };
    return {
      from: colorMap[fromColor],
      to: colorMap[toColor]
    };
  };

  const variant = `${fromColor}-to-${toColor}`;
  const colors = getColors();
  const wavePath = getWavePath(variant);

  return (
    <div className="relative w-full h-20 overflow-hidden" style={{ backgroundColor: colors.from }}>
      <svg
        viewBox="0 0 1200 120"
        className="absolute bottom-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path 
          d={wavePath}
          fill={colors.to}
        />
      </svg>
    </div>
  );
}