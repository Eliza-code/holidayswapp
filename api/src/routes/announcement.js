const { Router } = require('express');
const express = require('express');


const createAnnouncement = require('../controllers/announcement/createAnnouncement');
const deleteAnnouncement = require('../controllers/announcement/deleteAnnouncement');
const getAllOrByLocation = require('../controllers/announcement/getAllOrByLocation');
const updateAnnouncement = require('../controllers/announcement/updateAnnouncement');
const getAnnouncementById = require('../controllers/announcement/getAnnouncementById');


const router = Router();
router.use(express.json());

router.get('/', getAllOrByLocation);
router.post('/', createAnnouncement);
router.delete('/:id', deleteAnnouncement);
router.put('/:id', updateAnnouncement);
router.get('/:id', getAnnouncementById);

module.exports = router;

