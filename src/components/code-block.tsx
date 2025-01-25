import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock = ({ code, language }: CodeBlockProps) => {
  return (
    <div className="py-2 overflow-x-auto">
      <SyntaxHighlighter
        language={language.toLocaleLowerCase()}
        style={oneDark}
        showLineNumbers
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
