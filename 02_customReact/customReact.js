// This way react load all the components 
function customRender(reactElement, mainContainer) {

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.text

    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
        if (prop === 'text') continue
    }
    mainContainer.appendChild(domElement)
}

// This is a example element 'a' that creates react like this
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    text: 'Click Me'
}

const mainContainer = document.getElementById('root')
// this is my own render
customRender(reactElement, mainContainer)