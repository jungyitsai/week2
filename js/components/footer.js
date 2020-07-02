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
            <div class="footer-copyright text-center py-3">公司網址:
                <a href="${this.data.company_web_site}"> ${this.data.company_web_site} </a>
            </div>
        </div>        
        `;

        return template;
    }
}