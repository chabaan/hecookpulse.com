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
		headCode: '<script src="https://d3u598arehftfk.cloudfront.net/prebid_hb_37888_42726.js" async></script>',
		// Paste each HB Agency placement code here. Leave "" to hide that position.
		slots: {
			top: "",          // under the title (first thing readers see)
			outstream: "",    // video ad after the 2nd paragraph
			inarticle1: "",   // inside the text, about 1/3 of the page
			interscroller: "",// full-screen scroll ad, about 2/3 of the page
			inarticle2: "",   // end of the text, kept well above the Next button
			sticky: "",       // sticky floor / side ads, on every page of the site
		},
	},

	// Footer
	footerText: "Built with Astro — synced from WordPress backup & Google Sheet",
};
