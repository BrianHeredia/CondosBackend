module.exports = (sequelize, Sequelize) => {
	const Likes = sequelize.define('likes', {
		isLike: {
            type: Sequelize.BOOLEAN
        }
	},{
		timestamps: false
	});
	return Likes;
}