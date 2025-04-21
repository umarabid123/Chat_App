import { StyleSheet } from "react-native";
import { Colors } from "../contexts/theme";

export const globalStyle = StyleSheet.create({
    container :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:20,
        backgroundColor:Colors.white   
    }   
})