export default {
    img_url_list: ["https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"],

    load(img_url_list){
        this.img_url_list = img_url_list;
    },

    render() {

        let img_url = this.img_url_list[0];

        let template = `
        <div class="col">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="${img_url}" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="${img_url}" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="${img_url}" alt="Third slide">
                    </div>
                </div>
            </div>
        </div>
      `;



        return template;
    }
}