import { WebClient } from '@slack/web-api';

/**
 * deploy 完了後の通知
 */
async function main() {
  const web = new WebClient(process.env.SLACK_TOKEN);

  await web.chat.postMessage({
    text: process.env.TEXT as string,
    channel: process.env.CHANNEL as string,
  });
}

main();
