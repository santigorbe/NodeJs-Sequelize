import Sequelize from "sequelize";

export const sequelize = new Sequelize("projects_db", "postgres", "051825", {
  host: "localhost",
  dialect: "postgres",
});
