import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface SectionColors {
  gradientStart: string;
  gradientEnd: string;
  accentCircle1: string;
  accentCircle2: string;
  accentCircle1Opacity: number;
  accentCircle2Opacity: number;
}

export interface LightSectionColors {
  gradientStart: string;
  gradientEnd: string;
  accentCircle1: string;
  accentCircle2: string;
  accentCircle1Opacity: number;
  accentCircle2Opacity: number;
  primaryAccent: string;
  borderColor: string;
}

export type SectionId = 
  | 'hero' 
  | 'strategy' 
  | 'team' 
  | 'insights' 
  | 'media' 
  | 'results' 
  | 'contact';

interface SectionColorContextType {
  getDarkColors: (sectionId: SectionId) => SectionColors;
  setDarkColors: (sectionId: SectionId, colors: SectionColors) => void;
  getLightColors: (sectionId: SectionId) => LightSectionColors;
  setLightColors: (sectionId: SectionId, colors: LightSectionColors) => void;
}

const SectionColorContext = createContext<SectionColorContextType | undefined>(undefined);

interface SectionColorProviderProps {
  children: ReactNode;
}

// Default color presets for different sections
const defaultDarkColors: Record<SectionId, SectionColors> = {
  hero: {
    gradientStart: "#0c1e2e", // navy-black
    gradientEnd: "#1e3a5f",   // navy-deep
    accentCircle1: "#2563eb", // blue-medium
    accentCircle2: "#3b82f6", // blue-light
    accentCircle1Opacity: 0.05,
    accentCircle2Opacity: 0.10
  },
  strategy: {
    gradientStart: "#1e40af", // blue-deep
    gradientEnd: "#2563eb",   // blue-medium
    accentCircle1: "#60a5fa", // blue-accent
    accentCircle2: "#3b82f6", // blue-light
    accentCircle1Opacity: 0.08,
    accentCircle2Opacity: 0.12
  },
  team: {
    gradientStart: "#1d4ed8", // blue-corporate
    gradientEnd: "#2563eb",   // blue-medium
    accentCircle1: "#60a5fa", // blue-accent
    accentCircle2: "#7dd3fc", // azure-light
    accentCircle1Opacity: 0.06,
    accentCircle2Opacity: 0.09
  },
  insights: {
    gradientStart: "#0ea5e9", // azure-accent
    gradientEnd: "#2563eb",   // blue-medium
    accentCircle1: "#7dd3fc", // azure-light
    accentCircle2: "#60a5fa", // blue-accent
    accentCircle1Opacity: 0.07,
    accentCircle2Opacity: 0.11
  },
  media: {
    gradientStart: "#1e3a5f", // navy-deep
    gradientEnd: "#1d4ed8",   // blue-corporate
    accentCircle1: "#3b82f6", // blue-light
    accentCircle2: "#60a5fa", // blue-accent
    accentCircle1Opacity: 0.05,
    accentCircle2Opacity: 0.08
  },
  results: {
    gradientStart: "#0c1e2e", // navy-black
    gradientEnd: "#1e40af",   // blue-deep
    accentCircle1: "#2563eb", // blue-medium
    accentCircle2: "#0ea5e9", // azure-accent
    accentCircle1Opacity: 0.06,
    accentCircle2Opacity: 0.10
  },
  contact: {
    gradientStart: "#1d4ed8", // blue-corporate
    gradientEnd: "#1e3a5f",   // navy-deep
    accentCircle1: "#7dd3fc", // azure-light
    accentCircle2: "#60a5fa", // blue-accent
    accentCircle1Opacity: 0.08,
    accentCircle2Opacity: 0.12
  }
};

const defaultLightColors: Record<SectionId, LightSectionColors> = {
  hero: {
    gradientStart: "#f0f9ff", // sky-warm
    gradientEnd: "#e0f2fe",   // sky-cool
    accentCircle1: "#bae6fd", // sky-medium
    accentCircle2: "#7dd3fc", // azure-light
    accentCircle1Opacity: 0.6,
    accentCircle2Opacity: 0.4,
    primaryAccent: "#1d4ed8", // blue-corporate
    borderColor: "#bae6fd"    // sky-medium
  },
  strategy: {
    gradientStart: "#f8fafc", // slate-50
    gradientEnd: "#f1f5f9",   // slate-100
    accentCircle1: "#cbd5e1", // slate-300
    accentCircle2: "#e2e8f0", // slate-200
    accentCircle1Opacity: 0.6,
    accentCircle2Opacity: 0.4,
    primaryAccent: "#2563eb", // blue-medium
    borderColor: "#e0f2fe"    // sky-cool
  },
  team: {
    gradientStart: "#f0f9ff", // sky-warm
    gradientEnd: "#f8fafc",   // slate-50
    accentCircle1: "#bae6fd", // sky-medium
    accentCircle2: "#cbd5e1", // slate-300
    accentCircle1Opacity: 0.5,
    accentCircle2Opacity: 0.3,
    primaryAccent: "#1d4ed8", // blue-corporate
    borderColor: "#bae6fd"    // sky-medium
  },
  insights: {
    gradientStart: "#e0f2fe", // sky-cool
    gradientEnd: "#f0f9ff",   // sky-warm
    accentCircle1: "#7dd3fc", // azure-light
    accentCircle2: "#bae6fd", // sky-medium
    accentCircle1Opacity: 0.4,
    accentCircle2Opacity: 0.6,
    primaryAccent: "#0ea5e9", // azure-accent
    borderColor: "#7dd3fc"    // azure-light
  },
  media: {
    gradientStart: "#f1f5f9", // slate-100
    gradientEnd: "#e0f2fe",   // sky-cool
    accentCircle1: "#e2e8f0", // slate-200
    accentCircle2: "#bae6fd", // sky-medium
    accentCircle1Opacity: 0.5,
    accentCircle2Opacity: 0.4,
    primaryAccent: "#1e40af", // blue-deep
    borderColor: "#e0f2fe"    // sky-cool
  },
  results: {
    gradientStart: "#f0f9ff", // sky-warm
    gradientEnd: "#f1f5f9",   // slate-100
    accentCircle1: "#bae6fd", // sky-medium
    accentCircle2: "#e2e8f0", // slate-200
    accentCircle1Opacity: 0.6,
    accentCircle2Opacity: 0.5,
    primaryAccent: "#2563eb", // blue-medium
    borderColor: "#bae6fd"    // sky-medium
  },
  contact: {
    gradientStart: "#e0f2fe", // sky-cool
    gradientEnd: "#f8fafc",   // slate-50
    accentCircle1: "#7dd3fc", // azure-light
    accentCircle2: "#cbd5e1", // slate-300
    accentCircle1Opacity: 0.4,
    accentCircle2Opacity: 0.5,
    primaryAccent: "#1d4ed8", // blue-corporate
    borderColor: "#7dd3fc"    // azure-light
  }
};

export function SectionColorProvider({ children }: SectionColorProviderProps) {
  const [darkColors, setDarkColorsState] = useState<Record<SectionId, SectionColors>>(defaultDarkColors);
  const [lightColors, setLightColorsState] = useState<Record<SectionId, LightSectionColors>>(defaultLightColors);

  const getDarkColors = (sectionId: SectionId) => darkColors[sectionId];
  
  const setDarkColors = (sectionId: SectionId, colors: SectionColors) => {
    setDarkColorsState(prev => ({
      ...prev,
      [sectionId]: colors
    }));
  };

  const getLightColors = (sectionId: SectionId) => lightColors[sectionId];
  
  const setLightColors = (sectionId: SectionId, colors: LightSectionColors) => {
    setLightColorsState(prev => ({
      ...prev,
      [sectionId]: colors
    }));
  };

  return (
    <SectionColorContext.Provider value={{ 
      getDarkColors, 
      setDarkColors, 
      getLightColors, 
      setLightColors 
    }}>
      {children}
    </SectionColorContext.Provider>
  );
}

export function useSectionColors(sectionId: SectionId, isDark: boolean = true) {
  const context = useContext(SectionColorContext);
  if (context === undefined) {
    throw new Error('useSectionColors must be used within a SectionColorProvider');
  }
  
  if (isDark) {
    return { 
      colors: context.getDarkColors(sectionId), 
      setColors: (colors: SectionColors) => context.setDarkColors(sectionId, colors) 
    };
  } else {
    return { 
      colors: context.getLightColors(sectionId), 
      setColors: (colors: LightSectionColors) => context.setLightColors(sectionId, colors) 
    };
  }
}

// Legacy hooks for backward compatibility
export function useDarkSectionColors() {
  const context = useContext(SectionColorContext);
  if (context === undefined) {
    throw new Error('useDarkSectionColors must be used within a SectionColorProvider');
  }
  // Default to 'team' section for backward compatibility
  return { 
    colors: context.getDarkColors('team'), 
    setColors: (colors: SectionColors) => context.setDarkColors('team', colors) 
  };
}

export function useLightSectionColors() {
  const context = useContext(SectionColorContext);
  if (context === undefined) {
    throw new Error('useLightSectionColors must be used within a SectionColorProvider');
  }
  // Default to 'team' section for backward compatibility
  return { 
    colors: context.getLightColors('team'), 
    setColors: (colors: LightSectionColors) => context.setLightColors('team', colors) 
  };
}