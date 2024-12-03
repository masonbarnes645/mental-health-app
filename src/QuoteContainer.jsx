import { useEffect, useState } from "react"

const QuoteContainer = () => {

const [quote, setQuote] = useState([])

useEffect(() =>{
  fetch('/api/random')
  .then((res) => res.json())
  .then((data) => setQuote(data[0]))
}, [])

return(
    
    <div>
        <h2>{quote?.q}</h2>
        <h4>{quote?.a}</h4>
    </div>
)


}

export default QuoteContainer