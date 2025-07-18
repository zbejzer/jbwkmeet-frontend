// @ts-check
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
    site: 'https://meet.jbwk.pl',
    redirects: {
        '/meet-2025-regulamin':
            'https://drive.google.com/file/d/115KcC0Arak7DDlc1L4JtB5jiWkjw0W5x/view',
        '/meet-2025-zgoda-rodzica':
            'https://drive.google.com/file/d/1RmVEsZ90yjWfZVSmk64S_4W6CiFDfWQc/view',
        '/meet-2025-rejestracja':
            'https://docs.google.com/forms/d/e/1FAIpQLSd2968UPuHfbYiEdGpKMndIxNjF5kFr_E8OLsrs5ZBR6KYOuQ/viewform',
    },
    integrations: [sitemap()],
    vite: {
        plugins: [tailwindcss()],
    },
})
