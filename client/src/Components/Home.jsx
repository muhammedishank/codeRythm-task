import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import LazyLoad from "react-lazyload";

const Loading = () => (
  <Box sx={{ display: "flex" }}>
    <CircularProgress />
  </Box>
);

const Home = () => {
  const [data, setData] = useState([]);

  // lazy loading...
  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/photos").then((res)=>{
  //     let lazyData = res.data.splice(0,1000)
  //      setData(lazyData)
  //   })
  // }, [])
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          m: "auto",
          mt: 5,
          p: 2,
          justifyContent: "center",
          width: {
            sm: 400,
            md: 600,
          },
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: { sm: 500, md: 600 } }}>
          Get Paid to Share Your Opinion
        </Typography>
        <Typography sx={{ mt: 2, fontSize: { sm: "1rem", md: "1.3rem" } }}>
          Take surveys to shape future products and services and get paid for
          it. It is 100% free and you can start earning immediately.
        </Typography>
      </Box>
      {/* <Box>
        {
          data.map((result,index)=>(
            <>
            <Typography key ={index} variant="h5">{result.title}</Typography>
            <LazyLoad placeholder={<Loading />}>
            <img src={result.url}/> 
            </LazyLoad> 
            </>       
             ))
        }
      </Box> */}
    </div>
  );
};

export default Home;
