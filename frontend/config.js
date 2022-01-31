export const API = process.env.PRODUCTION
    ? 'https://blogger.com'
    : 'http://localhost:1337/api';



export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;