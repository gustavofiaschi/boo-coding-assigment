const Profile = require('../../database/model/profile.model');

exports.renderProfileController = async (req, res) => {
    const id = req.params.id;
    
    const profileFound = Profile.find({ id: id });
    
    res.render('profile_template', {
      profile: profileFound,
    });
  };