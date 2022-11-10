import { useStore } from "../../store";
import { Text, View } from "../../components/Themed";
import { LoginButton } from "../../components/LoginButton";

export const LoginScreen = () => {
  const loginStore = useStore("loginStore");
  return (
    <View>
      <LoginButton />
    </View>
  );
};
