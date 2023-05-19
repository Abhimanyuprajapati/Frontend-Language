const Mapping=()=>{
    const arr=[
        {
            name:"akash",
            rollno:45,
            age:12
        },
        {
            name:"ankush",
            rollno:68,
            age:18
        },
        {
            name:"dipua",
            rollno:40,
            age:16
        },
        {
            name:"vinod",
            rollno:25,
            age:21
        }
    ];
    return(
        <div>
            {arr.map((items)=>{
                return (
                    <div>
                        <h1>{items.name}</h1>
                        <p>{items.age}</p>
                        <h3>{items.rollno}</h3>
                    </div>
                )
            })}
        </div>
    )
}
export default Mapping;