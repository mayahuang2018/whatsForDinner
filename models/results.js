module.exports = function(sequelize, DataTypes) {
    var apiResults = sequelize.define('apiResults', {
        
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
        userID:
        {
            type: DataTypes.INTEGER,
            notEmpty: true, 
        }
    });

    apiResults.associate = function(models) {
        apiResults.belongsTo(models.user, {
            foreignKey: "userId",
            allowNull: false
        });
    };
    

    return apiResults;

}