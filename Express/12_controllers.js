// @desc Purchase new fruit
// @route Post/api/v1/fruit
// @access private
exports.purchaseFruit = (req, res, next) => {
    res.json({ msg: 'Purchase new fruit' });
};


// @desc Update
// @route Put /api/v1/fruit/:id
exports.updateFruit = (req, res, next) => {
    res.json({ msg: `Updated fruit ${req.params.id}` })
}