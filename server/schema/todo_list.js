/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('todo_list', {
    todo_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    todo_content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'todo_list'
  });
};
