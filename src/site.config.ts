// ============================================
// SITE CONFIGURATION
// Change these values to reuse this template for a new site/niche.
// ============================================
export const siteConfig = {
	// Basic identity
	name: "HeCookPulse",
	tagline: "Recipes worth cooking, tested and true",
	domain: "hecookpulse.com",
	emoji: "🍳",
	defaultDescription:
		"Tested, reliable recipes for main dishes, desserts, sides, and breakfast — cooking made simple.",

	// Pagination
	articlesPerPage: 12,

	// Article splitting: long articles are split into up to `maxParts` pages
	// with a "Next" button. Each page keeps at least `minWordsPerPart` words.
	articleSplit: {
		maxParts: 3,
		minWordsPerPart: 400,
	},

	// Ads (works with any network: AdSense, HB Agency, etc.)
	// headCode: the script your ad network asks you to put in <head>.
	// slots: the ad-unit code for each position. Leave "" to hide that position.
	ads: {
		headCode: "",
		slots: {
			top: "",      // under the title / image
			middle: "",   // in the middle of each page's text
			bottom: "",   // end of each page, kept well above the Next button
		},
	},

	// Footer
	footerText: "Built with Astro — synced from WordPress backup & Google Sheet",
};
