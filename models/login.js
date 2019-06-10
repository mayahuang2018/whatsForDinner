module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the User model a name of type STRING
      username: DataTypes.STRING,
      password: DataTypes.STRING
    });
  
    // User.associate = function(models) {
    //   // Associating Author with Posts
    //   // When an Author is deleted, also delete any associated Posts
    //   User.hasMany(models.shoppinglist, models.recipes, {
    //     onDelete: "cascade"
    //   });
    // };
  
    return User;
  };