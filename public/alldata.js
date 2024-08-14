import Card from "./card";      
// import { useContext } from 'react'
// import { UserContext } from './UserContext'
// import { Container } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

   
   //UPDATED PER 27.21, NEED TO ALIGN TO FRONT END APPLICATION
    function AllData(){
    const [data, setData] = React.useState('[]');    
    var [result, setResult] = React.useState([]);
    
    React.useEffect(() => {
        
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(JSON.stringify(data));                
            });





            
    }, [[{"_id":"66b8e1bb43a2203ce1c5e2a9","name":"ddd","email":"ddd","password":"ddd","balance":0},{"_id":"66b8e589182c4481c82baef1","name":"sarah","email":"sarah@hotmail.com","password":"secret3","balance":0},{"_id":"66b8f4a160094f552993e71d","name":"tester","email":"TM@hotmail.com","password":"secret4","balance":0},{"_id":"66b8f70d60094f552993e71e","name":"Jamey","email":"J@MIT.edu","password":"qweqweqwe","balance":-6},{"_id":"66b8f72f60094f552993e71f","name":"wwww","email":"www","password":"wwwwwwwwwwww","balance":0},{"_id":"66b8fdfc60094f552993e720","name":"w","email":"w","password":"w","balance":0},{"_id":"66babc238d36762fe4408773","name":"d","email":"d","password":"d","balance":0}]]);

  

    //UPDATED PER 27.21, NEED TO ALIGN TO FRONT END APPLICATION
    return (<>
        <h5>All Data in Store:</h5>
        {data}
 
<h4>
{data[33]}
</h4>

    </>);


}


//TEST




//TRYING TO FORMAT CARD PER FRONT END APP
<Card
      bgcolor="danger"
      header="Created Accounts Documentation:"
            />

export default AllData;
