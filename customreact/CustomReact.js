function customRender(reactElement, container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.Children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)


    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
        
    }
    container.appendChild(domElement)
}


const reactElement = {
    type : 'a',
    props : {
        href : 'https://www.example.com',
        target: '_blank',
    },
    Children : 'Click Here'
}

const container = document.getElementById('root')

customRender (reactElement, container)

