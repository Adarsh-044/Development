const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const fruitRoute = require('Routes_module')

// You can skip a step by requiring the modules inline like so.
// It works to do the require on its own line as well, it's up to you.
app.use("/fruit", fruitRoute);

// Run the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});