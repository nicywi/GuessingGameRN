import { View, Image, StyleSheet, Text, Dimensions } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return <View style={styles.rootContainer}>
        <Title>GAVE OVER!</Title>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/image/success.png')}></Image>
        </View>
        <Text style={styles.summaryText}>
            Your phone needed <Text style={styles.higlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.higlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>;

}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        borderRadius: deviceWidth < 450 ? 75 : 150,
        width: deviceWidth < 450 ? 150 : 300,
        height: deviceWidth < 450 ? 150 : 300,
        borderWidth: 3,
        borderColor: Colors.accent500,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    higlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    }
});