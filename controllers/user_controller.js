const UserModel = require('./../database/models/user_model');


async function create(req,res) {
    // return next(new HTTPError(401, "You are not authorized"));
    // console.log(req.body);
    let { email, password } = req.body
    const user = await UserModel.create({email,password})
    res.send("User created successfully");
}

module.exports = {
    create
}