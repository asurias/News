import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'

export const NewsList = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=News&apiKey=eb194c8c177f4a5e9631b0f7a478e205')
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticles()
          }, [])
    return (
    <div>
      {articles.map(article => {
        return(
            <NewsItem
                title={article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage}
            />
        )
      } )}  
    </div>
  )
}

export default NewsList
//eb194c8c177f4a5e9631b0f7a478e205 Api key newsapi.org
