import * as React from 'react';
import Button from '@mui/material/Button';import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MyNavBar from "./mynavbar";


const CategoryPage = () => {
    const tokenAvailable = localStorage.getItem('token');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            catrgoryName: data.get('category'),
            description: data.get('description'),
            image: data.get('image'),
            imageUrl: data.get('imageUrl'),
        });
    
        const dataObj = {
            catrgoryName: data.get('category'),
            description: data.get('description'),
            image: data.get('image'),
            imageUrl: data.get('imageUrl'),
        };
    
        try {
          const response = await axios.post('https://localhost:7094/api/Category/Add', dataObj, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          if (response.status === 200) {
            // Handle successful login
            console.log(`Category created successful! Welcome ${response.data}`);
            
            
            
            //navigate('/category');
            // Redirect or update the UI accordingly
          } else {
            // Handle other responses
            console.log(`Creation failed: ${response.data.message}`);
          }
        } catch (error) {
          // Handle errors
          console.log(`An error occurred: ${error.response ? error.response.data.message : error.message}`);
        }
      };


    console.log(tokenAvailable);
    return ( 
        tokenAvailable ?
        (<div>
            <MyNavBar />
            THis is CategoryPage
            <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >          
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="category"
                label="Category Name"
                name="category"
                autoComplete="category"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="description"
                label="Description"                
                id="description"
                autoComplete="description"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="image"
                label="Image"                
                id="image"
                autoComplete="image"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="imageUrl"
                label="ImageUrl"                
                id="imageUrl"
                autoComplete="imageUrl"
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create Category!
              </Button>
              
              
            </Box>
            </Box>
        </div>) :
        (<div>
            <h1>
                You need Logintoken to view this page! 
            </h1>
            </div>)
     );
}
 
export default CategoryPage;