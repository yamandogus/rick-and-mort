import { useEffect,useState } from 'react';
import './App.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import NewApi from './NewApi';
import BasicExample from './assets/navbar';

const BASE_URL = "https://rickandmortyapi.com/api";
const POST_URL =  BASE_URL + "/character"

interface Post {
       "id": number,
      "name": string,
      "status": string,
      "species": string,
      "gender": string,
      "image": string,
      "created": number,
    }

    

    async function namePost(): Promise<Post[]>{
        const response = await fetch(POST_URL);
        const responseData: {results:Post[]} = await response.json();
        console.log(responseData)
       return responseData.results;
    }

function App() {
 const [posts, setPost] = useState<Post[]>([])
  console.log("psots sayısı",posts);

useEffect(() => {
  (async () => {
      const postsData = await namePost();
      setPost(postsData);
  })();
}, []);

  return (
    <>
    <BasicExample/>
      <Container>
        <Row>
          {posts.map((post) => (
            <Col className='mb-5' key={post.id} sm={12} md={6} lg={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={post.image} />
                <Card.Body>
                  <Card.Title>{post.id}</Card.Title>
                  <Card.Text>
                    {post.gender}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div>
        <NewApi/>
        </div>
      </Container>
    </>
  )
}

export default App
