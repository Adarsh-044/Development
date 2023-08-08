const Product = require('../model/product')

const getProducts = async (req, res) => {
      const { company, name, sort, select } = req.query;
      const queryObj = {};
      if (name) {
            queryObj.name = name;
      }
      if (company) {
            queryObj.company = company;
      }

      let apiData = Product.find(queryObj);

      if (select) {
            // let selectFix = select.split(",", " ");
            let selectFix = select.split(",").join(" ");
            apiData.select(selectFix);
      }

      if (sort) {
            // let sortFix = sort.replace(",", " ");
            let sortFix = sort.split(",").join(" "); 
            apiData.sort(sortFix);
      }

      let myProducts = await apiData;
      res.status(200).json({ myProducts });
}
module.exports = { getProducts }; 