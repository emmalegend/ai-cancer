export default {
  dialect: "postgresql",
  schema: "./src/utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: import.meta.env.VITE_POSTGRE_CONNECTION_STRING,
    connectionString: import.meta.env.VITE_POSTGRE_CONNECTION_STRING,
  },
};
