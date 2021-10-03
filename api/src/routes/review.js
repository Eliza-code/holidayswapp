const { Router } = require('express');
const express = require('express');


const createReview = require('../controllers/review/createReview');
const getAnnouncementReviews = require('../controllers/review/getAnnouncementReviews');
const getUserReviews = require('../controllers/review/getUserReviews');

const router = Router();
router.use(express.json());

router.post('/', createReview);
router.get('/announcement/:id', getAnnouncementReviews);
router.get('/user/:id', getUserReviews);






module.exports = router;


