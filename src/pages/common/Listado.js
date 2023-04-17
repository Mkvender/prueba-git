import dataBase from "../../sample.json";

//TODO: muestra un popup con la informacion de la pelicula/serie
function popUp(params) {
    return 1;
}

const Listado = ({programType}) => {
    const list = dataBase.entries.filter(entry=>(entry.programType===programType&&entry.releaseYear>=2010));
    const listOrdered = list.sort((firstItemFromList, secondItemFromList) =>{
        if(firstItemFromList.title>secondItemFromList.title){
            return -1;
        }
     });

    const item = listOrdered.map((itemFromList)=>{
        return (
            <div onClick={popUp(item)}>
                <img src={itemFromList.images["Poster Art"].url} alt={itemFromList.title}/>
                <p>{itemFromList.title}</p>
            </div>
        )
    })

    return (
        <div>
             {item}
        </div>
    );
  };
  
  export default Listado;