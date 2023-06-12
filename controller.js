const getemployee = (req, res) => {
    res.send("List of all employee");
};

const newpost = (req, res) => {
    res.json(req.body);
};

const updateemp = (req, res) => {
    res.send(`Updating with id ${req.params.id}`);
};

const deleteemp = (req, res) => {
    res.send(`Deleting with id ${req.params.id}`);
};

module.exports = { getemployee, newpost, updateemp, deleteemp };