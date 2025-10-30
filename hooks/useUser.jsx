import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { account } from "../lib/appwrite"
import { ID } from "react-native-appwrite"

export function useUser() {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error("useUser must be used within a UserProvider")
  }

  return context
}