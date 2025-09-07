// app/+not-found.tsx
import React from "react";
import { View, Text } from "react-native";
import "./global.css";

export default function NotFound() {
    return (
        <View className="flex-1 items-center justify-center bg-gray-100">
            <Text className="text-xl font-bold">Page Not Found</Text>
        </View>
    );
}
