import { Router } from "express";
import { RegisterDevice, Feedback, GetAllDevices, QuickHelp, RatingTeams } from '../api/controller/hackathonController';

let hackathonRoutes = () => {
  const router = Router();
  
  /* Register Device */
  router.post('/register', (req, res, next) => {
    RegisterDevice(req, res, next);
  });

  /* Getting all devices */
  router.get('/getDevices', (req, res) => {
    GetAllDevices(req, res);
  });

  /* Feedback */
  router.post('/feedback', (req, res) => {
    Feedback(req, res);
  });

  /* Rating */
  router.post('/rating', (req, res) => {
    RatingTeams(req, res);
  });

  /* SOS (Quick help) */
  router.post('/sos', () => {
    QuickHelp(req, res);
  });

  return router;
} 

export default hackathonRoutes;
