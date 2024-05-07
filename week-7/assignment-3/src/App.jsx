import { useMemo, useState } from 'react'; 

function App (){
    const [wordCount, setwordCount] = useState(0); 
    const [para, setPara] = useState(''); 
    const [wordInput, setwordInput] = useState(''); 

    const handleChange = (e) => {
        setwordInput(e.target.value); 
    }

    const handlebtnChange = (e) => {
        const count = e.target.value; 
        setwordCount(count >= 0 ? count : 0);  
    }

    const handleSubmit = () => {
        const wordArray = wordInput.split(' ');
        let paraArray = []; 
        for ( let i = 0; i < wordCount; i++) {
            paraArray.push(wordArray[Math.floor(Math.random() * wordArray.length)])
        }
        setPara(paraArray.join(' ')); 
    }

    return <> 
        <div className='flex flex-col mt-[75px] items-center'>
            <h1 className='text-3xl font-bold font-serif p-5'>Paragraph Generator</h1> 
            <div className='flex justify-center gap-5 w-screen'>
            <input className="font-serif text-lg border border-black-500 rounded-md p-5 w-[50%]"type="text" placeholder='Type some words' onChange={handleChange} value={wordInput} id='myInput'></input>
            <input className='font-serif text-lg border border-black-500 rounded-md p-5 w-[20%]'type="number" placeholder=' Word Count' onChange={handlebtnChange} value={wordCount} id="mycount"></input>
            </div> 
            <button className='bg-black text-white px-7 font-sans rounded-lg  py-5 mt-5 text-xl' onClick={handleSubmit}>Generate</button>
            <p className='mt-[100px] font-serif text-lg px-[300px]'>{para}</p> 
        </div>
    </>
}

export default App; 