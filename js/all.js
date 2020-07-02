import card from "./components/card.js";
import banner from "./components/banner.js";
import pagination from "./components/pagination.js";
import footer from "./components/footer.js";
import { apiProductList } from "./components/api.js";


let banner_section = document.querySelector("#banner_section");
let product_section = document.querySelector("#product_section");
let pagenum_section = document.querySelector("#pagenum_section");
let footer_section =  document.querySelector("#footer_section");



apiProductList()
    .then( res => {
        // console.log(res);
        render(res.data, 0);
    })
    .catch( err => {
        console.log(err);        
    });


function render(data, start) {

    let productList = data.data;

    productList = productList.slice(start, start+3);

    // banner view
    let img_url_list = [];
    productList.forEach( product => {
        img_url_list.push(product.imageUrl[0]);
    });

    banner.load(img_url_list);
    banner_section.innerHTML = banner.render();
    $("#image_carousel").carousel();

    // product view
    let all_product_view = "";
    productList.forEach( product => {
        let data_obj = {
            viewer_num: product.options.viewer_num,
            title: product.title,
            category: product.category,
            origin_price: product.origin_price,
            price: product.price,
            img_url_list: product.imageUrl,
        }
        card.load(data_obj);
        all_product_view += card.render();
    });

    product_section.innerHTML = all_product_view;
}


pagenum_section.innerHTML = pagination.render();
footer_section.innerHTML = footer.render();
