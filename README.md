
This repository is intended to reproduce issue https://github.com/angular/angular/issues/65137

Layout:
=======
- LIBRARY-PROJECT is used by PROJECT-USING-LIBRARY
- LIBRARY-PROJECT has already been built (see LIBRARY/dist) as a production build
- hint: LIBRARY-PROJECT uses angularCompilerOptions "enableResourceInlining": true

Instructions:
=============
- cd PROJECT-USING-LIBRARY
- npm i
- npm start # this will copy the dist/ build from LIBRARY-PROJECT to local node_modules
- if everything would work fine, then the <lib-my-header> component would have a green background color
  (it hasn't because of the styles being cut off)

Appendix:
=========
- Copying the dist/ build is necessary because `npm link` doesn't work as @angular packages would be 
duplicated
- if need be, you should be able to rebuild the LIBRARY-PROJECT/dist easily via: 
  - cd LIBRARY-PROJECT
  - npm i
  - npm run build
