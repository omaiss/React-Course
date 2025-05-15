import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  return (
    <>
      <Header />
      <div id="user-input">
        <UserInput userLabel={"Initial Investment"} />
        <UserInput userLabel={"Annual Investment"} />
        <UserInput userLabel={"Expected Retrun"} />
        <UserInput userLabel={"Duration"} />
      </div>
      <Result />
    </>
  );
}

export default App;
