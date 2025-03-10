const Order = require("../../models/Order");

module.exports = GetAllClothes = async (req, res) => {
  try{
    if(req.user){
      const orders = await Order.find({user:req.user.id}).populate([
        { path: 'clothes', select: ['title', 'price'] }
      ])
      res.status(200).json({orders})
    }else{
        res.status(401).json({message:"Not Authenticated"})
    }
  }catch(err){
    res.status(400).json({err:err.message})
  }
};
