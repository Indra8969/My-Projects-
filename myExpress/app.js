const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api/projects', (req, res) => {
  res.json({
    projects: ["sudoku","typing test","translate","weather","calculator","snake","TicTacToe","pong"]
  })
});


app.get('/:route', (req, res) => {
  res.render(req.params.route);
});

app.listen(port, () => {
  console.log("listening at port :", port);
});
