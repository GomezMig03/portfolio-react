import { Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <HStack backgroundColor="white" borderRadius="5px" color="black" padding="0" >
      <VStack>
        <Image objectFit="cover" src={imageSrc} alt={title} borderRadius="5px" width="100%" height="100%" />
        <VStack alignItems="flex-start" py="15px" px="20px">
          <Heading size="md">{title}</Heading>
          <Text color="gray">{description}</Text>
          <Heading size="xs" >
            <a href="#">See More <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
          </Heading>
        </VStack>
      </VStack>
    </HStack>
  );
};

export default Card;