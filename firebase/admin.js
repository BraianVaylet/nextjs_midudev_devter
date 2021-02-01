const admin = require("firebase-admin")
const serviceAccount = require("./firebase-adminsdk-key.json")

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  })
} catch (error) {
  console.log("error", error)
}

export const firestore = admin.firestore()
