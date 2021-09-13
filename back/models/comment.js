module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        // id는 자동 생성
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        // UserId: {}, => belongsTo가 만들어줌.
        // PostId: {},
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', 
    });
    Comment.associate = (db) => {
        db.Comment.belongsTo(db.User);
        db.Comment.belongsTo(db.Post);
    };

    return Comment;
}