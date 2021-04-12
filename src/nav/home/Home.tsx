import SearchBar from '@/src/components/widgets/SearchBar';
import { useTypedSelector } from '_store/hooks';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RouteNavProps } from '../DrawerRoutes';
import { HomeRouteProps } from './HomeRoutes';

export default function Home({ navigation }: RouteNavProps<'Home'> & HomeRouteProps<'home'>) {
    const theme = useTypedSelector(state => state.theme);

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={[styles.title, { color: theme.primary.text }]}>LEXICOGN</Text>
            </View>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Search')}>
                <SearchBar
                    style={styles.searchBar}
                    editable={false}
                    placeholder="Look up a word"
                />
            </TouchableOpacity>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    titleContainer: {
        height: "50%",
        justifyContent: "center"
    },
    title: {
        fontSize: 50,
        fontWeight: "bold"
    },
    searchBar: {
        width: '80%',
        paddingVertical: 10
    }
});

// TODO:
// Have random word from db be shown on startup
