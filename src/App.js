import "./styles.css";

function makeDiv(personArray) {
  return (
    <div>
      <b>Name:</b> {personArray[0]} {personArray[1]}, <b>Pronouns:</b>{" "}
      {personArray[2]}
    </div>
  );
}

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

  let divs = [];
  for (let i = 0; i < elements.length; i++) {
    divs.push(makeDiv(elements[i]));
    divs.push(<br />);
  }

  return (
    <div className="App">
      <h1>Hello Team</h1>
      <h2>Start editing to see some magic happen!</h2>

      {divs}
    </div>
  );
}
