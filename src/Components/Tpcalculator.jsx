import React,{useState} from "react";
import './Tpcalculator.css';

const TPCalculator = () =>{
    let [resultats, setResult] = useState("");
   
   
    const handleClick = (e)=>{
        if(resultats.length >= 16){
            setResult("Valeur trop élevé!!");
            return;
        }
        if(resultats.charAt(0)=== '0'){
            resultats =resultats.slice(1, resultats.length)
        }
    //setResult(prevResultats=>prevResultats.concat(e.target.name));
    setResult(resultats.concat(e.target.name));
    }


    const Espace_ = () =>{
        setResult(resultats.slice(0, resultats.length - 1))
    }
    const Effacer_ = () =>{
        setResult("");
    }
    
    const Calculer_ = () => {
        try{
        resultats= eval(resultats).toString();
        if(resultats.includes('.')){
            resultats=+ eval(resultats);
            resultats=resultats.toFixed(4).toString5();
            setResult(resultats);
        }else{
            setResult(eval(resultats).toString());
        }
        }catch (err){
            setResult("Erreur");
        }
    }

    return(
        <div className="containerInterface">
            <div className="wrapper">
                <form action="" >
                    <input type="text" className="champs" value={resultats}/>
                </form>
                <div className="Buttons">
                    <button name="0" onClick={handleClick}>0</button>
                    <button name="1" onClick={handleClick}>1</button>
                    <button name="2" onClick={handleClick}>2</button>
                    <button name="3" onClick={handleClick}>3</button>
                    <button name="4" onClick={handleClick}>4</button>
                    <button name="5" onClick={handleClick}>5</button>
                    <button name="6" onClick={handleClick}>6</button>
                    <button name="7" onClick={handleClick}>7</button>
                    <button name="8" onClick={handleClick}>8</button>
                    <button name="9" onClick={handleClick}>9</button>
                </div> 
                <div className="Operateur">
                    <button name="-" onClick={handleClick}>-</button>
                    <button name="+" onClick={handleClick}>+</button> 
                    <button name="/" onClick={handleClick}>/</button>
                    <button name="*" onClick={handleClick}>*</button>
                    <button name="." onClick={handleClick}>.</button>
                </div>
                <div className="paramettre">
                    <button className="pButtons" onClick={Espace_}>Clear</button>
                    <button className="pButtons" onClick={Effacer_}>Reset</button>
                    <button className="pButtons" onClick={Calculer_}>=</button>
                </div>
            </div>
            
            <div className="footer">
            <span>©14-02-2024 :Jean Delex</span>
            <p>"React, JS, HTML,CSS"</p>
            </div>
       
    </div>
    )
}
export default TPCalculator