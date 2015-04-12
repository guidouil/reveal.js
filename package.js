Package.describe({
  name: "guidouil:reveal-js",
  summary: "A framework for easily creating beautiful presentations using HTML.",
  version: "3.0.0_1",
  git: "https://github.com/guidouil/meteor-reveal-js"
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
	'lib/font/league-gothic/league-gothic-webfont.eot',
	'lib/font/league-gothic/league-gothic-webfont.ttf',
	'lib/font/league-gothic/league-gothic-webfont.woff'
  ], 'client', { isAsset: true });

  api.addFiles([
	'js/reveal.js',
	'css/reveal.css'
  ], 'client');

  api.export('Reveal', 'client');
});
