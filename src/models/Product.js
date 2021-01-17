class Product {
    constructor(id, name, imageUrl, description, categoryId, categoryName, creationDate) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.description = description;
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.creationDate = creationDate;
    }
}

export default Product;