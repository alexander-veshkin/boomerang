const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Score, { foreignKey: 'user_id' });
    }
  }
  User.init({
    nickname: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
