module.exports = (sequelize, DataTypes) => {
    var shoppingList = sequelize.define('shoppingList', {
        
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        ingredients: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // ingredient2: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // ingredient3: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // ingredient4: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // ingredient5: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },

        // addToList: {
        //     type: DataTypes.BOOLEAN,
        //     defaultValue: false
        // }
    });

    return shoppingList;

}