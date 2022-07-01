function extractTableData(dbCommand) {
  const regExp = /create\s+table\s+(\w+)\s*\(((\w+\s+\w+\s*\,*\s*){1,})\)/;
  let result = regExp.exec(dbCommand);
  console.log(result);
  const tableName = result[1];
  console.log(`tableName: ${tableName}`);
  const fieldsList = result[2];
  const rawColumns = fieldsList.split(",");
  const columns = extractColumns(rawColumns);
  console.log("columns = ");
  console.log(columns);

  return {
    tableName,
    columns,
  };
}

function extractColumns(rawColumns) {
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

const dbCommand =
  "create table author (id number, name string, age number, city string, state string, country string)";
const database = {
  tables: {},
};
const { tableName, columns } = extractTableData(dbCommand);
database.tables[tableName] = {
  columns,
  data: [],
};

console.log(`Database command:\n${dbCommand}`);
console.log("Result:");
console.log(JSON.stringify(database, null, "  "));
