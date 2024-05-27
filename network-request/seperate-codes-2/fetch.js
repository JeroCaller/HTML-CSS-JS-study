async function getNavList() {
    let result= await fetch('navlist').then(response => response.text());
    return result.split(',');
}

function constructNav(ulElement, navListStr, articleElement) {
    for(let oneList of navListStr) {
        let li = document.createElement('li');
        li.innerHTML = `<a href="#${oneList}">${oneList}</a>`;
        li.addEventListener('click', async () => {
            await addArticleToDom(articleElement, oneList);
        });
        ulElement.append(li);
    }
    return ulElement;
}

async function getOneArticle(title) {
    let articleText = await fetch(`articles/${title}`);
    if(!articleText.ok) {
        throw new Error(`${articleText.status} HTTP request failed.`);
    }
    return articleText.text();
}

async function addArticleToDom(articleElement, title) {
    let articleText;
    try {
        articleText = await getOneArticle(title);
    } catch (e) {
        articleElement.innerHTML = `해당 글을 불러오는 데에 실패했습니다. ㅠㅠ`;
        console.log(e);
        return;
    }
    articleElement.innerHTML = `<p>${articleText}</p>`;
    return articleElement;
}

async function main() {
    const navUl = document.querySelector('nav > ul');
    const articleElement = document.querySelector('article');

    let navList = await getNavList();
    constructNav(navUl, navList, articleElement);
    articleElement.innerHTML = `<h3>AI 백과사전에 오신 것을 환영합니다!</h3>`;
}

main();