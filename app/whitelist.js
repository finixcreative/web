angular.module('finixApp')
	.config(['$sceDelegateProvider', function($sceDelegateProvider){
		$sceDelegateProvider.resourceUrlWhitelist([
			// Allow same origin resource loads
			'self',
			// Allow Finix codebase
			'http://finixcreative.github.io/**',
			// Allow loading from our assets domain (difference between * and **)
			'https://www.google.com/**',
			'https://www.youtube.com/**',
			'https://twitter.com/**',
			'https://finixcreative.typeform.com/**',
			'https://file.myfontastic.com/**'
		]);
	}])
;