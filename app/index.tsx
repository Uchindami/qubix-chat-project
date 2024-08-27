import { Text, View } from "react-native";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { StatusBar } from "react-native";

export default function Index() {
  const tasks = useQuery(api.tasks.get);
  return (
    <View className="flex-1 items-center justify-center bg-white">
      {tasks?.map(({ _id, text }) => (
        <Text className="font-KarlaBold" key={_id}>
          {text}
        </Text>
      ))}
    </View>
  );
}
