module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', { // MySQL에는 users 테이블 생성
        // id는 자동 생성
        email: {
            type: DataTypes.STRING(30),
            allowNull: false, // 필수
            unique: true, // 고유한 값
        },
        nickname: {
            type: DataTypes.STRING(30),
            allowNull: false, 
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false, 
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글 저장
    });
    User.associate = (db) => {
        db.User.hasMany(db.Post); // 사람이 포스트를 여러개 가질 수 있다
        db.User.hasMany(db.Comment);
        db.User.belongsToMany(db.Post, { through : 'Like', as: 'Liked' });
        db.User.belongsToMany(db.User, { through : 'Follow', as: 'Followers', foreignKey: 'FollowingId' });
        db.User.belongsToMany(db.User, { through : 'Follow', as: 'Followings', foreignKey: 'FollowerId' });
    };

    return User;
}