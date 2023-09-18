import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  FlatList,
  ImageBackground,
  Platform,
  SafeAreaView,
  View,
} from "react-native";
import { RouteNames, RouteParamsList } from "../../types/route";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import QuestionCard from "../../components/questionAnswerCard/QuestionCard";
import { Colors } from "../../theme/globalStyles/colors";
import AnswerItemCard from "../../components/questionAnswerCard/AnswerItemCard";
import DividerAtm from "../../atoms/Divider";
import SpinnerAtm from "../../atoms/spininer";
import Header from "./components/Header";
import { DecodeText } from "../../helpers/decodeText";
import {
  addCurrenQuestion,
  addPoints,
  changeQuestionIndex,
} from "../../redux/questions";
import { useEffect, useState } from "react";
import { QuestionAnsweredItem } from "../../types/question";

type Props = NativeStackScreenProps<RouteParamsList, RouteNames.Question>;

const questionBg = require("../../assets/questionsBg.avif");

const QuestionScreen: React.FC<Props> = ({ navigation }) => {
  const [answerSelected, setAnswerSelected] = useState<string | null>(null);
  const [answerIndex, setAnswerIndex] = useState<number | null>(null);
  const {
    points,
    isLoading,
    currentQuestion,
    questionIndex,
    currentQuestionCorrectAnswer,
    questions,
  } = useSelector((state: RootState) => state.questions);

  const dispatch = useDispatch();
  const [questionsQty, setquestionsQty] = useState(0);

  useEffect(() => {
    if (questions.length > 0) setquestionsQty(questions.length);
  }, [questions]);

  /**
   * @author Eduardo Salas
   * @date 14/09/2023
   * @name handleAnswerSelected
   * @description Method that evaluates if the answer selected is correct or incorrect and updates the questionIndex
   */
  const handleAnswerSelected = (answer: string, index: number | null) => {
    setAnswerSelected(answer);
    setAnswerIndex(index);
    if (answer === DecodeText(currentQuestionCorrectAnswer)) {
      dispatch(addPoints());
    }

    const questionAnswered: QuestionAnsweredItem | null = currentQuestion && {
      ...currentQuestion,
      answerSelected: answer,
    };
    setTimeout(() => {
      setAnswerSelected(null);
      setAnswerIndex(null);
      dispatch(changeQuestionIndex(questionAnswered));
      setquestionsQty((prev) => prev - 1);
    }, 1500);
  };

  /**
   * @author Eduardo Salas
   * @date 14/09/2023
   * @description Method that detects when the questionIndex has changed and update the question to the next one
   */
  useEffect(() => {
    if (!currentQuestion) return;
    if (questionIndex < 20) {
      dispatch(addCurrenQuestion());
    } else {
      navigation.navigate(RouteNames.GameOver);
    }
  }, [questionIndex]);

  /**
   * @author Eduardo Salas
   * @date 8/09/20223
   * @description If the questions request is still loading, the spinner component will be visible
   */

  if (isLoading) {
    return <SpinnerAtm />;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.select({ ios: 0, android: 50 }),
        backgroundColor: Colors.white,
      }}
    >
      <ImageBackground source={questionBg} style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "flex-start" }}>
          <Header points={points} questionsQty={questionsQty} />
          <DividerAtm />
          <View style={{ flex: 3, paddingTop: 40 }}>
            <QuestionCard
              question={DecodeText(currentQuestion?.question)}
              difficulty={currentQuestion?.difficulty}
            />
            <FlatList
              data={currentQuestion?.questionAnswers}
              renderItem={({ item, index }) => (
                <View style={{ marginTop: 8 }}>
                  <AnswerItemCard
                    answer={DecodeText(item)}
                    handleAnswerSelected={handleAnswerSelected}
                    answerSelected={answerSelected}
                    correctAnswer={DecodeText(currentQuestionCorrectAnswer)}
                    index={index}
                    answerIndex={answerIndex}
                  />
                </View>
              )}
              keyExtractor={(item) => item}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default QuestionScreen;
