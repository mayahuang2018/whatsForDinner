module.exports = function(sequelize, DataTypes) {
    var results = sequelize.define('results', {
        
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        title: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        link: {
            type: DataTypes.STRING,
            notEmpty: false
        },
        ingredients: {
            type: DataTypes.TEXT,
            notEmpty: true
        },
        thumbnail: {
            type: DataTypes.STRING,
            notEmpty: false
        },
        user_id:
        {
            type: DataTypes.INTEGER,
            allowNull: false, 
        }
    });
    results.associate = function(models) {
        results.belongsTo(models.user, {
            foreignKey: "user_id",
            allowNull: false
        });
    };
    
    return results;

}