// app/sitemap/route.js
export async function generateSitemap() {
  const baseUrl = "https://www.contentlywriters.com";
  
  const staticUrls = [
    { loc: "/", lastmod: "2024-11-26", priority: 1.0 },
    { loc: "/about", lastmod: "2024-11-26", priority: 0.7 },
    { loc: "/contact", lastmod: "2024-11-26", priority: 0.7 },
    { loc: "/privacy-policy", lastmod: "2024-11-26", priority: 0.6 },
    { loc: "/terms-and-conditions", lastmod: "2024-11-26", priority: 0.6 },
    { loc: "/refund-policy", lastmod: "2024-11-26", priority: 0.6 },
    { loc: "/revision-policy", lastmod: "2024-11-26", priority: 0.6 },
    { loc: "/plagiarism-policy", lastmod: "2024-11-26", priority: 0.6 },
    { loc: "/service/content-writing", lastmod: "2024-11-26", priority: 0.8 },
    { loc: "/service/seo", lastmod: "2024-11-26", priority: 0.8 },
  ];

  const dynamicUrls = [
    { loc: "/blog", lastmod: "2024-11-26", priority: 0.8 },
    { loc: "/blog/assignment-preparation-steps", lastmod: "2024-11-25", priority: 0.8 },
    { loc: "/blog/economic-impact-studies", lastmod: "2024-11-11", priority: 0.8 },
    { loc: "/blog/exploring-assignment-help", lastmod: "2024-09-26", priority: 0.8 },
    { loc: "/blog/it-corporation", lastmod: "2024-09-19", priority: 0.8 },
    { loc: "/blog/the-future-of-marketing", lastmod: "2024-09-16", priority: 0.8 },
    { loc: "/blog/embracing-tomorrow's-innovations", lastmod: "2024-09-09", priority: 0.8 },
    { loc: "/blog/the-union-budget-for-2024-25", lastmod: "2024-07-22", priority: 0.8 },
    { loc: "/blog/a-beginner's-guide-to-writing-essays-in-proper-format", lastmod: "2024-07-15", priority: 0.8 },
    { loc: "/blog/decoding-academic-success", lastmod: "2024-07-01", priority: 0.8 },
    { loc: "/blog/unleashing-the-power-of-roi", lastmod: "2024-06-24", priority: 0.8 },
    { loc: "/service", lastmod: "2024-11-26", priority: 0.8 },
    { loc: "/service/do-my-assignment", lastmod: "2024-11-26", priority: 0.8 }, 
    { loc: "/service/personal-statement", lastmod: "2024-11-26", priority: 0.8 }, 
    { loc: "/service/buy-a-research-paper", lastmod: "2024-11-26", priority: 0.8 }, 
    { loc: "/service/coursework-writing", lastmod: "2024-11-26", priority: 0.8 }, 
    { loc: "/service/dissertation", lastmod: "2024-11-26", priority: 0.8 }, 
    { loc: "/service/essay-service", lastmod: "2024-11-26", priority: 0.8 }, 
    { loc: "/service/homework", lastmod: "2024-11-26", priority: 0.8 }, 
    { loc: "/service/assignment-in-uk/oxford", lastmod: "2024-11-26", priority: 0.8 }, 
    { loc: "/service/assignment-in-uk/london", lastmod: "2024-11-26", priority: 0.8 }, 
    { loc: "/service/assignment-in-usa/california", lastmod: "2024-11-26", priority: 0.8 }, 
    { loc: "/service/other-subjects-and-services", lastmod: "2024-11-26", priority: 0.8 }, 
    { loc: "/subject/management", lastmod: "2024-11-26", priority: 0.8 }, 
    { loc: "/subject/accounting", lastmod: "2024-11-26", priority: 0.8 }, 
    { loc: "/subject/engineering-studies", lastmod: "2024-11-26", priority: 0.8 }, 
    { loc: "/subject/information-technology", lastmod: "2024-11-26", priority: 0.8 }, 
    { loc: "/subject/law", lastmod: "2024-11-26", priority: 0.8 }, 
    { loc: "/subject/statistics", lastmod: "2024-11-26", priority: 0.8 }, 
  ];

  const urls = [...staticUrls, ...dynamicUrls];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      ({ loc, lastmod, priority }) => `
    <url>
      <loc>${baseUrl}${loc}</loc>
      <lastmod>${lastmod}</lastmod>
      <priority>${priority}</priority>
    </url>
  `
    )
    .join("")}
</urlset>`;
}

export async function GET() {
  const sitemap = await generateSitemap();

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
