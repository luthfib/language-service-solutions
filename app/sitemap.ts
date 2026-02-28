import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://languageservicesolutions.com';
    
    // Static routes
    const routes = [
        '',
        '/services',
        '/ourteam',
        '/testimonials',
        '/contact',
    ];

    // Dynamic service routes
    const serviceSlugs = [
        'virtualInterpretation',
        'translation',
        'inpersoninterpretation',
        'transcriptions',
        'subtitling',
    ];

    const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [...staticRoutes, ...serviceRoutes];
}
