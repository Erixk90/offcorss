/*Create images Section Bebe niñas*/

const url1 = "https://picsum.photos/v2/list?page=1&limit=100";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let filterArray = data.filter((photos) => {
      return photos.width == 2500 && photos.id <= 20;
      
    });
    
        let bigImage = document.createElement("img")
        let fatherBigImage = document.querySelector(".container__big__photo")
        bigImage.src = filterArray[4].download_url;
        fatherBigImage.appendChild(bigImage)
        
        let middleImage = document.createElement("img")
        let fathermiddleImage = document.querySelector(".container__middle__photo")
        middleImage.src = filterArray[3].download_url;
        fathermiddleImage.appendChild(middleImage)

        let middleImage1 = document.createElement("img")
        let fathermiddleImage1 = document.querySelector(".container__middle__photo")
        middleImage1.src = filterArray[2].download_url;
        fathermiddleImage1.appendChild(middleImage1)

        let shortImage = document.createElement("img")
        let fathershortImage = document.querySelector(".container__short__photo")
        shortImage.src = filterArray[5].download_url;
        fathershortImage.appendChild(shortImage)

        let shortImage1 = document.createElement("img")
        let fathershortImage1 = document.querySelector(".container__short__photo")
        shortImage1.src = filterArray[6].download_url;
        fathershortImage1.appendChild(shortImage1)






/*
      

        let imageTwo = document.createElement("div");
        imageTwo.className = "big__photo_container";
        let containerImagetwo = document.querySelector(".container__big__photo");
        let putImageTwo = containerImagetwo.appendChild(imageTwo);
        containerImagetwo.append(putImageTwo);

        let img2 = document.createElement("img");
        let containerImg2 = document.querySelector(".container__big__photo");
        img1.src = filterArray[1].download_url;
        containerImg2.appendChild(img2);

        console.log(filterArray)
        */
  });
