import express from 'express';

const posts = [
    {
        id: 1,
        descricao: 'Gato fofo',
        imagem: 'https://placecats.com/louie/300/150'
    },
    {
        id: 2,
        descricao: 'Cachorro brincando',
        imagem: 'https://placecats.com/louie/300/150'
    },
    {
        id: 3,
        descricao: 'Paisagem montanhosa',
        imagem: 'https://placecats.com/louie/300/200'
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Servidor escutando...');
});

app.get('/posts', (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
};

app.get('/posts/:id', (req, res) => {
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});