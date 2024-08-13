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





            
    }, []);

  

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