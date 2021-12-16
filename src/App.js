import "./styles.css";

export default function App() {
  let elements = [
    ["Victor", "Lymar", "He/Him"],
    ["Traci", "Siebel", "She/Her"],
    ["Ida", "Voong", "She/Her"],
    ["Ana", "Rivera", "She/Her"],
    ["Aiden", "Fuller", "He/Him"],
    ["Kyle", "Wan", "He/Him"],
    ["Enjun", "Li", "He/Him"],
    ["Luis", "Garcia", "He/Him"],
    ["Amanda", "Yu", "She/Her"],
    ["Yifei", "Du", "He/Him"],
    ["Hector", "Del Valle", "He/Him"]
  ];

  function makeDiv2(pArrays) {
    let pArray = pArrays.map(function makeDiv(personArray) {
      return (
        <div>
          <div>
            <b>Name:</b> {personArray[0]} {personArray[1]}, <b>Pronouns:</b>{" "}
            {personArray[2]}
          </div>
          <br />
        </div>
      );
    });
    return pArray;
  }

  return (
    <div className="App">
      <h1>Hello Team</h1>
      <h2>Start editing to see some magic happen!</h2>

      {makeDiv2(elements)}
    </div>
  );
}
