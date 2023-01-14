/*

show dbs
show collections


Methods, Filters and Operators

access      |   Access   |  Apply   |   Equality/
curr        |   this     |  this    |   Single value
database    | collection |  Method  |    or filter
-------------------------------------------------------
    db      . myCollection. find(  {age: 32} )
    db      . myCollection. find(  {age: {$gt: 30}})




db.user.insertOne({user:"Adarsh", comany: "Byjus", age: 32})
db.user.find()
db.user.findOne({user: "Adarsh"})
db.user.deleteOne({user: "Adarsh"})

db.user.updateOne({user:"Adarsh"}, {$set:{age:10}})

db.user.updateMany({user:"Adarsh"}, {$unset:{company: "samsung"}})

                                     $push : {user: "Kesh"}  // Just push Kesh array form to all 
                                     $pull  : {}             // Remove some specific from each 

db.user.find({user: {$exists: true/false}})

                                    
*/          