'use client';

import { useState } from 'react';
import { UploadCloud, CheckCircle, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FileUploadProps {
    label: string;
    accept: string;
    onChange: (url: string) => void;
    value?: string;
}

export function FileUpload({ label, accept, onChange, value }: FileUploadProps) {
    const [uploading, setUploading] = useState(false);
    const [fileName, setFileName] = useState('');

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setFileName(file.name);
        setUploading(true);

        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (!res.ok) throw new Error('Upload failed');

            const data = await res.json();
            onChange(data.secure_url); // Pass the URL back to parent
        } catch (error) {
            console.error(error);
            alert('Upload failed');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors relative">
                <input
                    type="file"
                    accept={accept}
                    onChange={handleUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    disabled={uploading}
                />

                <div className="flex flex-col items-center justify-center gap-2">
                    {uploading ? (
                        <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                    ) : value ? (
                        <CheckCircle className="w-8 h-8 text-green-500" />
                    ) : (
                        <UploadCloud className="w-8 h-8 text-gray-400" />
                    )}

                    <div className="text-sm text-gray-600">
                        {uploading ? 'Uploading...' : value ? 'File Uploaded' : 'Click to Upload'}
                    </div>
                </div>
            </div>
            {value && (
                <div className="text-xs text-green-600 flex items-center justify-between bg-green-50 p-2 rounded">
                    <span className="truncate max-w-[200px]">{fileName || 'File'}</span>
                    <button type="button" onClick={() => onChange('')} className="text-red-500 hover:text-red-700">
                        <X className="w-4 h-4" />
                    </button>
                </div>
            )}
        </div>
    );
}
