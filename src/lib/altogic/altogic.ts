import { createClient } from 'altogic';

// This `envUrl` and `clientKey` is sample you need to create your own.
let envUrl = 'https://9235-tpvu.c1-europe.altogic.com';
let clientKey = '8c20c2228b26461da096d2280a493191';

const altogic = createClient(envUrl, clientKey, {
    signInRedirect: '/sign-in',
});
export default altogic;