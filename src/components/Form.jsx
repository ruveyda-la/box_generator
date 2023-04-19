import React, {useState} from 'react'

const Form = () => {
    const[box,setBox] = useState({
        color:'',
        size:''
    })

const [allBoxes,setAllBoxes] =useState([]);

const changeHandler = (e) => {
    setBox({
        ...box,
        [e.target.name]:e.target.value
    })
}

const submitHandler = (e) => {
    e.preventDefault();
    console.log(allBoxes)
    setAllBoxes([...allBoxes, box]);
    setBox({
        color:'',
        size:''
    })
}


return (
    <div>
        <div>
            <form onSubmit={submitHandler}>
            <label>Color:</label>
            <input className="form-control" type="text" name="color" value={box.color} onChange={changeHandler}/><br/>
            <label htmlFor="size">Size:</label>
            <input className="form-control" type="number" name="size" value={box.size} onChange={changeHandler}/><br/>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        <div>
            {
                allBoxes.map((item,index) => 
                <div key={index} style={{margin:`${10}px`,backgroundColor:item.color,height:`${item.size}px`, width:`${item.size}px`}}></div>)
            }
        </div>
        
    </div>
    
)
}

export default Form