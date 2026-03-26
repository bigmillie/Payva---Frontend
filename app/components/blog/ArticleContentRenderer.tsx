interface ArticleContentRendererProps {
  html: string;
}

const ArticleContentRenderer = ({ html }: ArticleContentRendererProps) => {
  return (
    <div
      className="zoho-article-content text-slate-700"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default ArticleContentRenderer;
