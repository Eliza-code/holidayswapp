const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
<<<<<<< HEAD
    return sequelize.define("user", {
=======
   return sequelize.define("user", {
>>>>>>> a30ba215bcbe48915c09012904e193778b349b51
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
<<<<<<< HEAD
            primaryKey: true
=======
            pprimaryKey: true,
>>>>>>> a30ba215bcbe48915c09012904e193778b349b51
        },
        googleId: {
            type: DataTypes.STRING,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        profilePicture: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
<<<<<<< HEAD
        phoneNumber: {
            type: DataTypes.INTEGER,
        },  
=======
        // phoneNumber: {
        //     type: DataTypes.INTEGER,
        // },  
>>>>>>> a30ba215bcbe48915c09012904e193778b349b51
        dateOfBirth: {
            type: DataTypes.DATE,
        },
        nacionality: {
            type: DataTypes.STRING,
        },
        languagesSpoken: {
            type: DataTypes.STRING,
        },
        points: {
            type: DataTypes.INTEGER,
            defaultValue: 500,
        },
    });
};
