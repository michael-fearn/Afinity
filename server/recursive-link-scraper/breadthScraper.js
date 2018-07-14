const pageScraper = require('./pageScraper')

module.exports = async function breadthSearch (socket, maxDepth,  url = '', parentNode = [], counter = 0, hrefState = { scanned:{}, unscanned:{}}) {  
    
    if ( maxDepth > 0) {
        counter++
        maxDepth--
    }
    else {
        console.log("done")
        return
    }

    

    if (!parentNode[0]) {
         
        if(!url.endsWith('/')) url = url + '/'
        console.log("hit node 0")
        socket.emit('node zero', url)
        console.log("Creating center node with:", url)
        //currentPageResults [dictionary, hrefList]
        const currentPageResults = await pageScraper(url)

        hrefState.scanned[url] = 1
        currentPageResults[1].reduce( (hrefState, url) => {
                hrefState.unscanned[url] ? hrefState.unscanned[url]++ : hrefState.unscanned[url] = 1
                return hrefState
            },hrefState)

        parentNode = currentPageResults[0]
    }

    let currentNode = []
    
    for(let i = 0; i < parentNode.length; i++) {

        // Logic to determine whether or not a page has been scanned previously. If It has been, skip it. 
        if(!hrefState.scanned[parentNode[i].toPage]) {

            hrefState.scanned[parentNode[i].toPage] = hrefState.unscanned[parentNode[i].toPage]
            delete hrefState.unscanned[parentNode[i].toPage]

            //currentPageResults [dictionary, hrefList]
            console.log("Scanning Page: ", parentNode[i].toPage)
            const currentPageResults = await pageScraper(parentNode[i].toPage, counter)
            currentNode = [...currentNode, ...currentPageResults[0]];
            console.log('depth: ', counter , "|  position in currentNode: ", i+1, "|  currentNode: ", parentNode.length, "|  childNode:", currentNode.length)
            socket.emit('scrape data', currentPageResults[0])
            currentPageResults[1].reduce( (hrefState, url) => {

                if(hrefState.scanned[url]) {
                    hrefState.scanned[url]++
                    return hrefState
                } else {
                    hrefState.unscanned[url] ? hrefState.unscanned[url]++ : hrefState.unscanned[url] = 1
                    return hrefState
                }            
            },hrefState)
        } 
    }
    socket.emit('end of node')
    breadthSearch(socket, maxDepth, '', currentNode, counter, hrefState)
}