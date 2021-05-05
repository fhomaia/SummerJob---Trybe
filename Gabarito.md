### Exercício 1
```
const promise = new Promise ((resolve,reject) => {

    const number =  Math.random() * 10
    if (number > 4) {
    resolve(console.log("A requisição teve sucesso!"));
    }
    return reject(console.log("A requisição falhou."));
    
    });
 ```
 
***

### Exercício 2

#### Arquivo .html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dogs</title>
</head>
<body>
    <h1>It's a Doggy World</h1>
    <section id="dog-section-images"></section>
    <script src="./exercicios.js"></script>
</body>
</html>
```
#### Arquivo .js

```
const fetchDogs = () => {
    const number = Math.floor(Math.random() * 5 + 0.9);
    return fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then((response) => response.json())
    .then((response) => {
        response.message.map((dog) => {
        const section = document.getElementById('dog-section-images');
        const img = document.createElement('img');
        img.style.height = "200px"
        img.src = dog;
        section.appendChild(img)
        })      
    })
}

fetchDogs();
```
