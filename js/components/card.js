export default {
    viewer_num: 0,
    is_traced: false,
    title: "title",
    category: "category",
    origin_price: 0,
    price: 0,
    img_url_list: [],

    load(data_obj){
        this.viewer_num = data_obj.viewer_num;
        this.title = data_obj.title;
        this.category = data_obj.category;
        this.origin_price = data_obj.origin_price;
        this.price = data_obj.price;
        this.img_url_list = data_obj.img_url_list;
    },
    trace_product(){
        if(this.is_traced){
            this.is_traced = false;
        }
        else {
            this.is_traced = true;
        }

    },
    render(){        
        

        let template = `
       
            <div class="card" style="width: 18rem;">            
                <img class="card-img-top" src="${this.img_url_list[0]}" alt="Card image cap">
                <div id="trace_icon" onclick="trace_product()">
                    <i class="fas fa-heart"></i>
                </div>
                <div id="viewer_num">
                <span class="badge badge-secondary">${this.viewer_num}人瀏覽過</span>
                </div>
                <div id="product_abstract" class="card-body">
                <h3>${this.title}</h3>
                <p id="product_category" class="badge badge-info">${this.category}</p>
                <div id="price_section">
                    <span id="origin_price">原價：$${this.origin_price}</span>
                    <span id="price">優惠價：$${this.price}</span>
                </div>
                </div>
                <div id="add_cart_btn" class="card-footer border-info">
                    加入購物車
                </div>
            </div>
      `;


        return template;
    }

}