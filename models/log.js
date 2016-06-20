module.exports = function(sequelize, DataTypes) {
	return sequelize.define('log', {
		log: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	});
};