import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PRODUCTION
    ? 'https://blogger.com'
    : 'http://localhost:1337';
export const APP_NAME = publicRuntimeConfig.APP_NAME;
