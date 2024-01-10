const Comment = require('../../database/model/comment.model');

exports.createNewCommentController = async (req, res) => {
    const comment = req.body;

    const newComment = new Comment(comment);
    newComment.save();

    res.redirect('/comments/' + newComment.profileId);
  };