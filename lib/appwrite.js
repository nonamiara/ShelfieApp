import { Client, Account, Avatars } from "react-native-appwrite"

export const client = new Client()

client
  .setProject('6901d781002e288a0aa8')
  .setPlatform('dev.nonamiara.sheflie')

export const account = new Account(client)
export const avatars = new Avatars(client)