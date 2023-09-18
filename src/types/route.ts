export enum RouteNames {
  // Stack
  Login = "Login",
  Main = "MainScreen",
  Question = "Question",
  GameOver = "GameOver",
  Home = "Home",

  // Tabs
  Welcome = "Welcome",
}

export type RouteParamsList = {
  [RouteNames.Login]: undefined;
  [RouteNames.Main]: undefined;
  [RouteNames.Welcome]: undefined;
  [RouteNames.Question]: undefined;
  [RouteNames.GameOver]: undefined;
  [RouteNames.Home]: undefined;
};
