import renderItem from './renderItem';

const App = (list: any[]) => {
    let listDiv = document.createElement("div");
    list.map((category, key) => {
        const catDiv = document.createElement("div");
        catDiv.id = `${category.title}`
        catDiv.innerHTML = `<h3>${category.title}<h3>`
        const itemContainer = document.createElement("div");
        itemContainer.id = `${category.title}_items`
        category.items.map((item:any[], id:number) => {
            itemContainer.appendChild(renderItem(item))
        })
        catDiv.appendChild(itemContainer)
        listDiv.appendChild(
            catDiv
        )
    })

    return listDiv;
}

export default App;