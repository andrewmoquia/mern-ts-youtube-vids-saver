import { RequestHandler } from 'express';
import Video from './video';
import mongoose from 'mongoose';

mongoose.set('useFindAndModify', false);

export const createVideo: RequestHandler = async (req, res) => {
    try {
        const videoFound = await Video.findOne({ url: req.body.url });
        if (videoFound) {
            return res.status(301).json({ message: 'The URL is already exist!' });
        };
        const video = new Video(req.body);
        const saveVideo = await video.save();
        res.json(saveVideo);
    } catch (error) {
        console.log(error);
    };
};

export const getVideos: RequestHandler = async (req, res) => {
    try {
        const video = await Video.find();
        res.json(video);
    } catch (error) {
        console.log(error);
    };
};

export const getVideo: RequestHandler = async (req, res) => {
    try {
        const videoFound = await Video.findById(req.params.id);
        res.json(videoFound);
    } catch (error) {
        return res.status(301).json({message: "URL does not exist!"});
    };
};

export const updateVideo: RequestHandler = async (req, res) => { 
    try {
        const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.json(videoUpdated);
    } catch (error) {
        return res.status(301).json({ message: "URL does not exist!" });
    };
};

export const deleteVideo: RequestHandler = async (req, res) => {
    try {
        const videoFound = await Video.findByIdAndDelete(req.params.id);
        if (!videoFound) {
            return res.status(301).json({ message: "URL does not exist!" });
        };
        res.json(videoFound);
    } catch (error) {
        console.log(error);
    };
};