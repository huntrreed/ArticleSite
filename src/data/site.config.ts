interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'theexpertarchives.netlify.app/', // Write here your website url
	author: 'Expert Archives', // Site author
	title: 'The Expert Archives', // Site title.
	description:
		'A curated archive of articles about skiing, camping, hiking, and outdoor adventures.', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
