
import HomeStack from '@/src/nav/home/HomeStack';
import SearchStack from '@/src/nav/search/SearchStack';
import StudyStack from '@/src/nav/study/StudyStack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { RouteParamList } from './DrawerRoutes';

const Drawer = createDrawerNavigator<RouteParamList>();

export default function Router() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{}}
        >
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen name="Search" component={SearchStack} />
            <Drawer.Screen name="Study" component={StudyStack} />
        </Drawer.Navigator>
    );
}