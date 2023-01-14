/*

?Models are responsible for creating and reading documents from the underlying MongoDB database.

! Compilation   mongoose.model()
const schema = new mongoose.Schema({ name: 'string', size: 'string' });
const Tank = mongoose.model('Tank', schema);

Mongoose automatically looks for the plural, lowercased version of your model name
the model Tank is for the tanks collection in the database.

*Note: The .model() function makes a copy of schema


! querying
? using a model's find, findById, findOne, or where static methods.

!Deleting
? deleteOne() and deleteMany() functions for removing all documents matching the given filter.

!Updating
updateOne()



*/