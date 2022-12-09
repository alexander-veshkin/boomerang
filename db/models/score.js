const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Score extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  Score.init({
    user_id: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    time: DataTypes.TIME,
  }, {
    sequelize,
    modelName: 'Score',
  });
  return Score;
};
