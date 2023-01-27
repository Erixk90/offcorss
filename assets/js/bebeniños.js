const url3 = "https://picsum.photos/v2/list?page=6&limit=100";

fetch(url3)
  .then((res) => res.json())
  .then ((data) => {


    /* creaction of background image*/
    let bebeniños = data.filter((photos) => {
      return photos.width <  photos.height 
    });
    let reference = document.querySelector('.reference')

    let bebeNiñosImage = document.createElement("img")
    bebeNiñosImage.className = 'bebeniños__img'
    let fatherbebeNiñosImage = document.querySelector(".bebe-niños__img")
    bebeNiñosImage.src = bebeniños[1].download_url;
    fatherbebeNiñosImage.insertAdjacentElement('afterbegin' , bebeNiñosImage)
    
    let bebeNiñosImage1 = document.createElement("img")
    bebeNiñosImage1.className = 'bebeniños__img'
    let fatherbebeNiñosImage1 = document.querySelector(".bebe-niños__img")
    bebeNiñosImage1.src = bebeniños[2].download_url;
    fatherbebeNiñosImage1.insertBefore(bebeNiñosImage1, bebeNiñosImage)

});