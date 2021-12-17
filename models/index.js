const User = require('./User');
const Post = require("./Post");
const Comment = require('./Comment');


//associations

//each user had many posts found by Post having the given user_id
User.hasMany(Post, {
    foreignKey: "user_id"
});

//each post belongs to a single user, found by ehich user_id is connected to that post
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

//each comment belongs to a single user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

//each comment belongs to as single post
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

//user has many comments
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

//posts have many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };