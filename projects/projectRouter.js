const express = require('express');

const router = express.Router();

router.use(express.json());

const Projects = require('../data/helpers/projectModel');
const Actions = require('../data/helpers/actionModel');

router.get('/', (req, res) => {
  Projects.get(req.query)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(() => {
      res.status(500).json({ message: 'Error retrieving projects' });
    });
});

router.get('/:id', (req, res) => {
  Projects.get(req.params.id)
    .then(found => {
      res.status(200).json(found);
    })
    .catch(() => {
      res.status(500).json({ message: 'Error retrieving actions' });
    });
});

router.get('/id/actions', (req, res) => {
  Projects.getProjectActions(req.params.id)
    .then(project => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ message: 'Project not found' });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Error retrieving the project' });
    });
});

router.post('/', (req, res) => {
  Projects.insert(req.body)
    .then(newProject => {
      res.status(200).json(newProject);
    })
    .catch(() => {
      res.status(500).json({ message: 'Error adding project' });
    });
});

router.post('/:id/actions', (req, res) => {
  Actions.insert(...req.body, (project_id = req.params.id))
    .then(newAction => {
      res.status(201).json(newAction);
    })
    .catch(() => {
      res.status(500).json({ message: 'Error adding project' });
    });
});

module.exports = router;
