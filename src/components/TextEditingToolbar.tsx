import React from 'react';
import { Edit3, Save, RotateCcw, Type } from 'lucide-react';
import { useTextContent } from './TextContentProvider';
import { Button } from './ui/button';

export function TextEditingToolbar() {
  const { isEditing, setIsEditing, resetToDefaults } = useTextContent();

  const handleToggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all text content to defaults? This will erase all your custom edits and cannot be undone.')) {
      resetToDefaults();
    }
  };

  return (
    <div className="hidden fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-2 flex items-center gap-2">
      <Type className="w-5 h-5 text-gray-600" />
      
      <div className="h-6 w-px bg-gray-200" />
      
      <Button
        onClick={handleToggleEditing}
        variant={isEditing ? "default" : "outline"}
        size="sm"
        className="hidden flex items-center gap-2"
      >
        <Edit3 className="w-4 h-4" />
        {isEditing ? 'Exit Editing' : 'Edit Text'}
      </Button>
      
      {isEditing && (
        <>
          <Button
            onClick={handleReset}
            variant="outline"
            size="sm"
            className="flex items-center gap-2 text-red-600 hover:text-red-700"
          >
            <RotateCcw className="w-4 h-4" />
            Reset All
          </Button>
          
          <div className="text-sm text-gray-600 px-2">
            Click any text to edit • Enter to save • Escape to cancel
          </div>
        </>
      )}
    </div>
  );
}