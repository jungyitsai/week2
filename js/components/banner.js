export default {
    img_url_list: [],

    load(img_url_list){
        this.img_url_list = img_url_list;
    },

    render() {

        let img_template = "";
        let is_first = true;
        this.img_url_list.forEach( img_url => {
            
            let active = "";
            if(is_first){
                active = "active";
                is_first = false;
            }
            else{
                active = "";
            }

            img_template += `
            <div class="carousel-item ${active}">
                <img class="d-block w-100 " src="${img_url}">
            </div>
            `;
        });

        let template = `
        <div class="col">
            <div id="image_carousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    ${img_template}
                </div>
            </div>
        </div>
      `;

        return template;
    }
}