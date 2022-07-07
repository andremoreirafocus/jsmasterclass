const dbCommand =
  "create table author (id number, name string, age number, city string, state string, country string)";

function extractTableName(command) {
  const tableName = command.split(" ")[2];
  // console.log(tableName);
  return tableName;
}

function extractColumns(command) {
  const columnDefinitions = command.split("(")[1].split(")")[0];
  // console.log(columnDefinitions);
  const rawColumns = columnDefinitions.split(",");

  const columns = {};
  for (let rawColumn of rawColumns) {
    let column = rawColumn.trim();
    let key = column.split(" ")[0];
    let value = column.split(" ")[1];
    columns[key] = value;
    // console.log(columns);
  }
  // console.log(columns);
  return columns;
}

const database = {
  tables: {},
};

const tableName = extractTableName(dbCommand);
const columns = extractColumns(dbCommand);
const data = [];
database.tables[tableName] = {
  columns,
  data,
};

console.log(`Database command:\n${dbCommand}`);
console.log("Result:");
console.log(JSON.stringify(database, null, "  "));
