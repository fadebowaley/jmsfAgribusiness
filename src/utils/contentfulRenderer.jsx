import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

// Custom rendering options for Contentful rich text
export const contentfulRenderOptions = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong className="font-semibold">{text}</strong>,
    [MARKS.ITALIC]: (text) => <em className="italic">{text}</em>,
    [MARKS.UNDERLINE]: (text) => <u className="underline">{text}</u>,
    [MARKS.CODE]: (text) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{text}</code>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="mb-4 leading-relaxed text-gray-700">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-3xl font-bold mb-6 text-gray-800">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="text-xl font-bold mb-3 text-gray-800">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className="text-lg font-semibold mb-2 text-gray-800">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className="text-base font-semibold mb-2 text-gray-800">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className="text-sm font-semibold mb-2 text-gray-800">{children}</h6>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="text-gray-700">{children}</li>
    ),
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="border-l-4 border-green-500 pl-4 py-2 my-4 bg-gray-50 italic">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-8 border-gray-300" />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, description, file } = node.data.target.fields;
      const imageUrl = file?.url;
      
      if (!imageUrl) return null;
      
      return (
        <div className="my-6">
          <img
            src={imageUrl.startsWith('//') ? `https:${imageUrl}` : imageUrl}
            alt={description || title || 'Blog image'}
            className="w-full h-auto rounded-lg shadow-sm"
          />
          {description && (
            <p className="text-sm text-gray-600 mt-2 text-center italic">
              {description}
            </p>
          )}
        </div>
      );
    },
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        className="text-green-600 hover:text-green-800 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    [INLINES.ENTRY_HYPERLINK]: (node, children) => (
      <a
        href={`/blog/${node.data.target.fields.slug}`}
        className="text-green-600 hover:text-green-800 underline"
      >
        {children}
      </a>
    ),
  },
};

// Helper function to render rich text content
export const renderRichText = (content) => {
  if (!content) return null;
  
  // If content is a string (fallback), render as simple paragraphs
  if (typeof content === 'string') {
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mb-4 leading-relaxed text-gray-700">
        {paragraph}
      </p>
    ));
  }
  
  // If content is Contentful rich text, use the renderer
  return documentToReactComponents(content, contentfulRenderOptions);
};

// Format date utility
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Calculate reading time
export const calculateReadingTime = (content) => {
  if (!content) return '1 min read';
  
  let wordCount = 0;
  
  if (typeof content === 'string') {
    wordCount = content.split(/\s+/).length;
  } else {
    // For rich text, we'll estimate based on content structure
    wordCount = JSON.stringify(content).split(/\s+/).length / 2; // Rough estimation
  }
  
  const readingTime = Math.max(1, Math.ceil(wordCount / 200)); // Average reading speed
  return `${readingTime} min read`;
}; 