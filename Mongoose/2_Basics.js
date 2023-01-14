/*

With Mongoose, everything is derived from a Schema

!   const kittySchema =  new mongoose.Schema({
!       name: String
!   });

The next step is compiling our schema into a Model.
!   const Kitten = mongoose.model('Kitten', kittySchema);

A model is a class with which we construct documents
each document will be a kitten with properties and behaviors as declared in our schema

Let's create a kitten document 
!   const silence = new Kitten({ name: 'Silence' });


```````````````````````````````````````````````````````
? how to add "speak" functionality to our documents:
kittySchema.methods.speak = function speak() {
  const greeting = this.name ? ("Meow name is " + this.name) : ("I don't have a name");
  console.log(greeting);
};
const Kitten = mongoose.model('Kitten', kittySchema);
const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"
````````````````````````````````````````````````````````



* Each document can be saved to the database by calling its save method.
! fluffy.save();

*access all of the kitten documents
! const kittens = await Kitten.find();

await Kitten.find({ name: /^fluff/ });  // To filter to fluff 

The findOne() function is used to find one document according to the condition
doc = Character.findOne({ name: 'Sam' });

*/