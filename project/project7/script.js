const imagecontainer=document.getElementById('image-container');
const loader=document.getElementById('loader');
let photoArray=[];

//unsplash Api .com website 
// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
// H7Jkm1eSivkpBSAPuv68Agc1xRXhJrjWuLl1B1SmDz0
const count=10; 
const apikey="H7Jkm1eSivkpBSAPuv68Agc1xRXhJrjWuLl1B1SmDz0";
const apiurl=`https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`;

// helper function
function setAttribute(element,Attribute){
    for(const key in Attribute){
        element.setAttribute(key, Attribute[key]);
    }
}

// display the image

function displayPhoto(){
    photoArray.forEach((photo)=>{
        const item=document.createElement("a");
        setAttribute(item, {
            href: photo.links.html,
            target:"_blank",  
        });
        // item.setAttribute('href',photo.links.html);
        // item.setAttribute('target', '_blank');

        const img=document.createElement("img");
        setAttribute(img, {
            src: photo.urls.regular,
            alt: photo.alt_description, 
            title: photo.alt_description, 
        });
        // img.setAttribute('src' , photo.urls.regular);
        // img.setAttribute('alt' , photo.alt_description);
        // img.setAttribute('title' , photo.alt_description);

        item.append(img);
        imagecontainer.append(item);
    });
}


// get the photo from unsplash api
async function getPhoto(){
    try{
        const response= await fetch(apiurl);
        // const data= await response.json();
        //   console.log(data);
        photoArray= await response.json();
        console.log(photoArray);
       
       displayPhoto();
    }catch(error){
        console.log(error);
    }
}

getPhoto();