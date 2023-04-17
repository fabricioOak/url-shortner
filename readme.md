# URL Shortener 🔗

This is a simple URL shortener built using Express and ShortId. It allows users to generate short URLs for long URLs, and then use the short URLs to redirect to the original long URLs.

## 🛠️ Setup

1. Install Node.js and npm on your local machine if you haven't already.
2. Clone this repository and navigate to the project directory.
3. Run `npm install` to install the required dependencies.
4. Update the `port` and `baseUrl` variables in the code to match your desired configuration.

## 🚀 Usage

### Shorten URL

To generate a short URL for a long URL, make a GET request to `/shorten` endpoint with the long URL as a query parameter, like this: `http://localhost:3000/shorten?url=<LONG_URL>`. The server will respond with a short URL that you can use to redirect to the original long URL.

### Redirect to Long URL

To redirect to the original long URL using the short URL, simply enter the short URL in your web browser or make a GET request to the short URL. The server will automatically redirect to the original long URL associated with the short URL.

## ❌ Error Handling

If the short URL does not exist in the system, the server will respond with a 404 status code indicating that the URL was not found.

## 📝 License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.
