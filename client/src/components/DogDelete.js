import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DogDelete = ({deleteHandler}) => {
    const location = useLocation();
    const dog = location.state.dog;
    const [choose, setChoose] = useState(false);
    const navigate = useNavigate();

    const formHandler = (e) => {
        e.preventDefault();
        console.log("CHOOSE: ", choose);
        if (choose){
            deleteHandler(dog);
        }
        navigate('/dogs');
    }

    return(
        <div>
            <form onSubmit={formHandler}>
                <div>
                    <label>Delete the dog named {dog.name}?</label>
                </div>
            
                <button
                    onClick={(e)=>{setChoose(true)}}
                    style={{
                    background: "red",
                    color: "white",
                    padding: "10px",
                    marginRight: "4px",
                    border: "none",
                    cursor: "pointer"
                    }}
                >
                    Yes
                </button>
                <button
                    style={{
                    background: "green",
                    color: "white",
                    padding: "10px",
                    marginLeft: "4px",
                    border: "none",
                    cursor: "pointer"
                    }}
                >
                    No
            </button>
            </form> 
        </div>
    );

}

export default DogDelete;