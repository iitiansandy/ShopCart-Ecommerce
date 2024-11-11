
function pingController(req, res) {
    return res.send({ message: "I am alive"});
};

module.exports = { pingController };