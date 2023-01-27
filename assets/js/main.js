const url = "https://picsum.photos/v2/list?page=2&limit=100";

const app = document.querySelector(".container");
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    let images = data.filter((photos) => {
      return photos.id <= 106;
    });

    console.log(images);

    //crear Nodo

    const p4 = document.createElement("p");
    const tp4 = document.createTextNode('parrafo 4'3);
    //seleccionar elemento padre

    const e1 = document.querySelector(".container");

    //agregar nodo
    e1.appendChild(p4);
    tp4.appendChild(tp4);

    let img = document.createElement("img");

    img.src = images.download_url;
    document.body.append(img[0]);
  });
