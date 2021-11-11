import { Flex, Box, Icon, HTMLChakraProps } from "@chakra-ui/react";
import * as React from "react";

const Logo = ({ w, h, ...props }: HTMLChakraProps<"div">) => (
    <Flex align="center" {...props}>
        <Box display="inline-block" w={w} h={h} marginEnd="3">
            <Icon
                h="100%"
                w="auto"
                flexShrink={0}
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                imageRendering="optimizeQuality"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                viewBox="0 0 65 65"
                verticalAlign="middle"
            >
                <path
                    fill="currentColor"
                    d="M5.5 41.083a1.5 1.5 0 01-1.5-1.5V25.417a1.5 1.5 0 113 0v14.166a1.5 1.5 0 01-1.5 1.5zm9 5.584a1.5 1.5 0 01-1.5-1.5V19.833a1.5 1.5 0 113 0v25.334a1.5 1.5 0 01-1.5 1.5zm9 8.25a1.5 1.5 0 01-1.5-1.5V11.583a1.5 1.5 0 113 0v41.834a1.5 1.5 0 01-1.5 1.5zm9-11.667a1.5 1.5 0 01-1.5-1.5v-18.5a1.5 1.5 0 113 0v18.5a1.5 1.5 0 01-1.5 1.5zm9 2.916a1.5 1.5 0 01-1.5-1.5V20.334a1.5 1.5 0 113 0v24.332a1.5 1.5 0 01-1.5 1.5zm9-7.166a1.5 1.5 0 01-1.5-1.5v-10a1.5 1.5 0 113 0v10a1.5 1.5 0 01-1.5 1.5zm9-3.084a1.5 1.5 0 01-1.5-1.5v-3.832a1.5 1.5 0 113 0v3.832a1.5 1.5 0 01-1.5 1.5z"
                ></path>
            </Icon>
        </Box>
        <Box
            fontSize="18px"
            fontWeight="semibold"
            position="relative"
            top="2px"
            display="inline-block"
        >
            Trade Rhythm
        </Box>
    </Flex>
);

export default Logo;
