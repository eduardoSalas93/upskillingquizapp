import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Colors } from "../../../theme/globalStyles/colors";
import { DecodeText } from "../../../helpers/decodeText";
import { GameOveranswerBg } from "../../../helpers/answerBackgroundColor";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../../../theme/globalStyles/globalStyles";

type Props = {
  handleShowAnswers: () => void;
};

const styles = StyleSheet.create({
  backArrowContainer: {
    paddingHorizontal: 16,
  },
  answerCardContainer: {
    backgroundColor: Colors.white,
    padding: 13,
    alignItems: "center",
    borderRadius: 8,
  },
  questionText: {
    fontSize: 16,
  },
  answersRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  answerContainer: {
    borderWidth: 2,
    backgroundColor: Colors.white,
    padding: 10,
    alignItems: "center",
    borderRadius: 8,
    marginVertical: 10,
    width: "40%",
    marginHorizontal: 5,
    justifyContent: "center",
  },
  backBtn: {
    width: 40,
    height: 40,
    backgroundColor: Colors.secundary_grey,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
});

const GameOverAnswers: React.FC<Props> = ({ handleShowAnswers }) => {
  const { answeredQuestions } = useSelector(
    (state: RootState) => state.questions
  );

  return (
    <View>
      <View style={styles.backArrowContainer}>
        <TouchableOpacity onPress={handleShowAnswers} style={styles.backBtn}>
          <Ionicons name="md-chevron-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={answeredQuestions}
        renderItem={({ item, index }) => (
          <View style={{ marginTop: 8, paddingHorizontal: 16 }}>
            <View
              style={[globalStyles.defaultShadow, styles.answerCardContainer]}
            >
              <Text style={styles.questionText}>
                {index + 1}. {DecodeText(item.question)}
              </Text>
              <View style={styles.answersRow}>
                {item.questionAnswers.map((item2, index) => {
                  return (
                    <View
                      key={item2 + index}
                      style={[
                        globalStyles.defaultShadow,
                        styles.answerContainer,
                        {
                          borderColor: GameOveranswerBg(
                            item.answerSelected,
                            DecodeText(item2),
                            DecodeText(item.correct_answer)
                          ),
                        },
                      ]}
                    >
                      <Text>{DecodeText(item2)}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.question}
      />
    </View>
  );
};

export default GameOverAnswers;
