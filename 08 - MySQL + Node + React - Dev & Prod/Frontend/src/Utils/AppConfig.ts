class DevelopmentConfig {

    // Without using docker:
    // public readonly productsUrl = "http://localhost:4000/api/products/";
    
    // Using docker:
    public readonly productsUrl = "http://localhost:81/api/products/";
}

class ProductionConfig {
    public readonly productsUrl = process.env.REACT_APP_BACKEND_BASE_URL + "/api/products/";
}

// Check which environment we're on using environment variable declared in Dockerfile.prod:
const appConfig = process.env.REACT_APP_ENVIRONMENT === "production" ? new ProductionConfig() : new DevelopmentConfig();

export default appConfig;
