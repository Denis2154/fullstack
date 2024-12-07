const app = require('./app');

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {

})

.then(() => {
  console.log('Подключение к базе данных успешно!');

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
})
.catch((error) => {
  console.error(' Ошибка подключения к базе данных:', error);
});

