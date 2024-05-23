class DevelopmentConfig {

    // Without using docker:
    // public readonly productsUrl = "http://localhost:4000/api/products/";
    
    // Using docker:
    public readonly productsUrl = "http://localhost:81/api/products/";
}

class ProductionConfig {
    public readonly productsUrl = "http://11.22.33.44:81/api/products/";
}

const appConfig = new DevelopmentConfig();
// const appConfig = new ProductionConfig();

export default appConfig;
