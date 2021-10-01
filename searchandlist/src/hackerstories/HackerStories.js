
function HackerStories(item) {
    return (
       
        <div>
            <ul>
                {item.List.map(function (item) {
                   // item.name = "Pulav";
                     return (
                         <li>
                             <span>{item.name } </span>
                             <span>{item.amount }</span>
                         </li>
               
                     );
                })}
                </ul>
      </div>
    );
    
}
export default HackerStories;