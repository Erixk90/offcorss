const url2 = "https://picsum.photos/v2/list?page=5&limit=100";

fetch(url2)
  .then((res) => res.json())
  .then ((data) => {
 

    /* creaction of background image*/
    let sliderImages = data.filter((photos) => {
      return photos.width <  photos.height 
    });
    let reference = document.querySelector('.reference')
    let sliderImage = document.createElement("img")
    sliderImage.className = 'slider__img'
    let fathersliderImage = document.querySelector(".slider")
    sliderImage.src = sliderImages[1].download_url;
    fathersliderImage.insertAdjacentElement('afterbegin' , sliderImage)
    
    let sliderImage2 = document.createElement("img")
    let fathersliderImage2 = document.querySelector(".slider1")
    sliderImage2.src = sliderImages[0].download_url;
    fathersliderImage2.insertAdjacentElement('afterbegin' , sliderImage2)

    let sliderImage3 = document.createElement("img")
    let fathersliderImage3 = document.querySelector(".slider2")
    sliderImage3.src = sliderImages[4].download_url;
    fathersliderImage3.insertAdjacentElement('afterbegin' , sliderImage3)

    let sliderImage4 = document.createElement("img")
    let fathersliderImage4 = document.querySelector(".slider3")
    sliderImage4.src = sliderImages[1].download_url;
    fathersliderImage4.insertAdjacentElement('afterbegin' , sliderImage4)

});