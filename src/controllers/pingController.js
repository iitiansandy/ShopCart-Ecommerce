
function pingController(req, res) {
    return res.send({ message: "I am alive from v1"});
};

function pingControllerV2(req, res) {
    return res.send({ message: "I am alive from v2"});
};

module.exports = { pingController, pingControllerV2 };