module.exports = {
  client: "pg",
  useNullAsDefault: true,
  connection: "postgres://postgres:postgres@localhost:5432/dndler",
  migrations: {
    directory: "db/migrations",
    extension: "cjs",
    stub: "db/migrations/migration.stub.cjs",
  }
}