const {response}= require('express')

const userGet= (req, res=response) => {
  //query paramns
  const {name, key, apikey}= req.query;

    res.json({
      msg: "get API -controller",
      name,
      key,
      apikey
    });
  }
const userPost =(req, res=response) => {
    const {nombre, edad}= req.body;
    
    res.json({
      msg: "post API- controller",
      nombre,
      edad
    });
  }
  const userPut=  (req, res=reponsive) => {
    const id= req.params.id;
    res.json({
      msg: "put API- controller",
      id
    });
  }
const userDelete= (req, res=response) => {
    res.json({
      msg: "delete API-controller",
    });
  }
const userPatch= (req, res=response) => {
    res.json({
      msg: "patch API-controller",
    });
  }



  module.exports={
      userGet,
      userPut,
      userPost,
      userDelete,
      userPatch
  }