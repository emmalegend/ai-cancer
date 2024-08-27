export default {
  dialect: "postgresql",
  schema: "./src/utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://neondb_owner:1YedvORiTNL9@ep-fancy-wave-a519u6h0.us-east-2.aws.neon.tech/cancer-ai?sslmode=require",
    connectionString:
      "postgresql://neondb_owner:1YedvORiTNL9@ep-fancy-wave-a519u6h0.us-east-2.aws.neon.tech/cancer-ai?sslmode=require",
  },
};
