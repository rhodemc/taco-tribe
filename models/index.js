// import models
const User = require('./User');
const BlogPost = require('./BlogPost');

// Tacos belongsTo BlogPost
// Is foreignkey shop_id?
BlogPost.belongsTo(User, {
  foreignKey: 'user_id',
});

// BlogPost have many Tacos
User.hasMany(BlogPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = {
  User,
  BlogPost,
};
