const express = require('express');

const router = express.Router();

router.use(express.json());

const Actions = require('../data/helpers/actionModel');

router.get('/:id', (req, res) => {
  Actions.get(req.params.id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(() => {
      rex.status(500).json({ message: 'Error retreiving actions' });
    });
});

router.delete('/:id', (req, res) => {
  Actions.remove(req.param.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: 'The action has been destroyed' });
      } else {
        res.status(404).json({ message: 'The action could not be found' });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Error removing the action' });
    });
});

router.put('/:id', (req, res) => {
  Actions.update(req.params.id, req.body)
    .then(action => {
      if (action) {
        res.status(200).json(action);
      } else {
        res.status(404).json({ message: 'The action could not be found' });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Error updating the action' });
    });
});

module.exports = router;
