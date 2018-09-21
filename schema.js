const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

// Hardcode data 
const customers = [
    {id:'1',name: 'ABC', email : 'abc@gmail.com', age: 30},
    {id:'2',name: 'ABCD', email : 'abcd@gmail.com', age: 31},
    {id:'3',name: 'ABCDE', email : 'abcde@gmail.com', age: 33},
    {id:'4',name: 'ABCDEF', email : 'abcdef@gmail.com', age: 35},
    {id:'5',name: 'ABCDEFG', email : 'abcdefg@gmail.com', age: 37},

];
// Customer Type 
const CustomerType = new GraphQLObjectType({
    name : 'Customer',
    fields : ()=> ({
        id : {type:GraphQLString},

        name : {type:GraphQLString},
        
        email : {type:GraphQLString},

        age : {type:GraphQLInt},
    })
})
// Root Query
const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    fields:{
        customer : {
            type : CustomerType,
            args : {
                id:{GraphQLString}
            },
            resolve(parentValue, args) {
                for(let i=0 ;i < customers.length; i++){
                    if(customers[i].id == args.id){
                        return customers[i];
                    }
                }
            }
        }
    },
    
})

module.exports = new GraphQLSchema({
    query : RootQuery
})