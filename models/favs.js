module.exports = function(sequelize, DataTypes) {
    var favs = sequelize.define('favs', {
        
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        title: {
            type: DataTypes.STRING,
            notEmpty: true
        },
       
        ingredients: {
            type: DataTypes.TEXT,
            notEmpty: true
        },
       
        userID:
        {
            type: DataTypes.INTEGER,
            notEmpty: true, 
        }
    });
    favs.associate = function(models) {
        favs.belongsTo(models.user, {
            foreignKey: "userId",
            allowNull: false
        });
    };
    
    return favs;

}