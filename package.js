Package.describe({
  name: "guidouil:reveal-js",
  summary: "A framework for easily creating beautiful presentations using HTML.",
  version: "3.0.0_2",
  git: "https://github.com/guidouil/reveal.js.git"
});

Package.onUse(function(api) {
  api.versionsFrom("1.0.1");
  api.use(["meteor"]);

  api.addFiles([
	'css/theme/beige.css',
	'css/theme/black.css',
	'css/theme/blood.css',
	'css/theme/league.css',
	'css/theme/moon.css',
	'css/theme/night.css',
	'css/theme/serif.css',
	'css/theme/simple.css',
	'css/theme/sky.css',
	'css/theme/solarized.css',
	'css/theme/white.css',
	'lib/css/zenburn.css',
	'lib/font/league-gothic/league-gothic.css',
	'lib/font/league-gothic/league-gothic.eot',
	'lib/font/league-gothic/league-gothic.ttf',
	'lib/font/league-gothic/league-gothic.woff',
  'lib/font/source-sans-pro/source-sans-pro-italic.eot',
  'lib/font/source-sans-pro/source-sans-pro-italic.ttf',
  'lib/font/source-sans-pro/source-sans-pro-italic.woff',
  'lib/font/source-sans-pro/source-sans-pro-regular.eot',
  'lib/font/source-sans-pro/source-sans-pro-regular.ttf',
  'lib/font/source-sans-pro/source-sans-pro-regular.woff',
  'lib/font/source-sans-pro/source-sans-pro-semibold.eot',
  'lib/font/source-sans-pro/source-sans-pro-semibold.ttf',
  'lib/font/source-sans-pro/source-sans-pro-semibold.woff',
  'lib/font/source-sans-pro/source-sans-pro-semibolditalic.eot',
  'lib/font/source-sans-pro/source-sans-pro-semibolditalic.ttf',
  'lib/font/source-sans-pro/source-sans-pro-semibolditalic.woff',
  'lib/font/source-sans-pro/source-sans-pro.css'
  ], 'client', { isAsset: true });

  api.addFiles([
	'js/reveal.js',
	'css/reveal.css'
  ], 'client');

  api.export('Reveal', 'client');
});
