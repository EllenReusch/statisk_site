// https://kea-alt-del.dk/t7/api/products/1573
fetch("https://kea-alt-del.dk/t7/api/products/1573")
        .then(response=>response.json)
        .then(data=>showProduct(data));

function showProduct(produkt){
console.log (produkt);
document.querySelector(".produkt1 p").textContent=produkt.productdisplayname;


}




/*
	
id	1573
gender	"Women"
category	"Apparel"
subcategory	"Bottomwear"
articletype	"Track Pants"
basecolour	"Grey"
season	"Fall"
productionyear	2010
usagetype	"Sports"
productdisplayname	"omen Athletes Grey Track Pants"
parsed	1
soldout	0
relid	1573
price	999
discount	65
variantname	"Athletes Grey"
brandname	"Kalenji"
brandbio	null
brandimage	null
agegroup	"Adults-Women"
colour1	"NA"
colour2	"NA"
fashiontype	"Fashion"
materialcaredesc	null
sizefitdesc	null
description	`<p style="text-align: justify;">1. Fabric that breathes by transferring moisture outwards<br />2. A supportive garment that provides good muscle compression<br />3. Vented mesh panel at the waist, base of the back &amp;  knees for air flow<br />4. Reflective elements enhance wearer's visibility in low light situations<br />5. Efficient design provided inside pocket for keys or a map<br /><br />This training apparel is a comfortable knee-length capris designed for female runners. It is the perfect Fit for training or competing as it is stretch friendly.</p>\r\n<p style="text-align: justify;"><em>Model statistics</em><br />The model wears trousers, length of 39"<br />Height-5.8", Waist-26", Hips-35"</p>`
styledesc	null
*/