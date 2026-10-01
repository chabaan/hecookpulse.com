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

	// The cook shown as author on every article
	author: {
		name: "Nora Hale",
		avatar: "/images/nora-hale-avatar.webp",
		url: "/about-hecookpulse/",
	},

	// Category fixes: articles that came in without a proper category
	defaultCategory: "Main Dishes",
	categoryOverrides: {
		"crockpot-pulled-bbq-chicken-that-wont-drown-in-sauce": "Main Dishes",
		"spaghetti-aglio-e-olio-the-ratio-that-makes-it-perfect": "Main Dishes",
		"spring-pea-feta-salad-bright-herby-easy": "Sides & Appetizers",
	},

	// Pagination
	articlesPerPage: 12,

	// Article splitting: long articles are split into up to `maxParts` pages
	// with a "Next" button. Each page keeps at least `minWordsPerPart` words.
	articleSplit: {
		maxParts: 3,
		minWordsPerPart: 300,
	},

	// Ads (works with any network: AdSense, HB Agency, etc.)
	// headCode: the script your ad network asks you to put in <head>.
	// slots: the ad-unit code for each position. Leave "" to hide that position.
	ads: {
		headCode: '<script src="https://d3u598arehftfk.cloudfront.net/prebid_hb_37888_42726.js" async></script>',
		// Paste each HB Agency placement code here. Leave "" to hide that position.
		slots: {
			// hecookpulse_In Image (335808): under the featured image
			top: "<div id='hbagency_space_335808'></div>",
			outstream: "",    // video ad after the 2nd paragraph (no placement yet)
			// hecookpulse_In Page (335809): inside the text
			inarticle1: '<div class="hb-ad-inpage"><div class="hb-ad-inner"><div class="hbagency_cls hbagency_space_335809"></div></div></div>',
			interscroller: "",// full-screen scroll ad (no placement yet)
			inarticle2: "",   // end of the text (no placement yet)
			// Site-wide: Interstitial (335807) + Sticky floor 728x90 (335805) + Magic Left 300x600 (335806)
			sticky: [
				"<div id='hbagency_space_335807'></div>",
				"<div id='HB_Footer_Close_hbagency_space_335805'><div id='HB_CLOSE_hbagency_space_335805'></div><div id='HB_OUTER_hbagency_space_335805'><div id='hbagency_space_335805'></div></div></div>",
				"<div id='HB_Footer_Close_hbagency_space_335806'><div id='HB_CLOSE_hbagency_space_335806'></div><div id='HB_OUTER_hbagency_space_335806'><div id='hbagency_space_335806'></div></div></div>",
			].join(""),
		},
	},

	// Visitor stats (GoatCounter, free & lightweight). Dashboard: https://nora42.goatcounter.com
	analytics: {
		goatcounterCode: "nora42",
	},

	// Footer
	footerText: "© 2026 HeCookPulse — Recipes by Nora Hale",
};
