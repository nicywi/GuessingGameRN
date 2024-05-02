import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";

import Title from "../components/Title";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.florr(Math.floor() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, excllude);
    } else {
        rndNum;
    }
}

function GameScreen({userNumber}) {

    const initialguess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialguess);

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <Text></Text>
            <View>
                <Text>Higher or lower?</Text>
                {/* +
                - */}
            </View>
            <View>
                {/* LOG ROUNDS */}
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 30
    }
});