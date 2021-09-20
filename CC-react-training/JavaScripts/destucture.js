
const user = { 
    person:  {
    employee: {
         firstname: "Rahul"
         }, 
         likes: ["Cycling", "Hiking", "Driving"] } };
  const {firstname: l} = user;
  console.log(l);
         
  let {
      person: {
        employee: {
          firstname},
          likes: [item1, item2, item3] }= user};
          console.log(firstname);
         
          const { person: { likes } } = user;
        likes;
      