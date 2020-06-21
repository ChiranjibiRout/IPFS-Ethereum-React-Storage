module.exports = {
  networks: {
     dev: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ganache port (default: none)
      network_id: "*",       // Any network (default: none)
     },
    // Useful for private networks
    private: {
    }
  }
}
