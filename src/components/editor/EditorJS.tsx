import React, { useEffect, useRef } from 'react';
import EditorJS, { type OutputData } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Checklist from '@editorjs/checklist';
import Paragraph from '@editorjs/paragraph';
import ImageTool from '@editorjs/image';
import Embed from '@editorjs/embed';
import Attaches from '@editorjs/attaches';

export interface EditorProps {
  data?: OutputData;
  onChange?: (data: OutputData) => void;
  placeholder?: string;
}

export function Editor({ data, onChange, placeholder }: EditorProps) {
  const holderRef = useRef<HTMLDivElement | null>(null);
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!holderRef.current) return;

    const editor = new EditorJS({
      holder: holderRef.current,
      data,
      placeholder,
      autofocus: true,
      tools: {
        header: {
          class: Header,
          inlineToolbar: ['bold', 'italic'],
          config: { levels: [2,3,4], defaultLevel: 2 },
        },
        list: { class: List, inlineToolbar: true },
        checklist: Checklist,
        paragraph: { class: Paragraph, inlineToolbar: true },
        image: {
          class: ImageTool,
          config: {
            uploader: {
              uploadByFile: async (file: File) => {
                const base64 = await fileToBase64(file);
                return {
                  success: 1,
                  file: { url: base64 },
                };
              },
              uploadByUrl: async (url: string) => ({ success: 1, file: { url } }),
            },
          },
        },
        embed: {
          class: Embed,
          config: {
            services: {
              youtube: true,
              vimeo: true,
              facebook: false,
              instagram: false,
            },
          },
        },
        attaches: {
          class: Attaches,
          config: {
            uploader: {
              uploadByFile: async (file: File) => {
                const base64 = await fileToBase64(file);
                return {
                  success: 1,
                  file: {
                    url: base64,
                    title: file.name,
                    size: file.size,
                  },
                };
              },
            },
          },
        },
      },
      onChange: async () => {
        if (onChange) {
          const output = await editor.save();
          onChange(output);
        }
      },
    });

    editorRef.current = editor;
    return () => {
      editor.destroy();
      editorRef.current = null;
    };
  }, []);

  return <div className="editorjs w-full"><div ref={holderRef} /></div>;
}

export default Editor;

async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
