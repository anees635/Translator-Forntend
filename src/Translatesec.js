import React,{useState} from 'react'
import axios from 'axios';
import './Translate.css'

export default function Translatesec() {
  // variables
  const [text, settext] = useState("");
  const targetLanguage = 'Urdu';
  const [translation, setTranslation] = useState("")

  // handle the submit of user 
  // give request to api
  const handlesubmit = async (e)=>{
    e.preventDefault();
    
    try{
      console.log("In try");
      // give request to api
      const response = await axios.post ("https://express-backend-two.vercel.app/translate", {text, targetLanguage});
       
      setTranslation(response.data.translatedText)

    }
    catch(error){
      console.error("Error during translation:", error);
      alert("Error during translation", error)
    }
  }
  return (
  <div>
      {/* header */}

      <h2>Translate Text from English to Urdu</h2>

      {/* input field */}


    <form onSubmit={handlesubmit}>
      <div className="flexcontainer">
       <label for="Textarea">English</label>

       <textarea class="textarea" onChange={(e)=>settext(e.target.value)} rows="5" cols="50"placeholder="Enter text in english" id="Textarea" value={text}></textarea>
       
      
       
      </div>
      <div className="flexcontainer">
         <label for="Textarea">Urdu</label>

         <textarea class="textarea" rows="5" cols="50"placeholder="Translated text" id="Textarea" value={translation}></textarea>
        
      </div>
       {/* submit button*/}
      <button type="submit" className='subbtn'>Translate</button>
    </form>
  </div>
  )
}
