const router = require('express').Router();

const { 
  getAllThoughts,
  getThoughtById,
  addThought, 
  updateThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller')

// /api/thoughts/
router
  .route('/')
  .get(getAllThoughts)
  .post(addThought)
  .put(updateThought)
  .delete(removeThought);
  
  // /api/thoughts/<id>
router
  .route('/:id')
  .get(getThoughtById)

router
  .route('/api/thoughts/:thoughtId/reactions')
  .post(addReaction);

router
  .route('/api/thoughts/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;