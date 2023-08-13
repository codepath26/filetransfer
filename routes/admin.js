const express = require('express');
const path = require('path');
const rootDir = require('../util/path')
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views','add-product.html'));
});
// / admin/contact-us 
router.get('/contactus', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views','contactus.html'));
});
// /admin/add-product => POST


router.post('/contactus', (req, res, next) => {
  console.log(req.body);
  res.redirect('/success');
});
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});
router.post('/success', (req, res, next) => {
 res.sendFile(path.join(rootDir , 'views' , 'success.html'))
});
module.exports = router;
