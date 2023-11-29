export default () => ({
  port: parseInt(process.env.PORT || '3000', 10),
  jwt: {
    secret: process.env.JWT_SECRET || 'mysupersecretjwt',
    expires: process.env.JWT_EXPIRES || '9999 years',
  },
  database: {
    host:
      process.env.DATABASE_HOST ||
      'mongodb+srv://devops:mongopw@cluster0.qukc7qc.mongodb.net/test?retryWrites=true&w=majority',
    port: parseInt(process.env.DATABASE_PORT || '27017', 10),
    name: process.env.DATABASE_NAME || 'veladie',
  },
});
