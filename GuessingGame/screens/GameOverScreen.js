import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function GameOverScreen() {
    return <View style={styles.rootContainer}>
        <Title>GAVE OVER!</Title>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/image/success.png')}></Image>
        </View>
        <Text>
            Your phone needed x rounds to guess the number Y.
        </Text>
    </View>;

}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: Colors.accent500,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    }
});