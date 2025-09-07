import React from "react";
import { View, Text, Image, ScrollView, SafeAreaView, Platform, StatusBar, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { alumniList } from "@/data/alumniData";

const defaultPfp = require("@/assets/images/defaultpfp.jpg");

export default function ProfilePage() {
    const { id } = useLocalSearchParams<{ id?: string }>();
    const alumni = alumniList.find((a) => a.id === id);

    if (!alumni) {
        return (
            <View className="flex-1 justify-center items-center bg-gray-100">
                <Text className="text-lg font-bold">Alumni not found</Text>
            </View>
        );
    }

    const renderRow = (label: string, value: string) => (
        <View className="flex-row justify-between my-1">
            <Text className="font-semibold text-black">{label}</Text>
            <Text className="text-black">{value}</Text>
        </View>
    );

    return (
        <LinearGradient
            colors={["#050A30", "#050A30"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="flex-1"
        >
            <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
                <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>

                    <View className="items-center mt-6 mb-4">
                        <Image
                            source={alumni.image ? { uri: alumni.image } : defaultPfp}
                            className="w-28 h-28 rounded-full border-4 border-white mb-3"
                            resizeMode="cover"
                        />
                        <Text className="text-2xl font-bold text-white">{alumni.name}</Text>
                        <Text className="text-lg text-white">{alumni.role}</Text>
                        <Text className="text-sm text-white">{alumni.company}</Text>
                    </View>


                    <View
                        style={{
                            backgroundColor: "#FFF",
                            borderRadius: 12,
                            padding: 16,
                            marginHorizontal: 16,
                            marginVertical: 8,
                            shadowColor: "#000",
                            shadowOpacity: 0.1,
                            shadowRadius: 5,
                            elevation: 3,
                        }}
                    >
                        <View className="flex-row justify-between items-center mb-3">
                            <Text className="text-lg font-bold text-black">Personal Information</Text>
                            <TouchableOpacity style={{ backgroundColor: "#F97316", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6 }}>
                                <Text className="text-white font-semibold">Edit</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            {renderRow("First Name", alumni.name.split(" ")[0] || "")}
                            {renderRow("Last Name", alumni.name.split(" ")[1] || "")}
                            {renderRow("Date of Birth", alumni.dob || "N/A")}
                            {renderRow("Email Address", alumni.email || "N/A")}
                            {renderRow("Phone Number", alumni.phone || "N/A")}
                            {renderRow("User Role", alumni.role)}
                        </View>
                    </View>


                    <View
                        style={{
                            backgroundColor: "#FFF",
                            borderRadius: 12,
                            padding: 16,
                            marginHorizontal: 16,
                            marginVertical: 8,
                            shadowColor: "#000",
                            shadowOpacity: 0.1,
                            shadowRadius: 5,
                            elevation: 3,
                        }}
                    >
                        <View className="flex-row justify-between items-center mb-3">
                            <Text className="text-lg font-bold text-black">Address</Text>
                            <TouchableOpacity style={{ backgroundColor: "#F97316", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6 }}>
                                <Text className="text-white font-semibold">Edit</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            {renderRow("Country", alumni.country)}
                            {renderRow("City", alumni.city)}
                            {renderRow("Postal Code", alumni.postalCode)}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}
