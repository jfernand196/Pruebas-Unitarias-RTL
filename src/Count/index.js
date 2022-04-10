import React, {useState} from "react";
import "./styles.sass";


const Count = ({value}) => {
const [countIni, SetCountIni] = useState(0)    
return(
<>
<div className="container">
<h1>{countIni}</h1>
<button onClick={() => SetCountIni(countIni +1)}> + </button>
<button onClick={() => SetCountIni(countIni -1)}> - </button>
<button onClick={() => SetCountIni(value)}> RESET </button>
</div>
</>
);
}

export default Count

