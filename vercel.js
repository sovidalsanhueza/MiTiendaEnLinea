{
  "version": 2,
  "builds": [
    {
      "src": "src/index.html",
      "use": "@vercel/static"
    },
    {
      "src": "src/**/*.{js,ts}",
      "use": "@vercel/static"
    },
    {
      "src": "public/**",
      "use": "@vercel/static"
    }
  ],

  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1",
      "status": 200,
      "headers": {
        "Strict-Transport-Security": "max-age=0" // Desactivar HSTS para permitir acceso por HTTP
      }
    }
  ]
}