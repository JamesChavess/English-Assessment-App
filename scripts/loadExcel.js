import {circularProgressBar} from './progressBar.js';


let name = prompt("Digita tu Nombre bro");

export const PrintData = (data) => {
  let fileReader = new FileReader();
  fileReader.readAsBinaryString(data);
  fileReader.onload = (e) => {
    let data = e.target.result,
      workbook = XLSX.read(data, { type: "binary" });
    let results = [];
    workbook.SheetNames.forEach((sheet) => {
      let rowObject = XLSX.utils.sheet_to_row_object_array(
        workbook.Sheets[sheet]
      );
      results.push(rowObject);
    });
    let dataXlsx = results[0].find((x) => x["Name"] == name);
    circularProgressBar(dataXlsx["Comprehension"], "Comprehension", "purple");
    circularProgressBar(dataXlsx["Fluency"], "Fluency", "orange");
    circularProgressBar(
      dataXlsx["Sentence Structure"],
      "Sentence Structure",
      "blue"
    );
    circularProgressBar(dataXlsx["Pronunciation"], "Pronunciation", "#43CC2D");
    circularProgressBar(dataXlsx["Monolingualism"], "Monolingualism", "red");
    circularProgressBar(dataXlsx["Spelling"], "Spelling", "teal");
    circularProgressBar(
      dataXlsx["Over All English"],
      "Over All English",
      "blue"
    );
  };
};

export const getData = async () => {
  await fetch("./assets/testResult.xlsx")
    .then((res) => res.blob())
    .then((data) => {
      PrintData(data);
    });
};

