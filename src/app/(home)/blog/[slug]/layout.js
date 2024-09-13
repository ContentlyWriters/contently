
// app/blog/layout.js
export const metadata = {
    title: "Blog",
  };
  
  export default function BlogLayout({ children }) {
    return <>{children}</>; // No header or footer, just the blog content
  }

  