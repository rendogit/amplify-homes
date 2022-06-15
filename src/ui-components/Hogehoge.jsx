/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Hogehoge(props) {
  const { home, overrides, ...rest } = props;
  return (
    <View
      width="1356px"
      height="812px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Hogehoge")}
    >
      <Image
        width="1356px"
        height="332px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        src={home?.image_url}
        {...getOverrideProps(overrides, "onepiece01_luffy 1")}
      ></Image>
      <View
        width="1356px"
        height="453px"
        position="absolute"
        top="332px"
        left="0px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 419")}
      >
        <Text
          fontFamily="Inter"
          fontSize="64px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="75px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="1356px"
          height="258px"
          position="absolute"
          top="221px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={home?.price}
          {...getOverrideProps(overrides, "desription")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="64px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="75px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="1356px"
          height="227px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={home?.address}
          {...getOverrideProps(overrides, "title")}
        ></Text>
      </View>
    </View>
  );
}
