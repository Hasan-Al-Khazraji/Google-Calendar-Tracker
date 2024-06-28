const article = document.getElementsByClassName("erDb5d"); // This returns an object array

if (article) {
    
    // Leave for now, but this injectable will be useful soon
    const testType = document.createElement("div");
    const test = document.createTextNode("HELLO");
    testType.appendChild(test);

    // Insert within the specified div the element above
    article[0].insertAdjacentElement("beforebegin", testType);
}
