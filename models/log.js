module.exports = function(sequelize, DataTypes) {
	return sequelize.define('log', {
		log: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});
};