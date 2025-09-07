import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient"; // ✅ gradient import

const pfp = require("../assets/images/defaultpfp.jpg");

interface Alumni {
    name: string;
    id: string;
    batch: string;
    role: string;
}

interface AlumniCardProps {
    alumni: Alumni;
}

const AlumniCard = ({ alumni }: AlumniCardProps) => {
    return (
        <Link href={`/profile/${alumni.id}`} asChild prefetch={false}>
            <TouchableOpacity className="rounded-2xl mb-3 shadow overflow-hidden">

                <LinearGradient
                    colors={["#A1A9FE", "#2E8BC0"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    className="p-4 flex-col items-center"
                >
                    <Image
                        source={pfp}
                        className="w-20 h-20 rounded-full mb-3 border-2 border-white"
                        resizeMode="cover"
                    />
                    <Text className="text-lg font-bold">{alumni.name}</Text>
                    <Text className="text-black-100">{alumni.batch}</Text>
                    <Text className="text-black-200">{alumni.role}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </Link>
    );
};

export default AlumniCard;
