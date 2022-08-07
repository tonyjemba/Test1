// Input
const optionRule =
  "{1069} AND ({1070} OR {1071} OR {1072}) AND {1244} AND ({1245} OR {1339})";

let result = function (optionRule) {
  //check input
  if (typeof optionRule !== "string" || optionRule.length === 0) {
    return "invalid input";
  }

  //split the string using "AND"
  const and_splitted = optionRule.split("AND");

  //loop over the splittedString to find stings with "OR" and split them too
  const or_splitted = and_splitted.map((str) => {
    //if the string has OR split else return the str
    if (str.includes("OR")) {
      const splitted = str.split("OR");
      return { splitted };
    }
    return str;
  });

  //combined results
  const result = Object.assign({ ...and_splitted }, { ...or_splitted });

  //flattening the object
  const flat_result = Object.values(result).flat();

  // removing unwanted characters from strings

  const cleaned_result = flat_result.map((val) => {
    "";
    //if its a string remove the \{} and manke it a number
    if (typeof val === "string") {
      const clean = Number(val.replace(/[{}]/g, ""));
      return clean;
    }

    //if its an object make it flat and remove the unwanted digits
    const clean2 = Object.values(val)
      .flat()
      .toString()
      .replace(/[{()}\s+]/g, "")
      .split(",");
    return { or: [...clean2.map((i) => Number(i))] };// Quadratic Time complexity
  });

  //spread the result into an object
  const inObj = { and: [...cleaned_result] };

  return inObj;
};

console.log("result:", result(optionRule));
