import React, { useState } from "react";
import { View, Text, FlatList, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/components/SearchBar";
import AlumniCard from "@/components/AlumniCard";
import { Alumni, alumniList } from "@/data/alumniData";
import "./global.css";

const background = require("@/assets/images/bg.png");

export default function Index() {
    const [search, setSearch] = useState("");

    const filtered: Alumni[] = alumniList.filter((alum) =>
        alum.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <View className="flex-1 bg-primary">
            <ImageBackground source={background} className="flex-1" resizeMode="cover">
                <SafeAreaView className="flex-1">
                    <View className="p-4 flex-1">
                        <Text className="text-2xl font-bold text-white mb-4">
                            Alumni Directory
                        </Text>

                        <SearchBar
                            placeholder="Search by name"
                            value={search}
                            onChangeText={setSearch}
                        />

                        <FlatList
                            data={filtered}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => <AlumniCard alumni={item} />}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ paddingTop: 16, paddingBottom: 32 }}
                        />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}
