
// import { useState } from "react";

function CreateAccount(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');
  //ADDING IN PER FRONT END
// //CREATE ACCOUNT AND FORM VALIDATION FROM EXERCISES
// import { useState } from "react";
// import { createAccount } from "./accountdata";
// import Card from "./card";
// function CreateAccount(){
//   const [show, setShow]         = useState(true);
//   const [status, setStatus]     = useState('');
//   const [name, setName]         = useState('');
//   const [email, setEmail]       = useState('');
//   const [password, setPassword] = useState('');

//   function validate(field, label){
//     if (!field) {
//       setStatus('Error: ' + label);
//       setTimeout(() => setStatus(''),1000);
//       return false;
//     }
// //PASSWORD LENGTH MUST BE * CHARACTERS OR GREATER
//     if (label == "password" && field.length < 8) {
//       setStatus('YOUR PASSWORD NEEDS TO BE LONGER - error against ' + label);
//       setTimeout(() => setStatus(''),1000);
//       return false;
//     }
//     return true;
//   }
// //HANDLE CREATE FUNCTION AND VALIDATION RETURN
//   function handleCreate(){
//     if (!validate(name,     'name'))     return;
//     if (!validate(email,    'email'))    return;
//     if (!validate(password, 'password')) return;
//     createAccount({name, email, password, balance:0.00}).then(() => {
//       setShow(false);
//     });
//   }    
//   function clearForm(){
//     setName('');
//     setEmail('');
//     setPassword('');
//     setShow(true);
//   }
//   //CARD RETURN AND REF
//   return (
//     <Card
//       bgcolor="warning"
//       header="CREATE AN ACCOUNT"
//       status={status}
//       body={show ? (  
//               <>
//               Name<br/>
//               <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
//               Email address<br/>
//               <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
//               Password<br/>
//               <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
//               <button type="submit" className="btn btn-light" disabled={!name || !email || !password} onClick={handleCreate}>CLICK TO CREATE ACCOUNT</button>
//               </>
//             ):(
//               <>
//               <h5>SUCCESS - ACCOUNT CREATED</h5>
//               <button type="submit" className="btn btn-light" onClick={clearForm}>DO YOU WANT TO ADD ANOTHER ACCOUNT?</button>
//               </>
//             )}
//     />
//   )
// }
// //EXPORT OF CREATE ACCOUNT
// export default CreateAccount;

  return (
    <Card
      bgcolor="success"
      header="Create Account "
      status={status}
      body={show ? 
        <CreateForm setShow={setShow}/> : 
        <CreateMsg setShow={setShow}/>}
    />
  )
}

function CreateMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>Add another account</button>
  </>);
}

function CreateForm(props){
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

  function handle(){
    console.log(name,email,password);
    const url = `/account/create/${name}/${email}/${password}`;
    (async () => {
        var res  = await fetch(url);
        var data = await res.json();    
        console.log(data);        
    })();
    props.setShow(false);
  }    

  return (<>

    Name<br/>
    <input type="input" 
      className="form-control" 
      id="name"
      placeholder="Enter name" 
      value={name} 
      onChange={e => setName(e.currentTarget.value)} /><br/>

    Email address<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>Create Account</button>




  </>);



}