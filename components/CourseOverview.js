import React, { useEffect, useState } from "react";
import { Text, Button, Box, HStack, VStack } from "@chakra-ui/react";

export default function CourseOverview({ course }) {
  return (
    <VStack w="full" alignItems="left">
      <Text color="text.900" fontWeight="medium" fontSize="xl">
        What You will Learn?
      </Text>
      <Text color="text.900" fontWeight="medium" fontSize="sm">
        {course.studentLearn}
      </Text>
      <Text color="text.900" fontWeight="medium" fontSize="xl">
        Requirements :
      </Text>
      <Text color="text.900" fontWeight="medium" fontSize="sm">
        {course.requirements}
      </Text>
      <Text color="text.900" fontWeight="medium" fontSize="xl">
        Description :
      </Text>
      <Text color="text.900" fontWeight="medium" fontSize="sm">
        {course.description}
      </Text>
    </VStack>
  );
}
