function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
    var rankedNode = document.querySelectorAll('.ranked-list')
    for (var i = 0; i < rankedNode.length; i++) {
        let children = rankedNode[i].children
        for (let j = 0; j < children.length; j++) {
            children[j].innerHTML = parseInt(children[j].innerHTML, 10) + n;        
        }
    }
}

function deepestChild() {
    debugger;
    var firstNode = document.getElementById('grand-node')
    var nextNode = firstNode.children[0]

    while (nextNode) {
        var deepestNode = nextNode
        nextNode = deepestNode.children[0]
    }
    return deepestNode;
}

