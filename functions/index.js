
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const twilio = require("twilio");

// Initialize the Firebase Admin SDK
admin.initializeApp();

// IMPORTANT: We are fetching your Twilio credentials from the Firebase environment configuration.
// This is a secure way to store secrets. I will show you how to set these values next.
const accountSid = functions.config().twilio.sid;
const authToken = functions.config().twilio.token;
const twilioPhoneNumber = functions.config().twilio.phone_number;

// Check if the configuration is set, and log an error if it's missing.
if (!accountSid || !authToken || !twilioPhoneNumber) {
    console.error("CRITICAL ERROR: Twilio configuration is missing. Please set it using the Firebase CLI: 'firebase functions:config:set twilio.sid=... twilio.token=... twilio.phone_number=...'");
}

const client = new twilio(accountSid, authToken);

// This is our main function. It's an "onCall" function, which means it's a secure endpoint
// that our React app can call.
exports.sendLegalWarning = functions.https.onCall(async (data, context) => {
    
    // Get the phone number to send the message to from the data object passed by the client.
    const toPhoneNumber = data.phoneNumber;

    // Validate that we received a phone number.
    if (!toPhoneNumber) {
        throw new functions.https.HttpsError('invalid-argument', 'The function must be called with a "phoneNumber" argument.');
    }
    
    // Generate a random Case ID for the message.
    const caseId = `HV-${Math.floor(100000 + Math.random() * 900000)}`;
    
    // This is the powerful message that will be sent.
    const messageBody = `LEGAL WARNING: An explicit image has been reported via the HerVoice platform and linked to this phone number. The non-consensual distribution of intimate images is a criminal offense. You are required to immediately cease distribution and delete all copies. Failure to comply will result in evidence being forwarded to law enforcement for potential prosecution. Case ID: ${caseId}`;

    try {
        // Use the Twilio client to send the SMS.
        const message = await client.messages.create({
            body: messageBody,
            from: twilioPhoneNumber,
            to: toPhoneNumber
        });

        // Log the success and return a success message to the client.
        console.log(`SMS sent successfully to ${toPhoneNumber}. Message SID: ${message.sid}`);
        return { success: true, message: `Message sent with SID: ${message.sid}` };

    } catch (error) {
        // If there was an error, log it and throw an error back to the client.
        console.error(`Error sending SMS to ${toPhoneNumber}:`, error);
        throw new functions.https.HttpsError('internal', `Failed to send SMS. Twilio error: ${error.message}`);
    }
});
