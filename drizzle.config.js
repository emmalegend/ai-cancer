export default {
  dialect: "postgresql",
  schema: "./src/utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.VITE_POSTGRE_CONNECTION_STRING,
    connectionString: process.env.VITE_POSTGRE_CONNECTION_STRING,
  },
};
