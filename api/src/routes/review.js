const { Router } = require('express');
const express = require('express');


const getAnnouncementReviews = require('../controllers/review/getAnnouncementReviews');
const getUserReviews = require('../controllers/review/getUserReviews');
const readReview = require('../controllers/review/readReview');
const createReview = require('../controllers/review/createReview');
const updateReview = require('../controllers/review/updateReview');
const deleteReview = require('../controllers/review/deleteReview');

const router = Router();
router.use(express.json());

router.post('/', createReview);
router.get('/getAnnouncement/:id', getAnnouncementReviews);
router.get('/getUser/:id', getUserReviews);
router.get('/readReview/:id', readReview);
router.put('/updateReview/:id', updateReview);
router.delete('/deleteReview/:id', deleteReview);






module.exports = router;


