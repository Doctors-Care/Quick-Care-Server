const { Expo } = require("expo-server-sdk");


module.exports.sendNotification = (pushToken) => {
  let expo = new Expo({
    accessToken: "EVINP6Zq9o4ht6fICB3LN1zx8m8cJHKimVkVvjxt",
  });
  let message = [];
  if (!Expo.isExpoPushToken(pushToken)) {
    console.error(`Push token ${pushToken} is not a valid Expo push token`);
  }
  console.log("ahmed", pushToken);
  message.push({
    to: pushToken,
    sound: "default",
    body: "This is a test notification",
  });
  let chunk = expo.chunkPushNotifications(message);
  let ticket = [];
  (async () => {
    for (let chunks of chunk) {
     try {
      let ticketChunk = await expo.sendPushNotificationsAsync(chunks);
      ticket.push(...ticketChunk);
      console.log("ticketChunk: ", ticketChunk);
   
     } catch (error) {
      console.error(error);
     }
    }
   })();
  console.log(chunk);
  
};