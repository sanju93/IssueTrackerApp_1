const express = require('express');
const router = express.Router();
const Home_Controller = require('../controller/Home');

router.get('/',Home_Controller.home);
router.post('/create_project',Home_Controller.createProject);
router.get('/projects',Home_Controller.fetchProjects);
router.get('/create_issue/:id',Home_Controller.getIssue);
router.post('/create_issue',Home_Controller.createIssue);
router.get('/get_issues/:id',Home_Controller.getIssues);



router.delete(`/resolve_issue/:id`,Home_Controller.resolveIssue);
router.delete(`/delete_project/:id`,Home_Controller.deleteProject);




module.exports = router;