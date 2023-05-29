import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { z } from 'zod';
import { TextField, Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

// Define the validation schema using Zod
const schema = z.object({
  name: z.string().nonempty({ message: 'Project name is required' }),
  description: z.string().nonempty({ message: 'Description is required' }),
});

type Inputs = z.infer<typeof schema>;

/**
 * This is a simple form page to test out the project API route.
 * Currently, it just allows for the creation of a project with a name and a description.
 * The information is sent to the /api/project route with a POST request.
 * Note: This page lacks many features that would be necessary for a full-fledged project creation form,
 * such as user authentication, error handling for the API request, form validation feedback, and more.
 * This page is intended to be a starting point for building a more robust project creation interface.
 * Please enhance this page as per your application requirements.
 */

export default function CreateProjectPage() {
  const router = useRouter();

  const formik = useFormik<Inputs>({
    initialValues: {
      name: '',
      description: '',
    },
    // Instead of directly using validationSchema, use validate method with Zod schema
    validate: (values) => {
      try {
        schema.parse(values);
      } catch (error) {
        if (error instanceof z.ZodError) {
          return error.formErrors.fieldErrors;
        }
      }
    },

    onSubmit: async (values) => {
      const response = await fetch('/api/project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        router.push('/'); // redirect to home page or any other page after successful creation
      }
    },
  });


  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 3 }}>
        <Typography variant="h5" gutterBottom>
          Create New Project
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Project Name"
            variant="outlined"
            margin="normal"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            fullWidth
            id="description"
            name="description"
            label="Description"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Create Project
          </Button>
        </form>
      </Box>
    </Container>
  );
}
