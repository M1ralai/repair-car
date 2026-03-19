import React, { useRef } from 'react';
import './FileUploader.css';

interface FileUploaderProps {
  label: string;
  files: File[];
  onFilesChange: (files: File[]) => void;
  accept?: string;
  maxFiles?: number;
  error?: string;
  required?: boolean;
}

export const FileUploader: React.FC<FileUploaderProps> = ({
  label,
  files,
  onFilesChange,
  accept = 'image/*,application/pdf',
  maxFiles = 5,
  error,
  required,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = React.useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const dropped = Array.from(e.dataTransfer.files);
    onFilesChange([...files, ...dropped].slice(0, maxFiles));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selected = Array.from(e.target.files);
    onFilesChange([...files, ...selected].slice(0, maxFiles));
  };

  const removeFile = (idx: number) => {
    onFilesChange(files.filter((_, i) => i !== idx));
  };

  return (
    <div className={`file-uploader-wrapper${error ? ' has-error' : ''}`}>
      <p className="file-uploader-label">
        {label}{required && <span className="file-uploader-required"> *</span>}
      </p>
      <div
        className={`file-drop-zone${dragging ? ' dragging' : ''}`}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        role="button"
        tabIndex={0}
        aria-label="Dosya yükle"
        onKeyDown={(e) => e.key === 'Enter' && inputRef.current?.click()}
      >
        <svg className="file-drop-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="17 8 12 3 7 8"/>
          <line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
        <p className="file-drop-text">Dosyaları sürükleyin veya <span>buraya tıklayın</span></p>
        <p className="file-drop-hint">PNG, JPG, PDF – Maks. {maxFiles} dosya</p>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept={accept}
          onChange={handleChange}
          className="file-input-hidden"
          aria-hidden="true"
        />
      </div>
      {files.length > 0 && (
        <ul className="file-list">
          {files.map((f, idx) => (
            <li key={idx} className="file-list-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              <span>{f.name}</span>
              <button type="button" onClick={() => removeFile(idx)} className="file-remove-btn" aria-label="Kaldır">×</button>
            </li>
          ))}
        </ul>
      )}
      {error && <p className="file-uploader-error">{error}</p>}
    </div>
  );
};
