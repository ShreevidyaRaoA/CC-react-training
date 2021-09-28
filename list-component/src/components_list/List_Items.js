import React from 'react'
 function List_Items() {
     const menu_list = ['Idli', 'Pulav', 'Masala_Dosa', 
     'Milkshakes', 'Ice_Creames']
     const Full_Menu_List = menu_list.map(menu => <h2>{menu}</h2>)
     return (
         <div>
             {
                Full_Menu_List 
             }
           
         </div>
     )

 }

 export default List_Items

