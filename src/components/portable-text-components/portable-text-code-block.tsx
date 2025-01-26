'use client'

import { Clipboard, ClipboardCheck } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { ClientOnly } from "@/components/client-only";
import CodeBlock from "@/components/code-block";
import Hint from "@/components/hint";

interface PortableTextCodeBlockProps {
  value: {
    _key: string
    code: string
    language: string
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
    <div className="group relative rounded-xl border bg-black/80 m-2">
      <ClientOnly>
        <>
          <div className="relative flex text-xs leading-6">
            {Boolean(value.language) && (
              <div className="flex items-center border-b px-4 py-1 font-medium border-b-fuchsia-500 text-fuchsia-500">
                {value.language}
              </div>
            )}
            <div className="absolute right-0 top-0 flex h-8 items-center pr-4">
              <Hint label="copy">
                <button
                  type="button"
                  onClick={onClickCopy}
                >
                  {hasCopied ? (
                    <ClipboardCheck className='h-4 w-4' />
                  ) : (
                    <Clipboard className='h-4 w-4' />
                  )}
                </button>
              </Hint>
            </div>
          </div>

          <CodeBlock
            code={value.code}
            language={value.language}
          />
        </>
      </ClientOnly>
    </div>
  )
}
