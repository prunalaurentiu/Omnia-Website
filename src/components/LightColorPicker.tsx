import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { LightSectionColors, SectionId } from './SectionColorProvider';

interface LightColorPickerProps {
  sectionId: SectionId;
  sectionName: string;
  onClose: () => void;
  onColorsChange: (colors: LightSectionColors) => void;
  initialColors: LightSectionColors;
}

export function LightColorPicker({ sectionId, sectionName, onClose, onColorsChange, initialColors }: LightColorPickerProps) {
  const [colors, setColors] = useState<LightSectionColors>(initialColors);

  const handleColorChange = (key: keyof LightSectionColors, value: string | number) => {
    const newColors = { ...colors, [key]: value };
    setColors(newColors);
    onColorsChange(newColors);
  };

  // Update internal state when initialColors change
  useEffect(() => {
    setColors(initialColors);
  }, [initialColors]);

  // Section-specific preset palettes for light themes
  const getPresetPalettes = (sectionId: SectionId) => {
    const basePalettes = [
      {
        name: "Sky Blue",
        colors: {
          gradientStart: "#f0f9ff",
          gradientEnd: "#e0f2fe",
          accentCircle1: "#bae6fd",
          accentCircle2: "#7dd3fc",
          accentCircle1Opacity: 0.6,
          accentCircle2Opacity: 0.4,
          primaryAccent: "#1d4ed8",
          borderColor: "#bae6fd"
        }
      },
      {
        name: "Clean Slate",
        colors: {
          gradientStart: "#f8fafc",
          gradientEnd: "#f1f5f9",
          accentCircle1: "#cbd5e1",
          accentCircle2: "#e2e8f0",
          accentCircle1Opacity: 0.6,
          accentCircle2Opacity: 0.4,
          primaryAccent: "#2563eb",
          borderColor: "#e0f2fe"
        }
      },
      {
        name: "Soft Azure",
        colors: {
          gradientStart: "#e0f2fe",
          gradientEnd: "#f0f9ff",
          accentCircle1: "#7dd3fc",
          accentCircle2: "#bae6fd",
          accentCircle1Opacity: 0.4,
          accentCircle2Opacity: 0.6,
          primaryAccent: "#0ea5e9",
          borderColor: "#7dd3fc"
        }
      },
      {
        name: "Corporate Blue",
        colors: {
          gradientStart: "#f0f9ff",
          gradientEnd: "#f8fafc",
          accentCircle1: "#bae6fd",
          accentCircle2: "#cbd5e1",
          accentCircle1Opacity: 0.5,
          accentCircle2Opacity: 0.3,
          primaryAccent: "#1d4ed8",
          borderColor: "#bae6fd"
        }
      }
    ];

    // Add section-specific alternatives
    if (sectionId === 'hero') {
      basePalettes.push({
        name: "Hero Gradient",
        colors: {
          gradientStart: "#fef3c7",
          gradientEnd: "#f0f9ff",
          accentCircle1: "#fed7aa",
          accentCircle2: "#bae6fd",
          accentCircle1Opacity: 0.4,
          accentCircle2Opacity: 0.5,
          primaryAccent: "#f59e0b",
          borderColor: "#fed7aa"
        }
      });
    } else if (sectionId === 'results') {
      basePalettes.push({
        name: "Success Light",
        colors: {
          gradientStart: "#f0fdf4",
          gradientEnd: "#dcfce7",
          accentCircle1: "#bbf7d0",
          accentCircle2: "#a7f3d0",
          accentCircle1Opacity: 0.5,
          accentCircle2Opacity: 0.4,
          primaryAccent: "#059669",
          borderColor: "#bbf7d0"
        }
      });
    }

    return basePalettes;
  };

  const presetPalettes = getPresetPalettes(sectionId);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold text-slate-900">Edit {sectionName} Section Colors</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-4 space-y-6">
          {/* Preview */}
          <div className="space-y-3">
            <h4 className="font-medium text-slate-900">Preview</h4>
            <div 
              className="h-24 rounded-lg relative overflow-hidden border"
              style={{
                background: `linear-gradient(to bottom, ${colors.gradientStart}, ${colors.gradientEnd})`
              }}
            >
              <div 
                className="absolute top-2 right-2 w-8 h-8 rounded-full blur-sm"
                style={{
                  backgroundColor: colors.accentCircle1,
                  opacity: colors.accentCircle1Opacity
                }}
              />
              <div 
                className="absolute bottom-2 left-2 w-12 h-12 rounded-full blur-sm"
                style={{
                  backgroundColor: colors.accentCircle2,
                  opacity: colors.accentCircle2Opacity
                }}
              />
              <div 
                className="absolute inset-x-0 bottom-2 text-center text-sm font-medium"
                style={{ color: colors.primaryAccent }}
              >
                Sample Text
              </div>
            </div>
          </div>

          {/* Background Gradient */}
          <div className="space-y-3">
            <h4 className="font-medium text-slate-900">Background Gradient</h4>
            <div className="space-y-2">
              <div>
                <label className="block text-sm text-slate-600 mb-1">Gradient Start</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={colors.gradientStart}
                    onChange={(e) => handleColorChange('gradientStart', e.target.value)}
                    className="w-8 h-8 rounded border"
                  />
                  <input
                    type="text"
                    value={colors.gradientStart}
                    onChange={(e) => handleColorChange('gradientStart', e.target.value)}
                    className="flex-1 px-2 py-1 border rounded text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Gradient End</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={colors.gradientEnd}
                    onChange={(e) => handleColorChange('gradientEnd', e.target.value)}
                    className="w-8 h-8 rounded border"
                  />
                  <input
                    type="text"
                    value={colors.gradientEnd}
                    onChange={(e) => handleColorChange('gradientEnd', e.target.value)}
                    className="flex-1 px-2 py-1 border rounded text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Accent Elements */}
          <div className="space-y-3">
            <h4 className="font-medium text-slate-900">Accent Elements</h4>
            <div className="space-y-2">
              <div>
                <label className="block text-sm text-slate-600 mb-1">Primary Accent</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={colors.primaryAccent}
                    onChange={(e) => handleColorChange('primaryAccent', e.target.value)}
                    className="w-8 h-8 rounded border"
                  />
                  <input
                    type="text"
                    value={colors.primaryAccent}
                    onChange={(e) => handleColorChange('primaryAccent', e.target.value)}
                    className="flex-1 px-2 py-1 border rounded text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Border Color</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={colors.borderColor}
                    onChange={(e) => handleColorChange('borderColor', e.target.value)}
                    className="w-8 h-8 rounded border"
                  />
                  <input
                    type="text"
                    value={colors.borderColor}
                    onChange={(e) => handleColorChange('borderColor', e.target.value)}
                    className="flex-1 px-2 py-1 border rounded text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Circles */}
          <div className="space-y-3">
            <h4 className="font-medium text-slate-900">Decorative Circles</h4>
            <div className="space-y-2">
              <div>
                <label className="block text-sm text-slate-600 mb-1">Circle 1 Color</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={colors.accentCircle1}
                    onChange={(e) => handleColorChange('accentCircle1', e.target.value)}
                    className="w-8 h-8 rounded border"
                  />
                  <input
                    type="text"
                    value={colors.accentCircle1}
                    onChange={(e) => handleColorChange('accentCircle1', e.target.value)}
                    className="flex-1 px-2 py-1 border rounded text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Circle 1 Opacity: {Math.round(colors.accentCircle1Opacity * 100)}%</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={colors.accentCircle1Opacity}
                  onChange={(e) => handleColorChange('accentCircle1Opacity', parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Circle 2 Color</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={colors.accentCircle2}
                    onChange={(e) => handleColorChange('accentCircle2', e.target.value)}
                    className="w-8 h-8 rounded border"
                  />
                  <input
                    type="text"
                    value={colors.accentCircle2}
                    onChange={(e) => handleColorChange('accentCircle2', e.target.value)}
                    className="flex-1 px-2 py-1 border rounded text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-1">Circle 2 Opacity: {Math.round(colors.accentCircle2Opacity * 100)}%</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={colors.accentCircle2Opacity}
                  onChange={(e) => handleColorChange('accentCircle2Opacity', parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Preset Palettes */}
          <div className="space-y-3">
            <h4 className="font-medium text-slate-900">Preset Palettes</h4>
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
                        opacity: palette.colors.accentCircle1Opacity
                      }}
                    ></div>
                  </div>
                  <span className="text-sm text-slate-700">{palette.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4 border-t">
            <button
              onClick={onClose}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}