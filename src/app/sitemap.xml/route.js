// app/sitemap/route.js
export async function generateSitemap() {
  const baseUrl = "https://www.contentlywriters.com";
  
  const staticUrls = [
    { loc: "/", lastmod: "2024-11-26", priority: 1.0 },
    { loc: "/about", lastmod: "2024-11-26", priority: 0.7 },
    { loc: "/contact", lastmod: "2024-11-26", priority: 0.7 },
    { loc: "/login", lastmod: "2024-11-26", priority: 0.9 },
    { loc: "/sign-up", lastmod: "2024-11-26", priority: 0.9 },
    { loc: "/dashboard", lastmod: "2024-11-26", priority: 0.8 },
    { loc: "/privacy-policy", lastmod: "2024-11-26", priority: 0.6 },
    { loc: "/terms-and-conditions", lastmod: "2024-11-26", priority: 0.6 },
    { loc: "/refund-policy", lastmod: "2024-11-26", priority: 0.6 },
    { loc: "/revision-policy", lastmod: "2024-11-26", priority: 0.6 },
    { loc: "/plagiarism-policy", lastmod: "2024-11-26", priority: 0.6 },
  ];

  const dynamicUrls = [
    { loc: "/blog", lastmod: "2024-11-26", priority: 0.9 },
    { loc: "/service", lastmod: "2024-11-26", priority: 0.9 },
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
