/* eslint-disable prettier/prettier */
const index = (req, res) => {
  res.render('index', {
    // eslint-disable-next-line prettier/prettier
    title: 'ProjNotes',
  });
};

const greeting = (req, res) => {
  res.status(200).json({
    message: 'Hola campeon FullStack',
  });
};

export default {
  index,
  greeting,
};
