import express from 'express';

const app = express() 

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.get('/jokes', (req,res) => {
    const jokes = [
    {
          "id":1, 
          "setup": "Why did the programmer go broke?",
          "punchline": "Because he used up all his cache!"
    },
    {
          "id": 2,
          "setup": "What do you call a fake noodle?",
          "punchline": "An impasta!"
    },
    {
          "id": 3,
          "setup": "Why did the scarecrow win an award?",
          "punchline": "Because he was outstanding in his field!"
    },
    {
          "id": 4,
          "setup": "How do you organize a space party?",
          "punchline": "You planet!"
    },
    {
          "id": 5,
          "setup": "Why did the coffee file a police report?",
          "punchline": "It got mugged!"
    }
]
    res.send(jokes);
})

const port = process.env.PORT || 3000; 

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});
