import india from "../asserts/countryflag/india.png";
import srilanka from "../asserts/countryflag/srilanka.png";
import bhutan from "../asserts/countryflag/bhutan.png";
import nepal from "../asserts/countryflag/nepal.png";
import bangladesh from "../asserts/countryflag/bangladesh.png";
export const countryList = [
  {
    id: 1,
    name: "India",
    code: 91,
    flag: india,
    state: [
      {
        id: "1",
        name: "Tamil Nadu",
      },
      {
        id: "2",
        name: "Andhra Pradesh",
      },
      {
        id: "3",
        name: "Arunachal Pradesh",
      },
      {
        id: "4",
        name: "Assam",
      },
      {
        id: "5",
        name: "Bihar",
      },
      {
        id: "6",
        name: "Delhi",
      },
      {
        id: "7",
        name: "Goa",
      },
      {
        id: "8",
        name: "Gujarat",
      },
      {
        id: "9",
        name: "Kerala",
      },
      {
        id: "10",
        name: "Manipur",
      },
    ],
  },
  {
    id: 2,
    name: "Sri lanka",
    code: 94,
    flag: srilanka,
    state: [
      {
        id: "1",
        name: "Anuradhapura",
      },
      {
        id: "2",
        name: "Badulla",
      },
      {
        id: "3",
        name: "Batticaloa",
      },
      {
        id: "4",
        name: "Colombo",
      },
      {
        id: "5",
        name: "Galle",
      },
      {
        id: "6",
        name: "Jaffna",
      },
      {
        id: "7",
        name: "Kandy",
      },
      {
        id: "8",
        name: "Kilinochchi",
      },
      {
        id: "9",
        name: "Matara",
      },
      {
        id: "10",
        name: "Puttalam",
      },
    ],
  },
  {
    id: 3,
    name: "Bhutan",
    flag: bhutan,
    code: 975,
    state: [
      {
        id: "1",
        name: "Punakha",
      },
      {
        id: "2",
        name: "Thimphu",
      },
      {
        id: "3",
        name: "Wangdi Phodrang",
      },
    ],
  },
  {
    id: 4,
    name: "Nepal",
    flag: nepal,
    code: 977,
    state: [
      {
        id: "1",
        name: "Achham",
      },
      {
        id: "2",
        name: "Banke",
      },
      {
        id: "3",
        name: "Bhaktapur",
      },
      {
        id: "4",
        name: "Bhojpur",
      },
      {
        id: "5",
        name: "Dhawalagiri",
      },
      {
        id: "6",
        name: "Gorkha",
      },
      {
        id: "7",
        name: "Janakpur",
      },
      {
        id: "8",
        name: "Karnali",
      },
      {
        id: "9",
        name: "Lumbini",
      },
      {
        id: "10",
        name: "Mahakali",
      },
    ],
  },
  {
    id: 5,
    name: "Bangladesh",
    flag: bangladesh,
    code: 880,
    state: [
      {
        id: "1",
        name: "Azad Jammu and Kashmir",
      },
      {
        id: "2",
        name: "Balochistan",
      },
      {
        id: "3",
        name: "Gilgit-Baltistan",
      },
      {
        id: "4",
        name: "Islamabad Capital Territory",
      },
      {
        id: "5",
        name: "Khyber Pakhtunkhwa",
      },
      {
        id: "6",
        name: "Punjab",
      },
      {
        id: "7",
        name: "Sindh",
      },
      {
        id: "8",
        name: "Neelum",
      },
      {
        id: "9",
        name: "Kotli",
      },
      {
        id: "10",
        name: "Bagh",
      },
    ],
  },
];

export const allowOnlyNumber = (e, maxlength = 1) => {
  if (
    (!(e.key === "Enter") && !(e.key >= 0 && e.key <= 9)) ||
    e.target.value.length >= maxlength
  ) {
    e.preventDefault();
  }
};

export const customStyles = {
  control: (provided) => ({
    // none of react-select's styles are passed to <Control />
    ...provided,

    outline: "none",
  }),
  input: (provided) => ({
    ...provided,
  }),
  menu: (provided, state) => ({
    ...provided,
    boxShadow: "none",
    padding: 0,
    position: "absolute",
    backgroundColor: "#f9fafa",
  }),
  menuList: (provided, state) => ({
    ...provided,
    padding: 0,
  }),

  option: (provided, state) => ({
    ...provided,
    color: "black",
    backgroundColor: state.isSelected ? "#DEEBFF" : "transparent",
    margin: "0px",
    borderRadius: "0px",

    padding: "0px",
    ":hover": {
      ...provided,
      backgroundColor: "#DEEBFF",

      padding: "0px",
    },
  }),

  indicatorsContainer: (provided, state) => ({
    ...provided,
    display: "none",
  }),
};
