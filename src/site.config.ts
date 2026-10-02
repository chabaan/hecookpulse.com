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
	// HB Agency removed (2026-10-02) — all slots cleared, site currently runs ad-free.
	ads: {
		headCode: "",
		slots: {
			top: "",
			outstream: "",
			inarticle1: "",
			interscroller: "",
			inarticle2: "",
			sticky: "",
		},
	},

	// Visitor stats (GoatCounter, free & lightweight). Dashboard: https://nora42.goatcounter.com
	analytics: {
		goatcounterCode: "nora42",
	},

	// Footer
	footerText: "© 2026 HeCookPulse — Recipes by Nora Hale",
};
