module.exports = (app) => {
const notes = require('../../controller/controller');

app.post('/add', notes.create);
app.get('/notes', notes.findAll);
app.delete(`/delete_item/:id`,notes.delete_it);
app.put(`/update_item/:id`,notes.update_it);
}