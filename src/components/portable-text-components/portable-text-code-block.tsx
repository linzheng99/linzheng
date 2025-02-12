'use client'

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import CodeBlock from "@/components/code-block";
import Hint from "@/components/hint";

interface PortableTextCodeBlockProps {
  value: {
    _key: string
    code: string
    language: string
    label: string
  }
}

export default function PortableTextCodeBlock({ value }: PortableTextCodeBlockProps) {
  const [hasCopied, setHasCopied] = useState(false)

  async function onClickCopy() {
    await navigator.clipboard.writeText(value.code)
    setHasCopied(true)
    toast.success('Copied to clipboard')
    setTimeout(() => {
      setHasCopied(false)
    }, 3000)
  }

  return (
    <div className="group relative rounded-lg border bg-black/80 m-3 shadow-lg">
      <div className="flex w-full relative">
        {Boolean(value.language) && (
          <div className="flex items-center border-b px-4 py-1 font-medium text-sm border-b-fuchsia-500 text-fuchsia-500 text-nowrap">
            {value.label || value.language}
          </div>
        )}
        <div className="flex items-center justify-end pr-4 px-4 py-2 border-b border-b-gray-700 w-full">
          <Hint label="Copy">
            <button
              type="button"
              onClick={onClickCopy}
              className="hover:scale-110 transition"
            >
              {hasCopied ? (
                <Check className='h-4 w-4' />
              ) : (
                <Copy className='h-4 w-4' />
              )}
            </button>
          </Hint>
        </div>
      </div>

      <CodeBlock
        code={value.code}
        language={value.language}
      />
    </div>
  )
}
