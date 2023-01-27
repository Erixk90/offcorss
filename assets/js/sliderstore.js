const url4 = "https://picsum.photos/v2/list?page=5&limit=100";

fetch(url4)
  .then((res) => res.json())
  .then ((data) => {
 console.log(data)

    /* creaction of background image*/
    let sliderImages = data.filter((photos) => {
      return photos.width <  photos.height 
    });
   
    let sliderniñosImage = document.createElement("img")
    sliderniñosImage.className = 'sliderniños__img'
    let fathersliderniñosImage = document.querySelector(".sliderniños")
    sliderniñosImage.src = sliderImages[1].download_url;
    fathersliderniñosImage.insertAdjacentElement('afterbegin' , sliderniñosImage)

    
    let sliderniñosImage1 = document.createElement("img")
    sliderniñosImage1.className = 'sliderniños__img1'
    let fathersliderniñosImage1 = document.querySelector(".sliderniños1")
    sliderniñosImage1.src = sliderImages[2].download_url;
    fathersliderniñosImage1.insertAdjacentElement('afterbegin' , sliderniñosImage1)

    let sliderniñosImage2 = document.createElement("img")
    sliderniñosImage2.className = 'sliderniños__img2'
    let fathersliderniñosImage2 = document.querySelector(".sliderniños2")
    sliderniñosImage2.src = sliderImages[0].download_url;
    fathersliderniñosImage2.insertAdjacentElement('afterbegin' , sliderniñosImage2)

    let sliderniñosImage3 = document.createElement("img")
    sliderniñosImage3.className = 'sliderniños__img1'
    let fathersliderniñosImage3 = document.querySelector(".sliderniños3")
    sliderniñosImage3.src = sliderImages[3].download_url;
    fathersliderniñosImage3.insertAdjacentElement('afterbegin' , sliderniñosImage3)

});