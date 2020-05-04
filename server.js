const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.get('/api/customers',(req,res) =>{
    res.send([{
        'id':'2020192',
        'name':'mgkim',
        'image':'https://placeimg.com/64/64/any',
        'birthday':'2020192',
        'gender':'male',
        'job':'programmer'
      },
      {
        'id':'2020193',
        'name':'mgkim',
        'image':'https://placeimg.com/64/64/1',
        'birthday':'2020192',
        'gender':'male',
        'job':'programmer'
      },
      {
        'id':'2020194',
        'name':'mgkim',
        'image':'https://placeimg.com/64/64/2',
        'birthday':'2020192',
        'gender':'male',
        'job':'programmer'
      }]);
});

app.listen(port,() => console.log(`Listening on port ${port}`));