const Sequelize = require("sequelize");
const sequelize = require("./util/database");

const Country = sequelize.define(
  "country",
  {
    countryName: {
      type: Sequelize.STRING,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

const Capital = sequelize.define(
  "capital",
  {
    capitalName: {
      type: Sequelize.STRING,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

Country.hasOne(Capital);
sequelize
  .sync({ alter: true })
  .then(() => {
    return Country.findOne({ where: { countryName: "Spain" } });
  })
  .then((country) => {
    return country.getCapital();
  })
  .then((capital) => {
    console.log(capital, "getCapital");
  })
  .catch((err) => {
    console.log(err);
  });
