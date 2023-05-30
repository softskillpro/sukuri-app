import React from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { z } from 'zod';
import { TextField, Button, Container, Typography, Grid, Checkbox, FormControlLabel } from '@mui/material';
import { Box } from '@mui/system';

// Define the validation schema using Zod
const schema = z.object({
  name: z.string().nonempty({ message: 'Project name is required' }),
  short_description: z.string().nonempty({ message: 'Short description is required' }),
  long_description: z.string().nonempty({ message: 'Long description is required' }),
  thumbnail_image: z.string().nonempty({ message: 'Thumbnail image URL is required' }),
  large_image: z.string().nonempty({ message: 'Large image URL is required' }),
  chain_id: z.number().min(1, { message: 'Chain ID must be a positive number' }),
  member_count: z.number().min(0, { message: 'Member count must be a non-negative number' }),
  is_erc721: z.boolean(),
  accepted_payment: z.array(
    z.object({
      token: z.string().nonempty({ message: 'Payment token is required' }),
      name: z.string().nonempty({ message: 'Payment name is required' }),
      symbol: z.string().nonempty({ message: 'Payment symbol is required' }),
      is_eth: z.boolean(),
    })
  ),
});

type Inputs = z.infer<typeof schema>;

export default function CreateProjectPage() {
  const router = useRouter();

  const formik = useFormik<Inputs>({
    initialValues: {
      name: '',
      short_description: '',
      long_description: '',
      thumbnail_image: '',
      large_image: '',
      chain_id: 1,
      member_count: 0,
      is_erc721: false,
      accepted_payment: [{ token: '', name: '', symbol: '', is_eth: false }],
    },
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
      try {
        const response = await fetch('/api/project', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) throw new Error('There was an error');
        router.push('/');
      } catch (error) {
        console.error(error);
      }
    },
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = event.target?.name.split('[')[1].split(']')[0];
    formik.setFieldValue(`accepted_payment[${index}].is_eth`, event.target.checked);
    formik.setFieldTouched(`accepted_payment[${index}].is_eth`);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 3, maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' }}>
        <Typography variant="h5" gutterBottom>
          Create New Project
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="short_description"
                name="short_description"
                label="Short Description"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                value={formik.values.short_description}
                onChange={formik.handleChange}
                error={formik.touched.short_description && Boolean(formik.errors.short_description)}
                helperText={formik.touched.short_description && formik.errors.short_description}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="long_description"
                name="long_description"
                label="Long Description"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                value={formik.values.long_description}
                onChange={formik.handleChange}
                error={formik.touched.long_description && Boolean(formik.errors.long_description)}
                helperText={formik.touched.long_description && formik.errors.long_description}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="thumbnail_image"
                name="thumbnail_image"
                label="Thumbnail Image URL"
                variant="outlined"
                margin="normal"
                value={formik.values.thumbnail_image}
                onChange={formik.handleChange}
                error={formik.touched.thumbnail_image && Boolean(formik.errors.thumbnail_image)}
                helperText={formik.touched.thumbnail_image && formik.errors.thumbnail_image}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="large_image"
                name="large_image"
                label="Large Image URL"
                variant="outlined"
                margin="normal"
                value={formik.values.large_image}
                onChange={formik.handleChange}
                error={formik.touched.large_image && Boolean(formik.errors.large_image)}
                helperText={formik.touched.large_image && formik.errors.large_image}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="chain_id"
                name="chain_id"
                label="Chain ID"
                variant="outlined"
                margin="normal"
                type="number"
                value={formik.values.chain_id}
                onChange={formik.handleChange}
                error={formik.touched.chain_id && Boolean(formik.errors.chain_id)}
                helperText={formik.touched.chain_id && formik.errors.chain_id}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="member_count"
                name="member_count"
                label="Member Count"
                variant="outlined"
                margin="normal"
                type="number"
                value={formik.values.member_count}
                onChange={formik.handleChange}
                error={formik.touched.member_count && Boolean(formik.errors.member_count)}
                helperText={formik.touched.member_count && formik.errors.member_count}
              />
            </Grid>

            {formik.values.accepted_payment.map((payment, index) => (
              <Grid container spacing={2} key={index}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id={`accepted_payment[${index}].token`}
                    name={`accepted_payment[${index}].token`}
                    label="Token"
                    variant="outlined"
                    margin="normal"
                    value={payment.token}
                    onChange={formik.handleChange}
                    error={(formik.touched.accepted_payment as any)?.[index]?.token && Boolean((formik.errors.accepted_payment as any)?.[index]?.token)}
                    helperText={(formik.touched.accepted_payment as any)?.[index]?.token && (formik.errors.accepted_payment as any)?.[index]?.token}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id={`accepted_payment[${index}].name`}
                    name={`accepted_payment[${index}].name`}
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    value={payment.name}
                    onChange={formik.handleChange}
                    error={(formik.touched.accepted_payment as any)?.[index]?.name && Boolean((formik.errors.accepted_payment as any)?.[index]?.name)}
                    helperText={(formik.touched.accepted_payment as any)?.[index]?.name && (formik.errors.accepted_payment as any)?.[index]?.name}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id={`accepted_payment[${index}].symbol`}
                    name={`accepted_payment[${index}].symbol`}
                    label="Symbol"
                    variant="outlined"
                    margin="normal"
                    value={payment.symbol}
                    onChange={formik.handleChange}
                    error={(formik.touched.accepted_payment as any)?.[index]?.symbol && Boolean((formik.errors.accepted_payment as any)?.[index]?.symbol)}
                    helperText={(formik.touched.accepted_payment as any)?.[index]?.symbol && (formik.errors.accepted_payment as any)?.[index]?.symbol}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={payment.is_eth}
                        onChange={formik.handleChange}
                        name={`accepted_payment[${index}].is_eth`}
                      />
                    }
                    label="Is ETH"
                  />
                </Grid>
                {formik.values.accepted_payment.length > 1 && (
                  <Grid item xs={12}>
                    <Button
                      onClick={() => {
                        const newPayments = formik.values.accepted_payment.filter((_, paymentIndex) => paymentIndex !== index);
                        formik.setFieldValue('accepted_payment', newPayments);
                      }}
                    >
                      Remove Payment Method
                    </Button>
                  </Grid>
                )}
              </Grid>
            ))}

            <Grid item xs={12}>
              <Button
                onClick={() =>
                  formik.setFieldValue('accepted_payment', [
                    ...formik.values.accepted_payment,
                    { token: '', name: '', symbol: '', is_eth: false },
                  ])
                }
              >
                Add Another Payment Method
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button color="primary" variant="contained" fullWidth type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );

}
