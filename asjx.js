// How to do a Ajax call to get WebApi result?

// Old type of  method:

// By XMLHttpRequest()

const request = XMLHttpRequest();

request.open('GET', 'url')

request.send()
// - this should be inside the event listener in call back function

