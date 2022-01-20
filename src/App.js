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

  //info on the class
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
      school: "Oakland Technical High",
      graduationYear: 2022,
      favoriteColor: "blue"
    },
    {
      f: "Ana",
      l: "Rivera",
      pronoun: "She/Her",
      school: "CSU East Bay",
      graduationYear: 2051,
      favoriteColor: "Green"
    },
    {
      f: "Aidan",
      l: "Fuller",
      pronoun: "He/Him",
      school: "Oakland Technical High",
      graduationYear: 2023,
      favoriteColor: "Red"
    },
    {
      f: "kyle",
      l: "wan",
      pronoun: "He/Him",
      school: "Oakland Technical",
      graduationYear: 2023,
      favoriteColor: "yeah."
    },
    {
      f: "Enjun",
      l: "Li",
      pronoun: "He/Him",
      school: "John O' Connell",
      graduationYear: 2022,
      favoriteColor: "black"
    },
    {
      f: "Luis",
      l: "Garcia",
      pronoun: "He/Him",
      school: "CSU East Bay",
      graduationYear: 2025,
      favoriteColor: "Black"
    },
    {
      f: "Amanda",
      l: "Yu",
      pronoun: "She/Her",
      school: "Oakland Technical High",
      graduationYear: 2022,
      favoriteColor: "blue"
    },
    {
      f: "Yifei",
      l: "Du",
      pronoun: "He/Him",
      school: "Balboa HS",
      graduationYear: 2022,
      favoriteColor: "Black"
    },
    {
      f: "Hector ",
      l: "Del Valle",
      pronoun: "He/Him",
      school: "John O'Connell High",
      graduationYear: 2022,
      favoriteColor: "Gray"
    },
    {
      f: "HaoYu",
      l: "Lin",
      pronoun: "He/Him",
      school: "Oakland Technical High",
      graduationYear: 2023,
      favoriteColor: "Red"
    }
  ];

  return (
    <div className="App">
      <h1>Code Nation: The Team List</h1>
      <div class="body">
        {objects.map(function (obj) {
          return (
            <div class="peopleC">
              <div>
                <b>Name:</b> {obj.f} {obj.l}
              </div>
              <div>
                <b>Pronoun:</b> {obj.pronoun}
              </div>
              <div>
                <b>School:</b> {obj.school}
              </div>
              <div>
                <b>Graduation Year:</b> {obj.graduationYear}
              </div>
              <div>
                <b>Favorite Color:</b> {obj.favoriteColor}
              </div>
              <p></p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
