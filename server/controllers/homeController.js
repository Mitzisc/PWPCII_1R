/* eslint-disable prettier/prettier */
const index = (req, res) => {
  res.render('home/index', {
    title: 'ProjNotes',
  });
};

const greeting = (req, res)=>{
    res.status(200).json({
        message: 'Hola Champeon  del FullStack Web',
    });
};

const about = (req, res)=>{
  res.render('home/about', {title: "Acercaa de prodjnotes"});
};



export default {
  index,
  greeting,
  about,
};
