// const admin = require("firebase-admin");

// const serviceAccount = require("../../quick-care-notifications-firebase-adminsdk-ggec5-cd7a31519e.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });
const { Expo } = require("expo-server-sdk");


  let expo = new Expo({
    accessToken: "yOKSPPPPziwyHIpCty9kmHeauQblRwHxYdk-dkdA",
  });
module.exports.sendNotification =async (pushToken,messageNumber) => {
  let message = [];
  if (!Expo.isExpoPushToken(pushToken)) {
    console.error(`Push token ${pushToken} is not a valid Expo push token`);
  }
  console.log("ahmed", pushToken);
  if (messageNumber===1){
  message.push({
    to: pushToken,
    sound: "default",
    title: "Quick Care! ",
    body: "🚑 Your emergency request has been accepted 🚑",
    icon: "../../../Quick-Care-Mobile/assets/emergency-vehicle-removebg-preview.png",
    color: "#077871",
  });
}
if (messageNumber===2){
  message.push({
    to: pushToken,
    sound: "default",
    title: "Quick Care ",
    body: " 🩺 A doctor is coming to you 🩺",
    icon: "../../../Quick-Care-Mobile/assets/emergency-vehicle-removebg-preview.png",
    adaptiveIcon: {
      "foregroundImage": "../../../Quick-Care-Mobile/assets/emergency-vehicle-removebg-preview.pn",
      "backgroundColor": "#50dbb6"
    },
    color: "#077871",
  });
}
  let chunk = expo.chunkPushNotifications(message);
  let ticket = [];
  (async () => {
    for (let chunks of chunk) {
     try {
      let ticketChunk = await expo.sendPushNotificationsAsync(chunks);
      ticket.push(...ticketChunk);
      console.log("ticketChunk: ", ticketChunk);
      let receipts = await expo.getPushNotificationReceiptsAsync([ticketChunk[0].id]);
   console.log("nthabet",receipts);
   
     } catch (error) {
      console.error(error);
     }
    }
   })();
  } 
// const fcm = require('fcm-notification');
// const FCM = new fcm(serviceAccount);
// var token = 'cAdW-AotRwWzMQuSHG0Ypj:APA91bEUjzO0Qc3ACQXerYwbBqTigeYUzRsFT-I24nk94Y39XXdPsP2JGQUUYBr5Tea6Y7TuqvpfeIdBrS3VNzbSDUYcmdYsrvHALz4UfNyl9mxP4uGI-t-3rOzYivUOUPTA9kEeykAV';
 
//     var message = {
//         data: {    //This is only optional, you can send any data
//             score: '850',
//             time: '2:45'
//         },
//         notification:{
//             title : 'Title of notification',
//             body : 'Body of notification'
//         },
//         token : token
//         };
 
// FCM.send(message, function(err, response) {
//     if(err){
//         console.log('error found', err);
//     }else {
//         console.log('response here', response);
//     }
// })


 
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


// Create the messages that you want to send to clients
// const { Expo } = require("expo-server-sdk");

// let expo = new Expo({
//   accessToken: "Y_d1jkeSnrUgwlEd1K30Ub9At3EOZpELK0Jah8NS",
// });

// var TicketOf 
// module.exports.sendNotification = (pushTokenofuser) => {
// let messages = [];
// let pushToken = pushTokenofuser;
//   // Each push token looks like ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]

//   // Check that all your push tokens appear to be valid Expo push tokens
//   if (!Expo.isExpoPushToken(pushToken)) {
//     console.error(`Push token ${pushToken} is not a valid Expo push token`);
//   }
//   // Construct a message (see https://docs.expo.io/push-notifications/sending-notifications/)
//   messages.push({
//     to: pushToken,
//     sound: 'default',
//     body: 'This is a test notification',
//     data: { withSome: 'data' },
//   })
  


// // The Expo push notification service accepts batches of notifications so
// // that you don't need to send 1000 requests to send 1000 notifications. We
// // recommend you batch your notifications to reduce the number of requests
// // and to compress them (notifications with similar content will get
// // compressed).
// let chunks = expo.chunkPushNotifications(messages);
// let tickets = [];
// (async () => {
//   // Send the chunks to the Expo push notification service. There are
//   // different strategies you could use. A simple one is to send one chunk at a
//   // time, which nicely spreads the load out over time:
//   for (let chunk of chunks) {
//     try {
//       let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
//       console.log(ticketChunk);
//       tickets.push(...ticketChunk);

//       // NOTE: If a ticket contains an error code in ticket.details.error, you
//       // must handle it appropriately. The error codes are listed in the Expo
//       // documentation:
//       // https://docs.expo.io/push-notifications/sending-notifications/#individual-errors
//     } catch (error) {
//       console.error(error);
//     }
//   }
// })();
// }
// module.exports.check = () => {
// // Later, after the Expo push notification service has delivered the
// // notifications to Apple or Google (usually quickly, but allow the the service
// // up to 30 minutes when under load), a "receipt" for each notification is
// // created. The receipts will be available for at least a day; stale receipts
// // are deleted.
// //
// // The ID of each receipt is sent back in the response "ticket" for each
// // notification. In summary, sending a notification produces a ticket, which
// // contains a receipt ID you later use to get the receipt.
// //
// // The receipts may contain error codes to which you must respond. In
// // particular, Apple or Google may block apps that continue to send
// // notifications to devices that have blocked notifications or have uninstalled
// // your app. Expo does not control this policy and sends back the feedback from
// // Apple and Google so you can handle it appropriately.
// let receiptIds = ["d72204c7-13ac-40b2-bc6b-5224a4d30eeb","3bc07c1a-af5a-4c1e-9fd6-8341b51243a4"];

//   // NOTE: Not all tickets have IDs; for example, tickets for notifications
//   // that could not be enqueued will have error information and no receipt ID.


// let receiptIdChunks = expo.chunkPushNotificationReceiptIds(receiptIds);
// (async () => {
//   // Like sending notifications, there are different strategies you could use
//   // to retrieve batches of receipts from the Expo service.
//   for (let chunk of receiptIdChunks) {
//     try {
//       let receipts = await expo.getPushNotificationReceiptsAsync(chunk);
//       console.log(receipts);

//       // The receipts specify whether Apple or Google successfully received the
//       // notification and information about an error, if one occurred.
//       for (let receiptId in receipts) {
//         let { status, message, details } = receipts[receiptId];
//         if (status === 'ok') {
//           continue;
//         } else if (status === 'error') {
//           console.error(
//             `There was an error sending a notification: ${message}`
//           );
//           if (details && details.error) {
//             // The error codes are listed in the Expo documentation:
//             // https://docs.expo.io/push-notifications/sending-notifications/#individual-errors
//             // You must handle the errors appropriately.
//             console.error(`The error code is ${details.error}`);
//           }
//         }
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }
// })();

// }


// module.exports.checktoken=async()=>{

//   await fetch('https://fcm.googleapis.com/fcm/send', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: ser ,
//     },
//     body: JSON.stringify({
//       to: 'cAdW-AotRwWzMQuSHG0Ypj:APA91bEUjzO0Qc3ACQXerYwbBqTigeYUzRsFT-I24nk94Y39XXdPsP2JGQUUYBr5Tea6Y7TuqvpfeIdBrS3VNzbSDUYcmdYsrvHALz4UfNyl9mxP4uGI-t-3rOzYivUOUPTA9kEeykAV',
//       priority: 'normal',
//       data: {
//         experienceId: '@yourExpoUsername/yourProjectSlug',
//         scopeKey: '@yourExpoUsername/yourProjectSlug',
//         title: "📧 You've got mail",
//         message: 'Hello world! 🌐',
//       },
//     }),
//   });


// }

// const admin = require("firebase-admin");

// const serviceAccount = require("../../quick-care-notifications-firebase-adminsdk-ggec5-5eda2a8f20.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// const fcm = require("fcm-notification");
// const path = require("../../quick-care-notifications-firebase-adminsdk-ggec5-cd7a31519e.json")
// const FCM = new fcm(path);
// var token = 'cAdW-AotRwWzMQuSHG0Ypj:APA91bEUjzO0Qc3ACQXerYwbBqTigeYUzRsFT-I24nk94Y39XXdPsP2JGQUUYBr5Tea6Y7TuqvpfeIdBrS3VNzbSDUYcmdYsrvHALz4UfNyl9mxP4uGI-t-3rOzYivUOUPTA9kEeykAV';
 
//     var message = {
//         data: {    //This is only optional, you can send any data
//             score: '850',
//             time: '2:45'
//         },
//         notification:{
//             title : 'Title of notification',
//             body : 'Body of notification'
//         },
//         token : token
//         };
 
// FCM.send(message, function(err, response) {
//     if(err){
//         console.log('error found', err);
//     }else {
//         console.log('response here', response);
//     }
// })
  
// This registration token comes from the client FCM SDKs.
// const admin = require("firebase-admin");

// const serviceAccount = require("../../quick-care-notifications-firebase-adminsdk-ggec5-cd7a31519e.json");

// module.exports.khra= ()=>{

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });
// const registrationToken = 'cAdW-AotRwWzMQuSHG0Ypj:APA91bEUjzO0Qc3ACQXerYwbBqTigeYUzRsFT-I24nk94Y39XXdPsP2JGQUUYBr5Tea6Y7TuqvpfeIdBrS3VNzbSDUYcmdYsrvHALz4UfNyl9mxP4uGI-t-3rOzYivUOUPTA9kEeykAV';


// const message = {
//   data: {
//     score: '850',
//     time: '2:45'
//   },
//   token: registrationToken
// };

// // Send a message to the device corresponding to the provided
// // registration token.
// admin.().send(message)
//   .then((response) => {
//     // Response is a message ID string.
//     console.log('Successfully sent message:', response);
//   })
//   .catch((error) => {
//     console.log('Error sending message:', error);
//   });
// }
