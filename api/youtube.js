const { default: axios } = require('axios');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors, express.json());

app.get('/api/youtube', async (req, res) => {
  let { q } = req.query;
  let params = new URLSearchParams({
    vt: 'home',
    q,
  });
  const { data } = await axios({
    method: 'POST',
    url: 'https://yt1s.com/api/ajaxSearch/index',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    data: params.toString(),
  });
  res.json(data);
});

module.exports = app;
