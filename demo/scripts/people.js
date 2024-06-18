fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((person) => {
    document.querySelector("section").innerHTML = `
   <article>
   <p>First name: ${person.firstName}</p>
   <p>Last name: ${person.lastName}</p>
   <p>Age: ${person.age}</p>
   <p>Married: ${person.isMarried}</p>
   <p>Eye Color: ${person.eyeColor}</p>
   <p>Children: 
        <ul>
            <li>${person.children[0].firstName}</li>
            <li>${person.children[1].firstName}</li>
            <li>${person.children[2].firstName}</li>
        </ul>
   </p>
   </article>`;
  });
