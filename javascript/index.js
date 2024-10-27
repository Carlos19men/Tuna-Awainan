import { extract } from '@extractus/article-extractor'

const article = await extract('https://www.nytimes.com/2021/10/01/technology/facebook-instagram-whatsapp-outage.html')

console.log(article.title)
