const cargarPosts=async()=>{
    let url="https://jsonplaceholder.typicode.com/posts";
    const api=await fetch(url);
    const data=await api.json();
    console.log(data);
    tabla=document.querySelector("#lista");
    data.map(item=>{
tabla.innerHTML+=`
<tr>
<th scope="col">${item.id}</th>
<th scope="col">${item.title}</th>
<th scope="col">${item.body}</th>
<td><button class="btn btn-primary btn-lg"><i class="bi bi-pencil-square"></i>Agregar</button></td>
<td><button class="btn btn-danger btn-lg"><i class="bi bi-trash"></i>Agregar</button></td>
</tr>`;
    })
}