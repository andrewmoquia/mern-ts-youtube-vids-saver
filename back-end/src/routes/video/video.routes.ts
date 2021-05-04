import { Router } from 'express';
import * as videoControl from './video.controller';

const router = Router();

router.post('/videos', videoControl.createVideo);

router.get('/videos', videoControl.getVideos);

router.get('/videos/:id', videoControl.getVideo);

router.put('/videos/:id', videoControl.updateVideo);

router.delete('/videos/:id', videoControl.deleteVideo);

export default router;