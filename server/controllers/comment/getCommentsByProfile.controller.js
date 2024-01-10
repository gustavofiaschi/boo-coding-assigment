const Comment = require('../../database/model/comment.model');

exports.getCommentsByProfileController = async (req, res) => {
    const id = req.params.id;
    const sortCriteria = req.params.sort ?? 'createdAt'; //or likes 
    const sort = { [sortCriteria]: -1 };

    const commentsFound = Comment.find({ profileId: id }).sort(sort);
    
    res.status(200);
    return commentsFound;
  };