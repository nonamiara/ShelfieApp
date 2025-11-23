import { Client, Account, Avatars, Databases } from "react-native-appwrite"

export const client = new Client()

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6901d781002e288a0aa8')
  .setPlatform('dev.nonamiara.sheflie')

export const account = new Account(client)
export const avatars = new Avatars(client)
export const databases = new Databases(client)
