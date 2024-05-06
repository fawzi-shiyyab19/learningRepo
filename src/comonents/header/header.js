import {useState} from "react";

function Header() {
    // todo 1: create a state variable called lastName and a function called setLastName
    // todo 2: create a label and input field call email and state variable called email and a function called setEmail
    // todo 3: create a function called handleSubmit that alerts the value of the firstName AND lastName and email state variable
    const [firstName, setFirstName] = useState("");
    function handleSubmit(){
        alert(firstName)
    }
    return (
        <div style={{height:"800px", display:"flex", flexDirection:"row", width:"100%", backgroundColor:"black"}}>
            <div style={{width:"30%", backgroundColor:"red"}}>
                <img style={{width:"100%", height:"800px"}} src={"https://www.w3schools.com/images/w3schools_green.jpg"} alt={"not found"} />
            </div>
            <div style={{width:"70%",display:"flex", justifyContent:"center",backgroundColor:"wheat"}}>
                <div >
                <h1>Header</h1>
                <h3>Find your next opportunity</h3>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <form >
                            <label>first name</label>
                            <input type={"text"} value={firstName} onChange={(mmmmm) => {
                                setFirstName(mmmmm.target.value)
                            }}/>
                            <label>last name</label>
                            <input type={"text"}/>
                            <button type={"submit"} onClick={handleSubmit}>
                                submit
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;