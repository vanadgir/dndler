const getDatabaseURL = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/dndler",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

export default getDatabaseURL;
