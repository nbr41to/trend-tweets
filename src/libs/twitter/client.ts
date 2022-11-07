//Import package
import { Client, auth } from 'twitter-api-sdk';

// Initialize auth client first
// const authClient = new auth.OAuth2User({
//   client_id: process.env.TWITTER_ACCESS_TOKEN as string,
//   client_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET as string,
//   callback: 'YOUR-CALLBACK',
//   scopes: ['tweet.read', 'users.read', 'offline.access'],
// });

// Pass auth credentials to the library client
// export const twitterOAuth2Client = new Client(authClient);
export const client = new Client(process.env.TWITTER_BEARER_TOKEN as string);
