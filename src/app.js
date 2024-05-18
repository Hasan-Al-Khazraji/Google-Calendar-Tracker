function handleSubmit(event){
    event.preventDefault();

    // Data is equal to the data given by the form
    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());

    value.text = data.getAll("Title");

    value.color = data.getAll("color");

    console.log({value});

}

const form = document.querySelector("form");
if (form){
    console.log("TRUE");
    form.addEventListener("submit", handleSubmit);
}