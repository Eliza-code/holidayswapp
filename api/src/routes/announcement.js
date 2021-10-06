const { Router } = require('express');
const express = require('express');


const getAllOrByLocation = require('../controllers/announcement/getAllOrByLocation');
const getAnnouncementById = require('../controllers/announcement/getAnnouncementById');
const createAnnouncement = require('../controllers/announcement/createAnnouncement');
const updateAnnouncement = require('../controllers/announcement/updateAnnouncement');
const deleteAnnouncement = require('../controllers/announcement/deleteAnnouncement');


const router = Router();
router.use(express.json());

router.get('/', getAllOrByLocation);
router.get('/:id', getAnnouncementById);
router.post('/', createAnnouncement);
router.put('/:id', updateAnnouncement);
router.delete('/:id', deleteAnnouncement);

module.exports = router;

