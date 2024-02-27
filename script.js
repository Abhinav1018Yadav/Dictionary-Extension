const findMeaning = async(word)=>{
    // document.querySelector("#ans1").innerHTML="SIYA RAM";
    // document.querySelector("#ans").innerHTML= word+"hi";
    try{
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        var result = await response.json();
        console.log(result)
        document.querySelector("#wordHead").innerText=result[0].word;
        document.querySelector("#ans1").innerText=result[0].meanings[0].partOfSpeech+" : "+ result[0].meanings[0].definitions[0].definition;
        document.querySelector("#ans1").innerHTML+="<br>[synonyms- "+result[0].meanings[0].synonyms+"]";
        
        if(result[1]){
            document.querySelector("#ans2").innerText=result[1].meanings[0].partOfSpeech+" : "+ result[0].meanings[0].definitions[0].definition;
            document.querySelector("#ans2").innerHTML+="<br>[synonyms- "+result[0].meanings[0].synonyms+"]";
        }
        document.querySelector("hr").style.visibility="visible";
    }

    catch (error) {
        console.error("Error fetching data:", error);
        document.querySelector("#ans1").innerText="Something is WRONG!!!"
    }

}

const input = document.querySelector("#word");
input.addEventListener("change",()=>{
    const word = input.value;

    findMeaning(word)
})

const btn = document.querySelector("#searchBtn")
btn.addEventListener("click",()=>{
    const word = input.value;
    findMeaning(word)
});
