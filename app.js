var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var gm = require('gm');

app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/home.html');
});

// GET method route
app.get('/resize/:in-:out', function (req, res) {
  console.log(req.params);
  res.send(req.params.in + '\n' + req.params.out);

});
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.post('/resize', function (req, res) {
  console.log(req.body);
  var p = req.body;
  if (p.inPath && p.outPath && (p.width ? p.width : p.height)) //最少需要这三个参数
  {
    gm(p.inPath).resize(p.width, p.height, p.aspectRatio)
      .write(p.outPath, function (gmerr) {
        if (!gmerr)
          res.json('转换成功');
        else
          res.send('转换失败，错误信息: ' + JSON.stringify(gmerr));
      });
  }
  else
    res.send('请至少提供 inPath, outPath, width 三个属性作为参数');

});
app.listen(3001, function () {
  console.log('Thumbnails is listening on port 3001!');
});