import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock = ({ code, language }: CodeBlockProps) => {
  return (
    <div className={cn(
      'py-2 overflow-x-auto',
      language === 'bash' && 'px-4'
    )}>
      <SyntaxHighlighter
        language={language.toLocaleLowerCase()}
        style={oneDark}
        showLineNumbers={language === 'bash' ? false : true}
        useInlineStyles={false}
        codeTagProps={{
          style: {
            fontSize: "14px",
            fontFamily: "monospace",
          },
          className: `language-${language.toLocaleLowerCase()}`,
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
