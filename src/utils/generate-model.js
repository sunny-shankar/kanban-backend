const SequelizeAuto = require("sequelize-auto");
const auto = new SequelizeAuto(
  "qulshhqm",
  "qulshhqm",
  "CWRJprGCsG1FDP-zlVrxYW7OlKXbhw5C",
  {
    host: "batyr.db.elephantsql.com",
    dialect: "postgres",
    directory: "./src/models", // where to write files
    port: "5432",
    // caseModel: 'c', // convert snake_case column names to camelCase field names: user_id -> userId
    // caseFile: 'c', // file names created for each model use camelCase.js not snake_case.js
    singularize: true, // convert plural table names to singular model names
    additional: {
      timestamps: false,
    },
    tables: ["users", "tasks", "lists"],
  }
);

auto.run().then((data) => {
  console.log(data.tables); // table and field list
  console.log(data.foreignKeys); // table foreign key list
  console.log(data.indexes); // table indexes
  console.log(data.hasTriggerTables); // tables that have triggers
  console.log(data.relations); // relationships between models
  console.log(data.text); // text of generated models
});
