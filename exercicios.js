const fetchDogs = () => {
    const number = Math.floor(Math.random() * 5 + 0.9);
    return fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then((response) => response.json())
    .then((response) => {
        response.message.map((dog) => {
        const section = document.getElementById('dog-section-images');
        const img = document.createElement('img');
        img.style.width = "200px"
        img.src = dog;
        section.appendChild(img)
        })      
    })
}

fetchDogs();
