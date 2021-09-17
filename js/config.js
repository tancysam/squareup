class Config {
	constructor() { }

	getThemeMode() {
		const themeModes = {
			'light': {
				name: 'Light',
				icon: 'light-mode'
			},
			'dark': {
				name: 'Dark',
				icon: 'dark-mode'
			},
			'auto': {
				name: 'Auto',
				icon: 'auto-mode',
				lightHour: '7',
				darkHour: '18'
			}
		};

		return themeModes;
	}

	getFontFamily() {
		const fontFamilies = {
			'monospace': 'Fira Code Retina, Hack, Ubuntu Mono, Monaco, Lucida Console, monospace',
			'sans-serif': 'Inter, SF Pro Text, Roboto, Open Sans, sans-serif',
			'serif': 'serif'
		};

		return fontFamilies;
	}

	getQuickSearchData() {
		const quickSearchData = {
			'r/': {
				urlPrefix: 'https://reddit.com/r/'
			},
			'w/': {
				urlPrefix: 'https://wikipedia.org/wiki/'
			},
			'u/': {
				urlPrefix: 'https://unsplash.com/s/photos/'
			},
			'a/': {
				urlPrefix: 'https://amazon.com/s?k='
			},
			'e/': {
				urlPrefix: 'https://ebay.com/sch/?_nkw='
			},
			'y/': {
				urlPrefix: 'https://youtube.com/results?search_query='
			},
			
			'g/': {
				urlPrefix: 'https://github.com/search?q='
			}
		};

		return quickSearchData;
	}

	getSearchEngines() {

		const searchEngines = {
			'google': {
				name: 'Google',
				prefix: 'https://www.google.com/search?q=',
				icon: 'google'
			},
			
		};

		return searchEngines;
	}

	getWebSites() {
		// Web menu
		// A list of websites that will be generated and put on the web menu
		const webSites = [
			{
				site: 'Reddit',
				icon: 'reddit',
				url: 'https://reddit.com/',
				category: 'social'
			},
			{
				site: 'Github',
				icon: 'github',
				url: 'https://github.com/',
				category: 'development'
			},
			{
				site: 'Cloudflare',
				icon: 'cloudflare',
				url: 'https://dash.cloudflare.com/',
				category: 'development'
			},
			{
				site: 'Gmail',
				icon: 'gmail',
				url: 'https://mail.google.com/',
				category: 'social'
			},
			{
				site: 'Youtube',
				icon: 'youtube',
				url: 'https://youtube.com/',
				category: 'Entertainment'
			},
			{
				site: 'Google Drive',
				icon: 'gdrive',
				url: 'https://drive.google.com/',
				category: 'utilities'
			},
			{
				site: 'Twitter',
				icon: 'twitter',
				url: 'https://twitter.com/',
				category: 'social'
			},
			{
				site: 'Instagram',
				icon: 'instagram',
				url: 'https://instagram.com/',
				category: 'social'
			},
			{
				site: 'Shopee',
				icon: 'shopee',
				url: 'https://shopee.sg/',
				category: 'shop'
			},
			{
				site: 'Shopee MY',
				icon: 'shopee',
				url: 'https://shopee.my/',
				category: 'shop'
			},

			{
				site: 'Duckduckgo',
				icon: 'duckduckgo',
				url: 'https://duckduckgo.com/',
				category: 'search engine'
			},

			{
				site: 'Google',
				icon: 'google',
				url: 'https://google.com/',
				category: 'search engine'
			},
			{
				site: 'Wikipedia',
				icon: 'wikipedia',
				url: 'https://wikipedia.org/',
				category: 'information'
			},

			{
				site: 'Office 365',
				icon: 'office365',
				url: 'https://office.com/',
				category: 'utilities'
			},
			{
				site: '4chan',
				icon: '4chan',
				url: 'https://4chan.org/',
				category: 'social'
			},
			{
				site: 'NYJC Portal',
				icon: 'nyjcportal',
				url: 'https://portal.nyjc.edu.sg/',
				category: 'Academics'
			},
			{
				site: 'Discord',
				icon: 'discord',
				url: 'https://discord.com/',
				category: 'social'
			},
			{
				site: 'Spotify',
				icon: 'spotify',
				url: 'https://spotify.com/',
				category: 'Entertainment'
			},
			{
				site: 'Stackoverflow',
				icon: 'stackoverflow',
				url: 'https://stackoverflow.com/',
				category: 'development'
			},
		
			{
				site: 'Calendar',
				icon: 'calendar',
				url: 'https://calendar.google.com/',
				category: 'utilities'
			},
			
			{
				site: 'Markdown Cheatsheet',
				icon: 'markdown',
				url: 'https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet/',
				category: 'development'
			},
			{
				site: 'Interneting is Hard',
				icon: 'interneting-is-hard',
				url: 'https://internetingishard.com/',
				category: 'development'
			},
			
			{
				site: 'Amazon',
				icon: 'amazon',
				url: 'https://amazon.com/',
				category: 'shop'
			},
			
			{
				site: 'XDA Forum',
				icon: 'xda',
				url: 'https://forum.xda-developers.com/c/oneplus-8t.11579/',
				category: 'social'
			},
			{
				site: 'iQiyi',
				icon: 'iqiyi',
				url: 'https://iq.com/',
				category: 'Entertainment'
			},
			{
				site: 'Wormhole',
				icon: 'wormhole',
				url: 'https://wormhole.app/',
				category: 'utilities'
			},
			{
				site: 'Lazada',
				icon: 'lazada',
				url: 'https://lazada.com/',
				category: 'shop'
			},
			{
				site: 'dnsleaktest',
				icon: 'dnsleaktest',
				url: 'https://dnsleaktest.com/',
				category: 'utilities'
			},
			{
				site: 'Bitwarden',
				icon: 'bitwarden',
				url: 'https://bitwarden.com/',
				category: 'utilities'
			},
			{
				site: 'Taobao',
				icon: 'taobao',
				url: 'https://taobao.com/',
				category: 'Shop'
			},
			
			
			
		];

		return webSites;
	}

	getPanelSites() {
		// Panel
		// A list of websites that will be generated and put on the Panel
		const panelSites = [
			{
				site: 'Reddit',
				icon: 'reddit',
				url: 'https://reddit.com/'
			},
			{
				site: 'Youtube',
				icon: 'youtube',
				url: 'https://youtube.com/'
			},
			{
				site: 'AdGuard Home',
				icon: 'AdGuard',
				url: 'https://dns.tancysam.me/'
			},
			{
				site: 'NYJC Portal',
				icon: 'nyjcportal',
				url: 'https://portal.nyjc.edu.sg/'
			},
			{
				site: 'Gmail',
				icon: 'gmail',
				url: 'https://mail.google.com/'
			},
			{
				site: 'Youtube',
				icon: 'youtube',
				url: 'https://youtube.com/'
			},
			{
				site: 'Shopee',
				icon: 'shopee',
				url: 'https://shopee.sg/'
			},
			{
				site: 'GDrive',
				icon: 'gdrive',
				url: 'https://drive.google.com/'
			},
			{
				site: 'Taobao',
				icon: 'taobao',
				url: 'https://taobao.com/'
			},
			
		];

		return panelSites;
	}
}
