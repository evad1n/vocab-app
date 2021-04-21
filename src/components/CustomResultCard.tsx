import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { insertWord } from '_db/db';
import { useTypedDispatch, useTypedSelector } from '_store/hooks';
import { textStyles } from '../styles/text';

interface CustomResultCardProps {
    word: string;
}

export default function CustomResultCard({ word }: CustomResultCardProps) {
    const theme = useTypedSelector(state => state.theme);
    const { width } = Dimensions.get('window');
    const dispatch = useTypedDispatch();
    const navigation = useNavigation();

    const [definition, setDefinition] = useState("");

    const saveWord = async () => {
        try {
            const customWordResult = {
                api: 0,
                word,
                definition
            };
            let id = await insertWord(customWordResult);
            let wordDoc = { ...customWordResult, id };
            dispatch({
                type: "ADD_WORD",
                item: wordDoc
            });
            navigation.navigate('Collection', { screen: "Detail", params: { word: wordDoc } });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={{ width, flex: 1 }}>
            <View style={[styles.container, { backgroundColor: theme.primary.default }]}>
                <View style={styles.header}>
                    <Text style={[textStyles.api, { color: theme.primary.text }]}>custom</Text>
                </View>
                <View style={styles.content}>
                    <Text style={[styles.word, { color: theme.primary.text }]}>{word}</Text>
                </View>
                <View style={[{ backgroundColor: theme.primary.light }, styles.definitionInput]}>
                    <TextInput
                        style={[styles.definition,
                        { color: theme.primary.text },
                        definition.length === 0 ? styles.placeholder : null
                        ]}
                        multiline
                        placeholderTextColor={theme.primary.text}
                        placeholder="Enter a custom definition here..."
                        onChangeText={(text) => setDefinition(text)}
                        value={definition}
                    />
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: theme.primary.light }]}
                        onPress={() => saveWord()}
                    >
                        <Text style={[styles.buttonText, { color: theme.primary.text }]}>Save Word</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        padding: 20,
        flex: 1,
        borderRadius: 4,
        elevation: 5
    },
    header: {
        marginBottom: 10
    },
    content: {
    },
    word: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10,
    },
    definitionInput: {
        flexGrow: 1,
        justifyContent: "flex-start",
        marginBottom: 20
    },
    definition: {
        fontSize: 20,
        padding: 10
    },
    placeholder: {
        opacity: 0.5
    },
    footer: {

    },
    button: {
        alignItems: 'center',
        padding: 10,
        elevation: 3,
    },
    buttonText: {
        textTransform: "uppercase",
        fontSize: 16,
        fontWeight: "bold",
        letterSpacing: 0.5
    },
    notFoundContainer: {
        flex: 1,
        justifyContent: "center",
    },
    notFound: {
        fontSize: 30,
        textAlign: "center"
    }
});