let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.combine([
	'resources/assets/js/home.js'
	], 'public/js/home.js')
   .sass('resources/assets/sass/app.scss', 'public/css');

//Home css style   
mix.styles([
	'resources/assets/css/home.css',
	'resources/assets/css/menublock.css'
	], 'public/css/home.css');







mix.browserSync({
    proxy: 'localhost:8000'
});