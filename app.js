const fs = require('fs');
const RSS = require('rss');

const blog = {
    title: 'Blog',
    description: 'A blog about stuff',
    author: 'John Doe',
    articles: [
        {
            title: 'First article',
            description: 'This is the first article',
            date: '2018-01-01',
            url: 'https://example.com/first-article'
        },
        {
            title: 'Second article',
            description: 'This is the second article',
            date: '2018-01-02',
            url: 'https://example.com/second-article'
        },
        {
            title: 'Third article',
            description: 'This is the third article',
            date: '2018-01-03',
            url: 'https://example.com/third-article'
        },
        {
            title: 'Fourth article',
            description: 'This is the fourth article',
            date: '2018-01-04',
            url: 'https://example.com/fourth-article'
        }
    ]
};

const feed = new RSS({
    title: blog.title,
    description: blog.description,
    author: blog.author,
});

for (const article of blog.articles) {
    feed.item({
        title: article.title,
        description: article.description,
        url: article.url,
        date: article.date
    });
}

const xml = feed.xml({indent: true});
fs.writeFileSync('feed.xml', xml);