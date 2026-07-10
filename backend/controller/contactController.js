import * as Message from '../model/contactModel.js';

export const submitForm = async(req, res) => {
    const {name, email, subject, message} = req.body;

    try{
        await Message.create(name, email, subject, message);
        res.status(201).json({message: 'Message submitted succesfully'});
    }catch(err){
        console.error('Error in submitting form', err);
        res.status(500).json({error: 'Failed to submit the form'});
    }
};

export const allMessages = async (req, res) => {
    try {
        const messages = await Message.getAllMessages();
        res.status(200).json(messages);
    } catch (err) {
        console.error("Error fetching courses:", err);
        res.status(500).json({ error: "Failed to fetch courses" });
    }
};