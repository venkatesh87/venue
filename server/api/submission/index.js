'use strict';

import {Router} from 'express';
import * as controller from './submission.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/', auth.isAuthenticated(), controller.index);
router.get('/image/:userId/:eventId/:name', controller.image);
router.get('/image/:userId/:eventId/:size/:name', controller.imageSize);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.update);
router.patch('/:id', auth.isAuthenticated(), controller.update);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);

export default router;
