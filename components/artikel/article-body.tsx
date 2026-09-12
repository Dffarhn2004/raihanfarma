import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ArticleBodyProps = {
  content: string;
};

export function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <div className="article-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => (
            <a href={href} rel={href?.startsWith("http") ? "noopener noreferrer" : undefined} target={href?.startsWith("http") ? "_blank" : undefined}>
              {children}
            </a>
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
