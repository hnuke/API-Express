import app from './index.js';

const port = 3000;

app.listen(port, () => {
    return console.log('Server running on http://localhost:${port}');
});