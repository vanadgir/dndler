import getDatabaseURL from "./config/getDatabaseURL.js";

export default {
  client: "pg",
  useNullAsDefault: true,
  connection: getDatabaseURL(process.env.NODE_ENV || "development"),
  migrations: {
    directory: "db/migrations",
    extension: "cjs",
    stub: "db/migrations/migration.stub.cjs",
  }
}