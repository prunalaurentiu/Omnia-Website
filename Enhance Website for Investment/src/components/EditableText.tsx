import React, { useState, useRef, useEffect } from 'react';
import { Edit3, Check, X } from 'lucide-react';
import { useTextContent } from './TextContentProvider';

interface EditableTextProps {
  path: string;
  value: string;
  className?: string;
  style?: React.CSSProperties;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div' | 'label';
  placeholder?: string;
  multiline?: boolean;
}

export function EditableText({ 
  path, 
  value, 
  className = '', 
  style,
  as: Component = 'span',
  placeholder = 'Enter text...',
  multiline = false
}: EditableTextProps) {
  const { updateTextContent, isEditing: globalEditing } = useTextContent();
  const [isEditingThis, setIsEditingThis] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    setEditValue(value);
  }, [value]);

  useEffect(() => {
    if (isEditingThis && inputRef.current) {
      inputRef.current.focus();
      if (inputRef.current instanceof HTMLInputElement) {
        inputRef.current.select();
      } else if (inputRef.current instanceof HTMLTextAreaElement) {
        inputRef.current.select();
      }
    }
  }, [isEditingThis]);

  const handleStartEdit = () => {
    if (globalEditing) {
      setIsEditingThis(true);
      setEditValue(value);
    }
  };

  const handleSave = () => {
    updateTextContent(path, editValue);
    setIsEditingThis(false);
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditingThis(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Enter' && multiline && e.ctrlKey) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (isEditingThis) {
    const inputClassName = `${className} border-2 border-blue-500 rounded px-2 py-1 bg-white min-w-0 flex-1`;
    
    return (
      <div className="relative inline-flex items-center gap-2 w-full">
        {multiline ? (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`${inputClassName} min-h-[80px] resize-vertical`}
            style={style}
            placeholder={placeholder}
          />
        ) : (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className={inputClassName}
            style={style}
            placeholder={placeholder}
          />
        )}
        <div className="flex gap-1">
          <button
            onClick={handleSave}
            className="p-1 text-green-600 hover:bg-green-100 rounded"
            title="Save (Enter)"
          >
            <Check className="w-4 h-4" />
          </button>
          <button
            onClick={handleCancel}
            className="p-1 text-red-600 hover:bg-red-100 rounded"
            title="Cancel (Escape)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <Component
      className={`${className} ${globalEditing ? 'cursor-pointer hover:bg-blue-50 hover:outline hover:outline-2 hover:outline-blue-300 rounded transition-all' : ''} relative group`}
      style={style}
      onClick={handleStartEdit}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {value || placeholder}
      {globalEditing && isHovered && (
        <Edit3 className="w-4 h-4 absolute -top-2 -right-2 text-blue-500 bg-white rounded border shadow-sm" />
      )}
    </Component>
  );
}

// Specialized components for common use cases
export function EditableHeading({ path, value, level = 1, className = '', style }: {
  path: string;
  value: string;
  level?: 1 | 2 | 3 | 4;
  className?: string;
  style?: React.CSSProperties;
}) {
  const Component = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4';
  return (
    <EditableText
      path={path}
      value={value}
      as={Component}
      className={className}
      style={style}
      placeholder={`Enter heading...`}
    />
  );
}

export function EditableParagraph({ path, value, className = '', style }: {
  path: string;
  value: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <EditableText
      path={path}
      value={value}
      as="p"
      className={className}
      style={style}
      placeholder="Enter paragraph text..."
      multiline
    />
  );
}

export function EditableButton({ path, value, className = '', style, onClick }: {
  path: string;
  value: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) {
  const { updateTextContent, isEditing: globalEditing } = useTextContent();
  const [isEditingThis, setIsEditingThis] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setEditValue(value);
  }, [value]);

  useEffect(() => {
    if (isEditingThis && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditingThis]);

  const handleStartEdit = (e: React.MouseEvent) => {
    if (globalEditing) {
      e.preventDefault();
      e.stopPropagation();
      setIsEditingThis(true);
      setEditValue(value);
    }
  };

  const handleSave = () => {
    updateTextContent(path, editValue);
    setIsEditingThis(false);
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditingThis(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (isEditingThis) {
    return (
      <div className="inline-flex items-center gap-2">
        <input
          ref={inputRef}
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border-2 border-blue-500 rounded px-2 py-1 bg-white min-w-0 flex-1"
          style={style}
          placeholder="Button text..."
        />
        <div className="flex gap-1">
          <button
            onClick={handleSave}
            className="p-1 text-green-600 hover:bg-green-100 rounded"
            title="Save (Enter)"
          >
            <Check className="w-4 h-4" />
          </button>
          <button
            onClick={handleCancel}
            className="p-1 text-red-600 hover:bg-red-100 rounded"
            title="Cancel (Escape)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      className={`${className} ${globalEditing ? 'relative group' : ''}`}
      style={style}
      onClick={globalEditing ? handleStartEdit : onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {value || 'Button text...'}
      {globalEditing && isHovered && (
        <Edit3 className="w-4 h-4 absolute -top-2 -right-2 text-blue-500 bg-white rounded border shadow-sm" />
      )}
    </button>
  );
}