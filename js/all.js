import card from "./components/card.js";
import banner from "./components/banner.js";
import pagination from "./components/pagination.js";
import footer from "./components/footer.js";


let banner_section = document.querySelector("#banner_section");
let product_section = document.querySelector("#product_section");
let pagenum_section = document.querySelector("#pagenum_section");
let footer_section =  document.querySelector("#footer_section");

footer_section.innerHTML = footer.render();

pagenum_section.innerHTML = pagination.render();

banner_section.innerHTML = banner.render();

let data_obj = {
    viewer_num: 10,
    title: "京都一日遊",
    category: "京都",
    origin_price: 2000,
    price: 1800,
    img_url_list: ["https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    ],
}

card.load(data_obj);
product_section.innerHTML = card.render() + card.render() + card.render();

