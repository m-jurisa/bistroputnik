export const reviewLinks = {
  google:
    process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL ||
    'https://www.google.com/search?sxsrf=ANbL-n59LhlLwrZqYg_nL1xciiBp7EhyXg:1779477737966&q=Bistro+Putnik+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxK2NLS0sDQyMjA3tTA1NrQwN7Aw3MDI-IpR1CmzuKQoXyGgtCQvM1shKLUsM7W8eBErdnEADYyb-EoAAAA&rldimm=9198922075853187081&tbm=lcl&hl=en-HR#',
  tripadvisor:
    process.env.NEXT_PUBLIC_TRIPADVISOR_REVIEW_URL ||
    'https://www.tripadvisor.com/UserReviewEdit-g644069-d3542877-Bistro_Putnik-Baska_Voda_Split_Dalmatia_County_Dalmatia.html',
};
