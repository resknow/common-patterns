const fs = require('fs');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

// Change this to true if you want your browser to open when you run npm run dev
const shouldAutoOpenBrowser = false;

module.exports = (eleventyConfig) => {
	// Navigation Plugin
	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	// Custom Watch Targets
	eleventyConfig.addWatchTarget('kubas.config.js');

	// Passthrough Files/Directories
	['assets'].forEach((item) => {
		eleventyConfig.addPassthroughCopy(item);
	});

	// Handle 404 locally
	eleventyConfig.setBrowserSyncConfig({
		open: shouldAutoOpenBrowser ? 'local' : false,
		callbacks: {
			ready: (err, browserSync) => {
				const content404 = fs.readFileSync('_site/404.html');

				browserSync.addMiddleware('*', (req, res) => {
					// Provides the 404 content without redirect.
					res.write(content404);
					res.end();
				});
			}
		}
	});

	return {
		dir: {
			input: 'templates',
			layouts: '_layouts'
		}
	};
};
