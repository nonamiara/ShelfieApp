import { Stack } from "expo-router"
import { StatusBar } from "react-native"

export default function AuthLayout() {
  const {user} = useUser()
  console.log(user)
  return (
    <>
      <StatusBar style="auto" />
      <Stack 
        screenOptions={{ animation: "none" }} 
      />
    </>
  )
}