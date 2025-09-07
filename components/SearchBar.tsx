import React, { useState, useEffect } from "react";
import { View, TextInput, Image } from "react-native";

const icons = require("../assets/images/search.png");

interface SearchBarProps {
    placeholder: string;
    value: string;
    onChangeText: (value: string) => void;
    debounceTime?: number;
}

const SearchBar = ({ placeholder, value, onChangeText, debounceTime = 500 }: SearchBarProps) => {
    const [input, setInput] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            onChangeText(input);
        }, debounceTime);


        return () => clearTimeout(handler);
    }, [input]);

    return (
        <View className="flex-row items-center bg-gray-200 rounded-full px-4 py-2">
            <Image
                source={icons}
                className="w-5 h-5"
                resizeMode="contain"
                tintColor="#ab8bff"
            />
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#888"
                value={input}
                onChangeText={setInput}
                className="flex-1 ml-2 text-black"
            />
        </View>
    );
};

export default SearchBar;
