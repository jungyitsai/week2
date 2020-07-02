export default{
    data: {
        company_web_site: "https://example.com/"
    },

    load(data){
        this.data = data;
    },

    render() {

        let template = `
        <div class="col text-center">
            <div class="footer-copyright text-center py-3">
                圖片來源 Unsplash ，無商業用途，僅供學習使用
            </div>
        </div>        
        `;

        return template;
    }
}