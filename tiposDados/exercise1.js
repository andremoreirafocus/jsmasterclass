const input =
  "create  table  author(id number, name string, age number, city string, state string, country string)";
// "create table author (id number,)";
// "create table author (id number , name string)";
// console.log("Using string API:");
// const [tableDescription, fieldsList] = input.replace(")", "").split("(");
// // console.log(tableDescription);
// const tableName = input.split(" ")[2];
// console.log(`tableName: ${tableName}`);
// // console.log(fieldsList);
// const columns = fieldsList.split(",");
// console.log("columns = ");
// console.log(columns);
console.log("Using regexp");
const regExp = /create\s+table\s+(\w+)\s*\(((\w+\s+\w+\s*\,*\s*){1,})\)/;
let result = regExp.exec(input);
console.log(result);
const tableNameRegExp = result[1];
console.log(`tableName: ${tableNameRegExp}`);
const fieldsListRegExp = result[2];
const columnsRegExp = fieldsListRegExp.split(",");
console.log("columns = ");
console.log(columnsRegExp);
//outra forma de extrair as partes
const parsedStatement = input.match(regExp);
console.log(parsedStatement);
const tableNameRegExp2 = parsedStatement[1];
console.log(`tableName: ${tableNameRegExp2}`);
const fieldsListRegExp2 = parsedStatement[2];
const columnsRegExp2 = fieldsListRegExp2.split(",");
console.log("columns = ");
console.log(columnsRegExp2);
