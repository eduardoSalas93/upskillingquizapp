import { Pressable, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../../theme/globalStyles/colors";
import { globalStyles } from "../../../theme/globalStyles/globalStyles";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import GameOverScreenText from "../../../i18n/locales/en/game-over.json";
import {
  GameOverDescription,
  GameOverSubtitle,
} from "../../../helpers/gameOverText";

type Props = {
  points: number;
  handleTryNewQuiz: () => void;
  handleGoHome: () => void;
  handleShowAnswers: () => void;
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.white,
    width: "80%",
    borderRadius: 8,
  },
  titleContainer: {
    backgroundColor: Colors.secondary_green,
    padding: 16,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    alignItems: "center",
  },
  titleFont: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: "bold",
  },
  bodyContainer: {
    padding: 16,
    alignItems: "center",
  },
  subtitlel: {
    fontSize: 24,
    color: Colors.primary_green,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: Colors.black,
    textAlign: "center",
  },
  scoreContainer: {
    padding: 16,
    alignItems: "center",
  },
  scoreContainerBody: {
    backgroundColor: Colors.secundary_grey,
    width: "90%",
    padding: 20,
    alignItems: "center",
    borderRadius: 15,
  },
  scoreLabel: {
    fontSize: 16,
    color: Colors.black,
  },
  score: {
    fontSize: 35,
    color: Colors.primary_blue,
    fontWeight: "bold",
  },
  roundedButtonIcon: {
    marginRight: 30,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  checkAnswersBtnContainer: {
    marginTop: 15,
    backgroundColor: Colors.primary_grey,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});

const GameOverScoreCard: React.FC<Props> = ({
  points,
  handleGoHome,
  handleTryNewQuiz,
  handleShowAnswers,
}) => {
  return (
    <View style={[globalStyles.defaultShadow, styles.cardContainer]}>
      <View style={[globalStyles.defaultShadow, styles.titleContainer]}>
        <Text style={styles.titleFont}>{GameOverScreenText.title}</Text>
      </View>

      <View style={styles.bodyContainer}>
        <Text style={styles.subtitlel}>{GameOverSubtitle(points)}</Text>
        <Text style={styles.description}>{GameOverDescription(points)}</Text>
      </View>

      <View style={styles.scoreContainer}>
        <View style={styles.scoreContainerBody}>
          <Text style={styles.scoreLabel}>{GameOverScreenText.yourScore}</Text>
          <Text style={styles.score}>{points}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 15,
          }}
        >
          <View
            style={[
              styles.roundedButtonIcon,
              { backgroundColor: Colors.primary_green },
            ]}
          >
            <Pressable onPress={handleGoHome}>
              <FontAwesome5 name="home" size={20} color={Colors.white} />
            </Pressable>
          </View>

          <View
            style={[styles.roundedButtonIcon, { backgroundColor: Colors.red }]}
          >
            <Pressable onPress={handleTryNewQuiz}>
              <Ionicons name="reload-sharp" size={20} color={Colors.white} />
            </Pressable>
          </View>
        </View>
        <View style={styles.checkAnswersBtnContainer}>
          <Pressable
            onPress={handleShowAnswers}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Feather name="book-open" size={20} color={Colors.white} />
            <Text style={{ marginStart: 10, color: Colors.white }}>
              {GameOverScreenText.checkAnswersBtn}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default GameOverScoreCard;
