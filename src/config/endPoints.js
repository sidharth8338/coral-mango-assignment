const apiGateWayUrl =
  process.env.NODE_ENV === "development" ? "http://localhost:4000/api/v1" : "";

const endPoints = {
  signIn: `${apiGateWayUrl}/signIn`,
  register: `${apiGateWayUrl}/signUp`,
  getUserData: "https://coralmango.com/api/react-test",
};

export default endPoints;
