import dataBase from "../../../sample.json";
import "./listado.css";

const Listado = ({programType}) => {
    const list = dataBase.entries.filter(entry=>(entry.programType===programType&&entry.releaseYear>=2010));
    const listOrdered = list.sort((firstItemFromList, secondItemFromList) =>{
        if(firstItemFromList.title>secondItemFromList.title){
            return -1;
        }
     });

    const item = listOrdered.slice(0,20).map((itemFromList)=>{   
        return (
            <div className="card">
                <img src={itemFromList.images["Poster Art"].url} alt={itemFromList.title}/>
                <p>{itemFromList.title}</p>
            </div>
        )
    })
    console.log(item);
    return (
        <div className="container">
            <div>
                {item}
            </div>
        </div>
    );
  };
  
  export default Listado;