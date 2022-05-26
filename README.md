# Fullstack Challenge 🏅 2021 - Space Flight News
## Space Flight News - Front-End
> This is a challenge by [Coodesh](https://coodesh.com/)
### Description
This app consumes a [REST API](https://github.com/welbhen/spaceflightnews-backend) and displays news from  [Spaceflight News API](https://api.spaceflightnewsapi.net/v3/documentation).
### Technologies
- Node.js
- React
- axios
- HTML
- CSS
### Functions
- 'SEARCH': search/filter articles fetched by terms contained in the titles.
- 'SORT': sort the articles fetched by oldest or newest date.
- 'Ver Mais': each article has a BUTTON that sends you to the full article on the original page.
- 'Carregar Mais': fetch 5 more articles and display them with the previous ones.
### Installation
- Clone the repo
  ```git clone https://github.com/welbhen/spaceflightnews-frontend```
- Run the back-end REST API locally on port 8000 or change the:
  ```/web/src/services/api.js```
  with the proper endpoint URL
### Scripts
- Run
  ```npm start```
