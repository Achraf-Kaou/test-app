// NOTE: Auto-generated file
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses 'environment.ts', but if you do
// 'ng build --env=prod' then 'environment.prod.ts' will be used instead.
// The list of which env maps to which file can be found in '.angular-cli.json'.
declare const window:any;

import { Environment } from './model';



	let API_BASE_URL = 'http://localhost:3000';
	let CLIENT_BASE_URL = 'http://localhost:4200';

	let IS_ELECTRON = false;
	let IS_INTEGRATED_DESKTOP = false;

	// https://github.com/electron/electron/issues/2288#issuecomment-337858978
	const userAgent = navigator.userAgent.toLowerCase();
	if (userAgent.indexOf(' electron/') > -1) {
		try {
			let variableGlobal: {
				API_BASE_URL: string;
				IS_INTEGRATED_DESKTOP: boolean;
			} | any;

			if (window.electronAPI && window.electronAPI.getGlobal) {
				variableGlobal = window.electronAPI.getGlobal();
			} else {
				const remote = window.require('@electron/remote');
				variableGlobal = remote.getGlobal('variableGlobal');
			}
			API_BASE_URL = variableGlobal.API_BASE_URL;
			IS_ELECTRON = true;
			IS_INTEGRATED_DESKTOP = variableGlobal.IS_INTEGRATED_DESKTOP;
		} catch(e) {
			console.log(e);
		}
	}

	try {
		if (window._env && window._env.api) {
			API_BASE_URL= window._env.api;
		}

		if (window._env && window._env.api) {
			CLIENT_BASE_URL = window.location.origin;
		}
	} catch(e) {}

	export const environment: Environment =
	{
		production:  false,

		API_BASE_URL: API_BASE_URL,
		CLIENT_BASE_URL: CLIENT_BASE_URL,
		COOKIE_DOMAIN: '.gauzy.co',

		PLATFORM_WEBSITE_URL: 'https://gauzy.co',
		PLATFORM_WEBSITE_DOWNLOAD_URL: 'https://gauzy.co/downloads',
		DESKTOP_APP_DOWNLOAD_LINK_APPLE: 'https://gauzy.co/downloads#desktop/apple',
		DESKTOP_APP_DOWNLOAD_LINK_WINDOWS: 'https://gauzy.co/downloads#desktop/windows',
		DESKTOP_APP_DOWNLOAD_LINK_LINUX: 'https://gauzy.co/downloads#desktop/linux',
		MOBILE_APP_DOWNLOAD_LINK: 'https://gauzy.co/downloads#mobile',
		EXTENSION_DOWNLOAD_LINK: 'https://gauzy.co/downloads#extensions',

		COMPANY_NAME: 'Ever Co. LTD',
		COMPANY_LINK: 'https://ever.co',
		COMPANY_SITE_NAME: 'Gauzy',
		COMPANY_SITE_LINK: 'https://gauzy.co',
		COMPANY_GITHUB_LINK: 'https://github.com/ever-co',
		COMPANY_GITLAB_LINK: 'https://gitlab.com/ever-co',
		COMPANY_FACEBOOK_LINK: 'https://www.facebook.com/gauzyplatform',
		COMPANY_TWITTER_LINK: 'https://twitter.com/gauzyplatform',
		COMPANY_IN_LINK: 'https://www.linkedin.com/company/everhq',

		GOOGLE_AUTH_LINK: API_BASE_URL + '/api/auth/google',
		FACEBOOK_AUTH_LINK: API_BASE_URL + '/api/auth/facebook',
		LINKEDIN_AUTH_LINK: API_BASE_URL + '/api/auth/linkedin',
		GITHUB_AUTH_LINK: API_BASE_URL + '/api/auth/github',
		TWITTER_AUTH_LINK: API_BASE_URL + '/api/auth/twitter',
		MICROSOFT_AUTH_LINK: API_BASE_URL + '/api/auth/microsoft',
		AUTH0_AUTH_LINK: API_BASE_URL + '/api/auth/auth0',

		NO_INTERNET_LOGO: 'assets/images/logos/logo_Gauzy.svg',

		SENTRY_DSN: '',
		SENTRY_TRACES_SAMPLE_RATE: '0.01',

		HUBSTAFF_REDIRECT_URL: 'http://localhost:3000/api/integration/hubstaff/callback',

		IS_ELECTRON: IS_ELECTRON,
		IS_INTEGRATED_DESKTOP: IS_INTEGRATED_DESKTOP,

		GOOGLE_MAPS_API_KEY: '',
		GOOGLE_PLACE_AUTOCOMPLETE: false,

		DEFAULT_LATITUDE: 0,
		DEFAULT_LONGITUDE: 0,
		DEFAULT_CURRENCY: 'USD',
		DEFAULT_COUNTRY: 'US',

		DEMO: true,

		DEMO_SUPER_ADMIN_EMAIL: 'admin@ever.co',
		DEMO_SUPER_ADMIN_PASSWORD: 'admin',

		DEMO_ADMIN_EMAIL: 'local.admin@ever.co',
		DEMO_ADMIN_PASSWORD: 'admin',

		DEMO_EMPLOYEE_EMAIL: 'employee@ever.co',
		DEMO_EMPLOYEE_PASSWORD: '123456',

		CHATWOOT_SDK_TOKEN: '',
		CHAT_MESSAGE_GOOGLE_MAP: '',
		GAUZY_CLOUD_APP: 'https://app.gauzy.co/#',

		FILE_PROVIDER: 'LOCAL',

		JITSU_BROWSER_URL: '',
		JITSU_BROWSER_WRITE_KEY: '',

		GAUZY_GITHUB_APP_NAME: '',
		GAUZY_GITHUB_CLIENT_ID: 'XXXXXXX',
		GAUZY_GITHUB_REDIRECT_URL: 'http://localhost:3000/api/integration/github/callback',
		GAUZY_GITHUB_POST_INSTALL_URL: 'http://localhost:4200/#/pages/integrations/github/setup/installation',

		PLATFORM_LOGO: 'assets/images/logos/logo_Gauzy.svg',
		GAUZY_DESKTOP_LOGO_512X512: 'assets/icons/icon_512x512.png',
		PLATFORM_PRIVACY_URL: 'https://gauzy.co/privacy',
		PLATFORM_TOS_URL: 'https://gauzy.co/tos',
		PROJECT_REPO: 'https://github.com/ever-co/ever-gauzy.git',

		DESKTOP_TIMER_APP_NAME: 'gauzy-desktop-timer',
		DESKTOP_TIMER_APP_DESCRIPTION: 'Gauzy Desktop Timer',
		DESKTOP_TIMER_APP_ID: 'com.ever.gauzydesktoptimer',
		DESKTOP_TIMER_APP_REPO_NAME: 'ever-gauzy-desktop-timer',
		DESKTOP_TIMER_APP_REPO_OWNER: 'ever-co',
		DESKTOP_TIMER_APP_WELCOME_TITLE: '',
		DESKTOP_TIMER_APP_WELCOME_CONTENT: '',

		DESKTOP_APP_NAME: 'gauzy-desktop',
		DESKTOP_APP_DESCRIPTION: 'Gauzy Desktop',
		DESKTOP_APP_ID: 'com.ever.gauzydesktop',
		DESKTOP_APP_REPO_NAME: 'ever-gauzy-desktop',
		DESKTOP_APP_REPO_OWNER: 'ever-co',
		DESKTOP_APP_WELCOME_TITLE: '',
		DESKTOP_APP_WELCOME_CONTENT: '',

		DESKTOP_SERVER_APP_NAME: 'gauzy-server',
		DESKTOP_SERVER_APP_DESCRIPTION: 'Gauzy Server',
		DESKTOP_SERVER_APP_ID: 'com.ever.gauzyserver',
		DESKTOP_SERVER_APP_REPO_NAME: 'ever-gauzy-server',
		DESKTOP_SERVER_APP_REPO_OWNER: 'ever-co',
		DESKTOP_SERVER_APP_WELCOME_TITLE: '',
		DESKTOP_SERVER_APP_WELCOME_CONTENT: '',

		DESKTOP_API_SERVER_APP_NAME: 'gauzy-api-server',
		DESKTOP_API_SERVER_APP_DESCRIPTION: 'Gauzy API Server',
		DESKTOP_API_SERVER_APP_ID: 'com.ever.gauzyapiserver',
		DESKTOP_API_SERVER_APP_REPO_NAME: 'ever-gauzy-api-server',
		DESKTOP_API_SERVER_APP_REPO_OWNER: 'ever-co',
		DESKTOP_API_SERVER_APP_WELCOME_TITLE: '',
		DESKTOP_API_SERVER_APP_WELCOME_CONTENT: '',

		REGISTER_URL: 'https://app.gauzy.co/#/auth/register',
		FORGOT_PASSWORD_URL: 'https://app.gauzy.co/#/auth/request-password',

		I18N_FILES_URL: ''
	};
	

	// For easier debugging in development mode, you can import the following file
	// to ignore zone related error stack frames such as 'zone.run', 'zoneDelegate.invokeTask'.
	import 'zone.js';  // Included with Angular CLI.

	