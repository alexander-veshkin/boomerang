const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Enemy extends Model {
    static associate(models) {
    }
  }
  Enemy.init({
    name: DataTypes.STRING,
    emoji: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Enemy',
  });
  return Enemy;
};
