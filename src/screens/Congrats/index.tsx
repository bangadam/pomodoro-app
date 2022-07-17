import { useNavigation } from "@react-navigation/native";
import Button from "components/Button";
import { StatusBar } from "expo-status-bar";
import { AppStackNavigationProps } from "types/AppStackNavigationProps";
import { Banner, Container, Text } from "./styles";
import { Entypo } from "@expo/vector-icons";

export default function Congrats() {
  const navigation = useNavigation<AppStackNavigationProps>();

  return (
    <Container>
      <StatusBar style="auto" />
      <Text>Great!</Text>
      <Text>It&apos;s time to rest now!</Text>
      <Banner
        loop
        autoPlay
        autoSize
        duration={3000}
        source={require("assets/congrats.json")}
      />
      <Button onPress={() => navigation.navigate("Timer")}>
        <Entypo name="chevron-left" size={24} color="white" />
      </Button>
    </Container>
  );
}
