function showData(){
    setTimeout(()=>{
        PromiseAPI1();
    }, 2000)
}

const PromiseAPI1 = async () => {
    try{
        const response1 = await fetch("https://dummyjson.com/posts");
        const data1 = await response1.json();

        let thead = document.getElementById("thead");
        let tbody = document.getElementById("tbody");

        if(data1.posts){
            thead.innerHTML = `
            <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Title</th>
                <th>Body Text</th>
                <th>Views</th>
            <tr>`
        
        data1.posts.forEach((item)=>{
            tbody.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.userId}</td>
                <td>${item.title}</td>
                <td>${item.body}</td>
                <td>${item.views}</td>
            </tr>`
            });
        }
        setTimeout(()=>{
            PromiseAPI2();
        }, 2000);
        console.log(data1);
    } catch(err){
        console.log(err);
    }
 
}

const PromiseAPI2 = async () => {
    try{
        const response2 = await fetch("https://dummyjson.com/products");
        const data2 = await response2.json();

        let thead = document.getElementById("thead");
        let tbody = document.getElementById("tbody");

        if(data2.products){
            thead.innerHTML = `
            <tr>
                <th>ID</th>
                <th>Brand</th>
                <th>Catagory</th>
                <th>Description</th>
                <th>Rating</th>
                <th>Price</th>
                <th>Stock</th>
            <tr>`
            tbody.innerHTML = "";
        data2.products.forEach((item)=>{
            tbody.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.brand}</td>
                <td>${item.category}</td>
                <td>${item.description}</td>
                <td>${item.rating}</td>
                <td>${item.price}</td>
                <td>${item.stock}</td>
            </tr>`
            });
        }
        setTimeout(()=>{
            PromiseAPI3();
        }, 3000)
        console.log(data2);
    } catch(err){
        console.log(err);
    }
}

const PromiseAPI3 = async () => {
    try{
        const response3 = await fetch("https://dummyjson.com/todos");
        const data3 = await response3.json();

        let thead = document.getElementById("thead");
        let tbody = document.getElementById("tbody");

        if(data3.todos){
        thead.innerHTML = `
            <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Todo</th>
                <th>Status</th>
            <tr>`
        tbody.innerHTML = "";
        data3.todos.forEach((item)=>{
            tbody.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.userId}</td>
                <td>${item.todo}</td>
                <td>${item.completed}</td>
            </tr>`
            });
        }
        
        console.log(data3);
    } catch(err){
        console.log(err);
    }
}