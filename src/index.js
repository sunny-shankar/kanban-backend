const app = require("./app");
const { sequelize } = require("./models");

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    /* eslint-disable no-console */
    console.log(`App Listening on PORT ${port}`);

    /* eslint-enable no-console */
  } catch (err) {
    console.log({ error: err.message });
  }
});
