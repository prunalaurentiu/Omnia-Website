import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { SectionColors, SectionId } from './SectionColorProvider';

export interface TeamSectionColors extends SectionColors {}

interface ColorPickerProps {
  sectionId: SectionId;
  sectionName: string;
  onClose: () => void;
  onColorsChange: (colors: SectionColors) => void;
  initialColors: SectionColors;
}

export function ColorPicker({ sectionId, sectionName, onClose, onColorsChange, initialColors }: ColorPickerProps) {
  const [colors, setColors] = useState<SectionColors>(initialColors);

  const handleColorChange = (key: keyof SectionColors, value: string | number) => {
    const newColors = { ...colors, [key]: value };
    setColors(newColors);
    onColorsChange(newColors);
  };

  // Section-specific preset palettes
  const getPresetPalettes = (sectionId: SectionId) => {
    const basePalettes = [
      {
        name: "Professional Blue",
        colors: {
          gradientStart: "#1e40af",
          gradientEnd: "#2563eb",
          accentCircle1: "#3b82f6",
          accentCircle2: "#60a5fa",
          accentCircle1Opacity: 0.05,
          accentCircle2Opacity: 0.10
        }
      },
      {
        name: "Navy Corporate",
        colors: {
          gradientStart: "#0c1e2e",
          gradientEnd: "#1e3a5f",
          accentCircle1: "#2563eb",
          accentCircle2: "#3b82f6",
          accentCircle1Opacity: 0.06,
          accentCircle2Opacity: 0.09
        }
      },
      {
        name: "Azure Sky",
        colors: {
          gradientStart: "#0ea5e9",
          gradientEnd: "#2563eb",
          accentCircle1: "#7dd3fc",
          accentCircle2: "#60a5fa",
          accentCircle1Opacity: 0.07,
          accentCircle2Opacity: 0.11
        }
      },
      {
        name: "Deep Ocean",
        colors: {
          gradientStart: "#1d4ed8",
          gradientEnd: "#1e3a5f",
          accentCircle1: "#3b82f6",
          accentCircle2: "#7dd3fc",
          accentCircle1Opacity: 0.08,
          accentCircle2Opacity: 0.12
        }
      }
    ];

    // Add section-specific alternatives
    if (sectionId === 'team') {
      basePalettes.push({
        name: "Team Green",
        colors: {
          gradientStart: "#065f46",
          gradientEnd: "#047857",
          accentCircle1: "#059669",
          accentCircle2: "#34d399",
          accentCircle1Opacity: 0.05,
          accentCircle2Opacity: 0.10
        }
      });
    } else if (sectionId === 'results') {
      basePalettes.push({
        name: "Success Green",
        colors: {
          gradientStart: "#064e3b",
          gradientEnd: "#065f46",
          accentCircle1: "#059669",
          accentCircle2: "#10b981",
          accentCircle1Opacity: 0.06,
          accentCircle2Opacity: 0.10
        }
      });
    } else if (sectionId === 'hero') {
      basePalettes.push({
        name: "Hero Purple",
        colors: {
          gradientStart: "#581c87",
          gradientEnd: "#6b21a8",
          accentCircle1: "#8b5cf6",
          accentCircle2: "#a78bfa",
          accentCircle1Opacity: 0.05,
          accentCircle2Opacity: 0.10
        }
      });
    }

    return basePalettes;
  };

  const presetPalettes = getPresetPalettes(sectionId);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-card-title text-slate-900">Edit {sectionName} Section Colors</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Preview */}
          <div className="mb-6">
            <h4 className="text-body font-medium text-slate-900 mb-3">Preview</h4>
            <div 
              className="h-24 rounded-lg relative overflow-hidden"
              style={{
                background: `linear-gradient(to bottom, ${colors.gradientStart}, ${colors.gradientEnd})`
              }}
            >
              <div 
                className="absolute top-0 right-0 w-16 h-16 rounded-full transform translate-x-8 -translate-y-8"
                style={{
                  backgroundColor: colors.accentCircle1,
                  opacity: colors.accentCircle1Opacity
                }}
              ></div>
              <div 
                className="absolute bottom-0 left-0 w-12 h-12 rounded-full transform -translate-x-4 translate-y-4"
                style={{
                  backgroundColor: colors.accentCircle2,
                  opacity: colors.accentCircle2Opacity
                }}
              ></div>
            </div>
          </div>

          {/* Color Controls */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-caption font-medium text-slate-700 mb-2">
                Gradient Start Color
              </label>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={colors.gradientStart}
                  onChange={(e) => handleColorChange('gradientStart', e.target.value)}
                  className="w-12 h-8 rounded border"
                />
                <input
                  type="text"
                  value={colors.gradientStart}
                  onChange={(e) => handleColorChange('gradientStart', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-caption font-medium text-slate-700 mb-2">
                Gradient End Color
              </label>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={colors.gradientEnd}
                  onChange={(e) => handleColorChange('gradientEnd', e.target.value)}
                  className="w-12 h-8 rounded border"
                />
                <input
                  type="text"
                  value={colors.gradientEnd}
                  onChange={(e) => handleColorChange('gradientEnd', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-caption font-medium text-slate-700 mb-2">
                Accent Circle 1 Color
              </label>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={colors.accentCircle1}
                  onChange={(e) => handleColorChange('accentCircle1', e.target.value)}
                  className="w-12 h-8 rounded border"
                />
                <input
                  type="text"
                  value={colors.accentCircle1}
                  onChange={(e) => handleColorChange('accentCircle1', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="mt-2">
                <label className="block text-caption font-medium text-slate-600 mb-1">
                  Opacity: {Math.round(colors.accentCircle1Opacity * 100)}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={colors.accentCircle1Opacity}
                  onChange={(e) => handleColorChange('accentCircle1Opacity', parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <label className="block text-caption font-medium text-slate-700 mb-2">
                Accent Circle 2 Color
              </label>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={colors.accentCircle2}
                  onChange={(e) => handleColorChange('accentCircle2', e.target.value)}
                  className="w-12 h-8 rounded border"
                />
                <input
                  type="text"
                  value={colors.accentCircle2}
                  onChange={(e) => handleColorChange('accentCircle2', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="mt-2">
                <label className="block text-caption font-medium text-slate-600 mb-1">
                  Opacity: {Math.round(colors.accentCircle2Opacity * 100)}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={colors.accentCircle2Opacity}
                  onChange={(e) => handleColorChange('accentCircle2Opacity', parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Preset Palettes */}
          <div className="mb-6">
            <h4 className="text-body font-medium text-slate-900 mb-3">Preset Palettes</h4>
            <div className="grid grid-cols-2 gap-2">
              {presetPalettes.map((palette, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setColors(palette.colors);
                    onColorsChange(palette.colors);
                  }}
                  className="p-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors text-left"
                >
                  <div 
                    className="h-8 rounded mb-2 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(to right, ${palette.colors.gradientStart}, ${palette.colors.gradientEnd})`
                    }}
                  >
                    <div 
                      className="absolute top-0 right-0 w-4 h-4 rounded-full"
                      style={{
                        backgroundColor: palette.colors.accentCircle1,
                        opacity: palette.colors.accentCircle1Opacity * 3
                      }}
                    ></div>
                  </div>
                  <span className="text-caption text-slate-700">{palette.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}