const express = require('express');
const router = express.Router();

//message model

const Message = require('../../models/Messages');
//get api messages
router.get('/', (req, res) => {
    Message.find()
        .sort({ date: -1 })
        .then(messages => res.json(messages));
})

//post api messages
//create message
router.post('/', (req, res) => {
    const newMessage = new Message({
        name: req.body.name
    });
    newMessage.save().then(message => res.json(message));
});

//delete api messages/:id

router.delete('/:id', (req, res) => {
    Message.findById(req.params.id)
        .then(message => message.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
})


module.exports = router;