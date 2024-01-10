'use strict';

const express = require('express');
const router = express.Router();

const {
  createNewProfileController,
  renderProfileController,
} = require('../controllers/profile');

const {
  createNewCommentController,
  createNewLikeForCommentController,
  getCommentsByProfileController,
} = require('../controllers/comment');

const profiles = [
  {
    "id": 1,
    "name": "A Martinez",
    "description": "Adolph Larrue Martinez III.",
    "mbti": "ISFJ",
    "enneagram": "9w3",
    "variant": "sp/so",
    "tritype": 725,
    "socionics": "SEE",
    "sloan": "RCOEN",
    "psyche": "FEVL",
    "image": "https://soulverse.boo.world/images/1.png",
  }
];

module.exports = function() {

  router.get('/profile/:id', renderProfileController);
  router.post('/profile/create', createNewProfileController);

  router.get('/comment/:id', getCommentsByProfileController);
  router.post('/comment/create', createNewCommentController);
  router.post('/comment/like/:id', createNewLikeForCommentController);

  return router;
}

