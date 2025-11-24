import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function FeedScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold">Feed Screen</Text>
      <Button
        title="Go to Post Details"
        onPress={() => router.push("/home/PostDetailsScreen")}
      />
    </View>
  );
}
