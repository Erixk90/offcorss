const url = "https://picsum.photos/v2/list?page=1&limit=100";

fetch(url)
  .then((res) => res.json())
  .then((data) => {


    /* creaction of background image*/
    let backgroundImages = data.find((photos) => {
      return photos.width <= 3000;
    });

    let imageOne = document.createElement("div");
    imageOne.className = "background__container";
    let containerImageOne = document.querySelector(".container__front");
    let putImageOne = containerImageOne.appendChild(imageOne);
    containerImageOne.append(putImageOne);

    let img1 = document.createElement("img");
    let containerImg1 = document.querySelector(".background__container");
    img1.src = backgroundImages.download_url;
    containerImg1.appendChild(img1);
  });
