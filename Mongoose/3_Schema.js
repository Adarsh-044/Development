/*
!Defining your schema
*Defines the shape of the documents within that collection.
*Each schema maps to a MongoDB collection


!MongodB data Types
  String − 
  Integer − 32 bit or 64 bit  
  Boolean −  
  Double − Stores floating point values
  Min/Max keys − Compares a value against the lowest and highest BSON elements
  Arrays − Stores arrays, lists, or multiple values into one key
  Date − Stores the current date or time in UNIX format
  Timestamp − Useful for keeping a record of the modifications or additions to a document
  Object − Used for embedded documents
  Object ID − Stores the ID of a document
  Binary data − For storing binary data
  Null − Stores a null value
  Symbol − Used identically to a string but mainly for languages that have specific symbol types


````````````````````````````````````````````````
import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    fans:  Number
  }
});



```````````````````````````````````````````````````````

!permitted SchemaTypes
String ,Number, Date ,Buffer, Boolean, Mixed, ObjectId, Array, Decimal128, Map


!Creating a Model
To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema):
*const Blog = mongoose.model('Blog', blogSchema);




!Ids
By default, Mongoose adds an _id property to your schemas.

___________________________________________________________________________
const schema = new Schema();

schema.path('_id'); // ObjectId { ... }
___________________________________________________________________________






*Schemas have a few configurable options which can be passed to the constructor or to the set method:

new Schema({..}, options);
// or
const schema = new Schema({..});
schema.set(option, value);




option: id
Mongoose assigns each of your schemas an id virtual getter by default which returns the document's _id field cast to a string,
///  default behavior
const schema = new Schema({ name: String });
const Page = mongoose.model('Page', schema);
const p = new Page({ name: 'mongodb.org' });
console.log(p.id); // '50341373e894ad16347efe01'


To disable it use {id: false},





!ObjectIds

An ObjectId is a special type typically used for unique identifiers. 
! const carSchema = new mongoose.Schema({ driver: mongoose.ObjectId });
__________________________________________________________________________
const Car = mongoose.model('Car', carSchema);

const car = new Car();
car.driver = new mongoose.Types.ObjectId();

typeof car.driver; // 'object'
car.driver instanceof mongoose.Types.ObjectId; // true

car.driver.toString(); // Something like "5e1a0651741b255ddda996c4"
___________________________________________________________________________


!Boolean
true, 'true', 1, '1', 'yes'
false, 'false', 0, '0', 'no'




*/