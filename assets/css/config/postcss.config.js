class TailwindExtractor {
	static extract(content) {
		return content.match(/[A-z0-9-:\/]+/g)
	}
}

module.exports = {    
  plugins: [        
    require('postcss-import')({
      path: ["assets/css"],
    }), 
    require('tailwindcss')('./assets/css/tailwind/tailwind.config.js'),
    require('@fullhuman/postcss-purgecss')({
      content: ['layouts/**/*.html', 'components/**/**/*.html'],
      extractors: [
      {
        extractor: TailwindExtractor,
        extensions: ['html']
      }], 
      fontFace: true,
      whitelist: ['class1', 'class2']
    }),    
    require('autoprefixer')({
      grid: true,
      browsers: ['>1%']
    }),    
  ]
}