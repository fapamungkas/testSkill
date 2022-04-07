var data = [
  { type: "Foo", year: 1995 },
  { type: "Bar", year: 1993 },
  { type: "Foobar", year: 2020 },
];

const type = ["Foo", "Bar", "Foobar"];
const sorter = (a, b) => {
  if (a.year !== b.year) {
    return a.year - b.year;
  } else {
    return type.indexOf(a.month) - type.indexOf(b.type);
  }
};
data.sort(sorter);
console.log(data);
