function showUrl(Name) {
    const xhr = new XMLHttpRequest();
    const url = "https://pokeapi.co/api/v2/pokemon/" + Name.toLowerCase();

    xhr.open("GET", url, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log(data);
            const speciesUrl = data.species.url;
            
            window.open(speciesUrl, '_blank');
        } 
    };

    xhr.send();
}
