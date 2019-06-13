module.exports = (sequelize, DataTypes) => {
    var apiResults = sequelize.define('aptResults', {
        
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
    });

    return apiResults;

}