import express from 'express';
import { authenticate } from '../controller/auth_controller.js';

const app = express();

app.post('/login', authenticate);
export default app;