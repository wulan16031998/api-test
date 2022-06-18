const res = require("express/lib/response");

exports.helloWorld = (req, res, next) => {
    res.send('<h1>Hello World!</h1>');
},


exports.haiThere = (req, res, next) => {
    res.send('<h1>Halo apa kabar kau sana</h1>');
};