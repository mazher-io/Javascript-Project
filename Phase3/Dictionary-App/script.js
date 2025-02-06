async function searchWord() {
    const word = document.getElementById('word').value;
    if (!word) return; 

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Loading...";

    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error("Word not found");
        }

        const definition = data[0].meanings[0].definitions[0].definition;
        const phonetics = data[0].phonetics.length ? data[0].phonetics[0].text : "";
        const example = data[0].meanings[0].definitions[0].example || "No example available.";
        
        resultDiv.innerHTML = `
            <h2>${word}</h2>
            <p><strong>Pronunciation:</strong> ${phonetics}</p>
            <p><strong>Definition:</strong> ${definition}</p>
            <p><strong>Example:</strong> ${example}</p>
        `;
    } catch (error) {
        resultDiv.innerHTML = "Word not found. Please try another word.";
    }
    
}