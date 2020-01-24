let mix = require('laravel-mix');

mix.sass('client/src/css/bundle.scss', 'dist/client/css')
	.sass('admin/client/src/css/bundle.scss', 'dist/admin/client/css')

  // javascript
 .js('client/src/js/bundle.js', 'dist/client/js')
 .js('admin/client/src/js/bundle.js', 'dist/admin/client/js')
