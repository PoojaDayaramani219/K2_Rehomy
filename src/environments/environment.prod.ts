// `.env.ts` is generated by the `npm run env` command
import env from './.env';

export let environment = {
    production: true,
    version: env.npm_package_version,
    serverUrl: '/api',
    envName: 'PROD',
    FRONTEND_API_URL: 'https://frontend.k2ai.com/',
    BACKEND_API_URL:  'http://rehomybackend.k2ai.com/'
};
