module.exports = (sequelize, Sequelize) => {
	const Likes = sequelize.define('likes', {
		isLike: {
            type: Sequelize.BOOLEAN
        }
	});
	return Likes;
}