const { Router } = require('express');
const express = require('express');


const getAnnouncementReviews = require('../controllers/review/getAnnouncementReviews');
const getUserReviews = require('../controllers/review/getUserReviews');
const readReviews = require('../controllers/review/readReview');
const createReview = require('../controllers/review/createReview');
const updateReview = require('../controllers/review/updateReview');
const deleteReview = require('../controllers/review/deleteReview');

const router = Router();
router.use(express.json());

router.get('/announcement/:id', getAnnouncementReviews);
router.get('/user/:id', getUserReviews);
router.get('/read/:id', readReviews);
router.post('/', createReview);
router.put('/:id', updateReview);
router.delete('/:id', deleteReview);






module.exports = router;


