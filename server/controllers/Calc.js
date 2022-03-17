import Calcs  from '../models/Calc';
exports.addCalc = async (req, res) => {
    const bmiuser = req.body;
    const bm = new Calcs(bmiuser);
    await bm.save();
    res.status(201).json({success:true})
}
exports.getCalc = async (req, res) => {
    const bmiusers = await Calcs.find();
    console.log(bmiusers)
    res.json(bmiusers);
}