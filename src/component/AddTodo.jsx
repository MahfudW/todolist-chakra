import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

export default function AddTodo({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const toast = useToast();
  
  function handleSubmit(e) {
    e.preventDefault();

    if(!inputValue) {
      toast({
        title: 'Buat tugas dulu DONG...!!!',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
      return
    }

    addTodo({ id: Date.now(), body: inputValue });
    setInputValue("");
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="Yuk catat tugas kamu"
          onChange={handleChange}
          value={inputValue}
        />
        <Button type="submit" colorScheme="green" px="8">
          Tambah Tugas
        </Button>
      </HStack>
    </form>
  );
}
