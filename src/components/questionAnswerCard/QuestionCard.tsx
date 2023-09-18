import { StyleSheet, View, Text } from "react-native";
import { Colors } from "../../theme/globalStyles/colors";
import { QuestionCardBorderColor } from "../../helpers/answerBackgroundColor";
import { globalStyles } from "../../theme/globalStyles/globalStyles";

type Props = {
  question?: string;
  difficulty?: string;
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.primary_grey,
    width: "80%",
    minHeight: 100,
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});

const QuestionCard: React.FC<Props> = ({ question, difficulty }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <View
        style={[
          styles.cardContainer,
          globalStyles.defaultShadow,
          { borderColor: QuestionCardBorderColor(difficulty) },
        ]}
      >
        <Text style={{ textAlign: "center" }}>{question}</Text>
      </View>
    </View>
  );
};

export default QuestionCard;
