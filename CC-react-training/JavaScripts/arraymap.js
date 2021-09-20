
//let raksha = { name: "Raksha", surname: "Sharma", age: 28 };
//let srinivas = { name: "Srinivas", surname: "Iyengar", age: 30 };
//let usha = { name: "Usha", surname: "Janardhana", age: 54 };

//let users = [ raksha, srinivas, usha ];

let users = [{
    
    name: "raksha",
    surname: "Sharma",
    id: 1,
},
   { 
       name: "Srinivas",
     surname: "Iyengar", 
     id: 2,
   },
   {
     name: "Usha", 
     surname: "Janardhana", 
     id: 3
}
];


let fullName = users.map((value,index) => {return {fullName: value.name, id: value.id}});
console.log(fullName);

//list.map((item,index)=>{return {name:item.name, id:index}})
//list.map((item,index)=>{return {fullname:item.name, id:index+1}})