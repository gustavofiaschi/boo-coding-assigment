const Profile = require('../../database/model/profile.model');

exports.createNewProfileController = async (req, res) => {
    const profile = req.body;

    const newProfile = new Profile(profile);
    newProfile.save();

    res.redirect('/profile/' + newProfile.id);
  };