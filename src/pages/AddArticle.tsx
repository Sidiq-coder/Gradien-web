import { useState, useCallback } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Editor } from '../components/editor/EditorJS';
import type { OutputData } from '@editorjs/editorjs';
import { ArrowLeft, Upload } from 'lucide-react';

type AddArticlePageProps = {
  onBack: () => void;
  onSave: (article: {
    title: string;
    category: string;
    status: 'published' | 'draft' | 'review';
    thumbnail?: string;
    content: OutputData;
  }) => void;
};

export function AddArticlePage({ onBack, onSave }: AddArticlePageProps) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Frontend');
  const [status, setStatus] = useState<'published' | 'draft' | 'review'>('draft');
  const [thumbnail, setThumbnail] = useState<string | undefined>(undefined);
  const [content, setContent] = useState<OutputData>({ time: Date.now(), blocks: [], version: '2.29.0' });

  const handleThumbnailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setThumbnail(String(reader.result));
    reader.readAsDataURL(file);
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSave({ title: title.trim(), category, status, thumbnail, content });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <CardTitle>Detail Artikel</CardTitle>
                <CardDescription>Lengkapi informasi artikel sebelum publikasi</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" onClick={onBack}>
                  <ArrowLeft className="w-4 h-4 mr-2" /> Kembali
                </Button>
                <Button onClick={handleSave} className="bg-[#0d7377] hover:bg-[#0a5d61] text-white">Simpan</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Judul</label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Masukkan judul artikel" required />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Kategori</label>
                <Select value={category} onValueChange={(v: string) => setCategory(v)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Frontend">Frontend</SelectItem>
                    <SelectItem value="Backend">Backend</SelectItem>
                    <SelectItem value="Data Science">Data Science</SelectItem>
                    <SelectItem value="Career Development">Career Development</SelectItem>
                    <SelectItem value="Design">Design</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <Select value={status} onValueChange={(v: 'published' | 'draft' | 'review') => setStatus(v)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="review">Review</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Thumbnail</label>
                <div className="flex items-center gap-3">
                  <label className="inline-flex items-center gap-2 px-3 py-2 rounded border cursor-pointer hover:bg-gray-50">
                    <Upload className="w-4 h-4" /> Pilih Gambar
                    <input type="file" accept="image/*" className="hidden" onChange={handleThumbnailChange} />
                  </label>
                  {thumbnail && (
                    <img src={thumbnail} alt="Thumbnail" className="w-16 h-16 object-cover rounded" />
                  )}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Konten</label>
              <div className="editor-container border rounded-lg py-3 px-0">
                <Editor data={content} onChange={setContent} placeholder="Tulis konten artikel di sini..." />
              </div>
              <p className="text-xs text-gray-500 mt-2">Gunakan toolbar untuk menambahkan heading, list, checklist, gambar, embed video, dan lampiran file.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AddArticlePage;
