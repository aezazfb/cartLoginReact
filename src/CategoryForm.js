import * as React from 'react';
import { TextField, Button, Box, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MyNavBar from "./mynavbar";
import { useFormik } from 'formik';
import * as Yup from 'yup';


const CategoryPage = () => {
  const tokenAvailable = localStorage.getItem('token');

  const navigate = useNavigate();

  const [successMessage, setSuccessMessage] = React.useState("");

  const validationSchema = Yup.object({
    catrgoryName: Yup.string().required('Category Name is required'),
    description: Yup.string().required('Description is required'),
    image: Yup.string().required('Image is required'),
    imageUrl: Yup.string().required('Image URL is required'),
  });

  const formik = useFormik({
    initialValues: {
      catrgoryName: '',
      description: '',
      image: '',
      imageUrl: '',
    },

    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      // Handle form submission
      try {
        const response = await axios.post('https://localhost:7094/api/Category/Add', values, {
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

      resetForm();  //Reset input values

      setSuccessMessage("Data saved Successfully!!!");

      setTimeout(()=>setSuccessMessage(""), 3000);
    },
  });



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
          <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>

            {successMessage && <Alert severity="success">{successMessage}</Alert>}

            <TextField
              margin="normal"
              fullWidth
              id="category"
              label="Category Name"
              name="catrgoryName"
              autoComplete="catrgoryName"
              autoFocus
              value={formik.values.catrgoryName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.catrgoryName && Boolean(formik.errors.catrgoryName)}
              helperText={formik.touched.catrgoryName && formik.errors.catrgoryName}
            />
            <TextField
              margin="normal"
              fullWidth
              id="description"
              label="Description"
              name="description"
              autoComplete="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
            />
            <TextField
              margin="normal"
              fullWidth
              id="image"
              label="Image"
              name="image"
              autoComplete="image"
              value={formik.values.image}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.image && Boolean(formik.errors.image)}
              helperText={formik.touched.image && formik.errors.image}
            />
            <TextField
              margin="normal"
              fullWidth
              id="imageUrl"
              label="Image URL"
              name="imageUrl"
              autoComplete="imageUrl"
              value={formik.values.imageUrl}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.imageUrl && Boolean(formik.errors.imageUrl)}
              helperText={formik.touched.imageUrl && formik.errors.imageUrl}
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