// eslint-disable-next-line prettier/prettier
import {Router} from 'express';

import home from './home';

const router = new Router();

// Get home  page.

router.get('/', home);

// eslint-disable-next-line prefer-arrow-callback
router.get('/greeting', function (req, res, next) {
  res.status(200).json({ message: 'hola campeon de  la fullstack web' });
});

module.exports = router;
