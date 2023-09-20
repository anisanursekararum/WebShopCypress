# WebShopCypress

Website for testing https://demowebshop.tricentis.com

1. Auth
   1. Failed register because mandatory field empty
   2. Failed register because email registered
   3. Success register
   4. Login negative case use data from fixtures
   5. Failed login because empty form
   6. Success login
2. Home
   1. Search
   2. Top Menu in Navbar
   3. Categories list
3. Transaction
   1. Add to cart and then update
   2. Add to cart and then remove
   3. Checkout and payment

After successfully clone this repository, run this command

```sh
npm init
npm install cypress --save-dev
```

Opening cypress (open in folder 3-tricentis)

```sh
npx cypress open
```

Run Test Suite Tricentis Headless

```sh
npm run tricentis
```
