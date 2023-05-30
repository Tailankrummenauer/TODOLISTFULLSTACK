const validateTitle = (req, res, next) =>{
     const {body} = req;
     if (body.titulo === undefined){
       return res.status(400).json({message: 'O campo titulo é obrigatório'})
     }else if (body.titulo === ''){
      return  res.status(400).json({message: 'Titulo nao pode ser vazio'})
     }
     next();
 }

 const validateStatus = (req, res, next) =>{
  const {body} = req;
  if (body.status === undefined){
    return res.status(400).json({message: 'O campo status é obrigatório'})
  }else if (body.status === ''){
   return  res.status(400).json({message: 'Status nao pode ser vazio'})
  }
  next();
  
}

 module.exports = {validateTitle, validateStatus};