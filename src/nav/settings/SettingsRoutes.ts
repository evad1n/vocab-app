import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type SettingsRoute = {
    Settings: undefined;
    Theme: undefined;
    Import: undefined;
    Export: undefined;
};

export type SettingsRouteProps<T extends keyof SettingsRoute> = {
    navigation: StackNavigationProp<SettingsRoute, T>;
    route: RouteProp<SettingsRoute, T>;
};
