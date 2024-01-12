import { Box, Text } from "@chakra-ui/react";
import React from "react";
import axios from "axios"

const Navbar = () => {


  const sampleCall = async()=>{
    let data = await axios.get("shop-sleuth-backend.vercel.app/");
    console.log(data);
  }
  
  return (
    <Box w={"100vw"} pl={"10rem"} pr={"10rem"} pt={"0.7rem"} pb={"0.7rem"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Text
            fontSize={"2rem"}
            fontWeight={"500"}
            fontFamily={"Patua One"}
            color={"#ff6347"}
            onClick = {sampleCall}
          >
            ShopSleuth
          </Text>
        </Box>
        <Box display={"flex"} gap={"2rem"}>
          <Box>
            <Text cursor={"pointer"} _hover={{ color: "#ff6347" }}>
              About us
            </Text>
          </Box>
          <Box onClick=()=>{console.log("Contact Us")}>
            <Text cursor={"pointer"} _hover={{ color: "#ff6347" }}>
              Contact us
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
