export default {
    pagination: {
        "total": 0,
        "count": 0,
        "per_page": 25,
        "current_page": 1,
        "total_pages": 0,
        "links": {}
    },

    load(pagination) {
        this.pagination = pagination;
    },

    render() {

        let template = `
        <div class="col">
            <nav aria-label="...">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">Previous</a>
                    </li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item ">
                    <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
        `;

        return template;
    }
}