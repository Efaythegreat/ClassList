import "./styles.css";

export default function App() {
  /*
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
*/

  let objects = [
    {
      f: "Victor",
      l: "Lymar",
      pronoun: "He/Him",
      school: "LaunchDarkly",
      graduationYear: 1923,
      favoriteColor: "green"
    },
    {
      f: "Traci",
      l: "Siebel",
      pronoun: "She/Her",
      school: "LaunchDarkly",
      graduationYear: 2022,
      favoriteColor: "purple"
    },
    {
      f: "Ida",
      l: "Voong",
      pronoun: "She/Her",
      school: "Oakland Technical High School",
      graduationYear: 2022,
      favoriteColor: "blue"
    },
    {
      f: "Ana",
      l: "Rivera",
      pronoun: "She/Her",
      school: "CSU East Bay",
      graduationYear: 0,
      favoriteColor: ""
    },
    {
      f: "Aidan",
      l: "Fuller",
      pronoun: "He/Him",
      school: "",
      graduationYear: 0,
      favoriteColor: ""
    },
    {
      f: "kyle",
      l: "wan",
      pronoun: "He/Him",
      school: "",
      graduationYear: 0,
      favoriteColor: ""
    },
    {
      f: "Enjun",
      l: "Li",
      pronoun: "He/Him",
      school: "",
      graduationYear: 0,
      favoriteColor: ""
    },
    {
      f: "Luis",
      l: "Garcia",
      pronoun: "He/Him",
      school: "CSU East Bay",
      graduationYear: 0,
      favoriteColor: ""
    },
    {
      f: "Amanda",
      l: "Yu",
      pronoun: "She/Her",
      school: "Oakland Technical High School",
      graduationYear: 0,
      favoriteColor: ""
    },
    {
      f: "Yifei",
      l: "Du",
      pronoun: "He/Him",
      school: "",
      graduationYear: 0,
      favoriteColor: ""
    },
    {
      f: "Hector ",
      l: "Del Valle",
      pronoun: "He/Him",
      school: "",
      graduationYear: 0,
      favoriteColor: ""
    },
    {
      f: "HaoYu",
      l: "Lin",
      pronoun: "He/Him",
      school: "Oakland Technical High School",
      graduationYear: 0,
      favoriteColor: ""
    }
  ];

  return (
    <div className="App">
      <h1>Hello Team</h1>
      <h2>Start editing to see some magic happen!</h2>
      {objects.map(function (obj) {
        return (
          <div>
            <div>
              Name: {obj.f} {obj.l}
            </div>
            <div>Pronoun: {obj.pronoun}</div>
            <div>School: {obj.school}</div>
            <div>Graduation Year: {obj.guaduationYear}</div>
            <div>Favorite Color: {obj.favoriteColor}</div>
            <p></p>
          </div>
        );
      })}
    </div>
  );
}
