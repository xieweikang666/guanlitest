/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('user_login', {
    userid: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    userpasswd: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
      tableName: 'user_login'
    });
};
