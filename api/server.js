var express = require('express');
var router = express.Router();

router.get('/api', function (req, res) {
    res.send('API is running');
});

app.listen('8081', function(){
  console.log('Express server listening on port')
})