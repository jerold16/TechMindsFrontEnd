import React from 'react'

const SiteMap = () => {
    const headers = {
        'Content-Type': 'application/xml',
      };
    const site=`
    <?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


<url>
  <loc>https://meridatechminds.com/</loc>
  <lastmod>2024-01-30T17:13:50+00:00</lastmod>
</url>


</urlset>`
  return (
    <div>
         <pre> {site}</pre>
    </div>
  )
}

export default SiteMap