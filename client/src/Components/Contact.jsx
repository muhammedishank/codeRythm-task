import React from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import publicAxios from "../utils/baseURL";
import LazyLoad from 'react-lazyload'
const Loading = ()=>(
  <div>
    <h4>Loading.........</h4>
  </div>
)

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.subject) {
    errors.subject = "Required";
  } else if (values.name.length > 20) {
    errors.name = "Must be 20 characters or less";
  }
  if (!values.message) {
    errors.message = "Required";
  }
  return errors;
};

function Contact() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate,
    onSubmit: async (values) => {
      const userData = {
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
      };
     const submittedData = await publicAxios.post("/api/auth/register", userData);
     if(submittedData.status === 200) {
        navigate("/")
     }
    },
  });

  return (
    
    <div>
      <LazyLoad placeholder={<Loading/>}>
      <form onSubmit={formik.handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          margin="auto"
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
            mt:{sx:"25px", md:"50px"}
          }}
        >
          <Typography
            variant="h3"
            padding={1}
            sx={{ color: "black", mb: 2 ,fontWeight:{ xs:300,md:400 }}}
            textAlign="center"
          >
            Contact
          </Typography>
          <TextField
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            margin="normal"
            type={"text"}
            variant="outlined"
            placeholder="Name"
            sx={{
              width: { sm: 200, md: 300 },
              "& .MuiInputBase-root": {
                height: 43,
              },
            }}
          />
          {formik.errors.name ? (
            <Typography variant="body1" color={"red"}>
              {formik.errors.name}
            </Typography>
          ) : null}
          <TextField
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            margin="normal"
            type={"email"}
            variant="outlined"
            placeholder="Email"
            sx={{
              width: { sm: 200, md: 300 },
              "& .MuiInputBase-root": {
                height: 45,
              },
            }}
          />
          {formik.errors.email ? (
            <Typography variant="body1" color={"red"}>
              {formik.errors.email}
            </Typography>
          ) : null}
          <TextField
            name="subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            margin="normal"
            type={"text"}
            variant="outlined"
            placeholder="Subject"
            sx={{
              width: { sm: 200, md: 300 },
              "& .MuiInputBase-root": {
                height: 43,
              },
            }}
          />
          {formik.errors.subject ? (
            <Typography variant="body1" color={"red"}>
              {formik.errors.subject}
            </Typography>
          ) : null}
          <TextField
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            margin="normal"
            type={"text"}
            variant="outlined"
            id="outlined-multiline-static"
            multiline
            rows={4}
            defaultValue="Default Value"
            placeholder="Text Message here"
            sx={{
              width: { sm: 200, md: 300 },
              "& .MuiInputBase-root": {
                height: 120,
              },
            }}
          />
          {formik.errors.message ? (
            <Typography variant="body1" color={"red"}>
              {formik.errors.message}
            </Typography>
          ) : null}
          <Button
            type="submit"
            sx={{
              marginTop: 1,
              borderRadius: 1,
              "&:hover": {
                backgroundColor: "#fff",
                color: "#3c52b2",
              },
              color: "#fff",
              bgcolor: "#1876d2",
            }}
            variant="outlined"
          >
            submit
          </Button>
        </Box>
      </form>
      </LazyLoad>
    </div>
  );
}

export default Contact;
