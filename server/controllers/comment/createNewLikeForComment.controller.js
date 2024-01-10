const Comment = require('../../database/model/comment.model');

exports.createNewLikeForCommentController = async (req, res) => {
  const id = req.params.id;  
  
  const commentFound = Comment.find({ id: id });
  commentFound.likes += 1;
  
  Comment.findByIdAndUpdate(id, commentFound);
  
  return res.status(200);
};