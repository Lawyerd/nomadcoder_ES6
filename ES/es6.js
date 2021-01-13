{
  const student = {
    name: "junseok",
    level: 2,
  };
  const { name, level } = student;
  console.log(name, level);
}

{
  // Spread Syntax
  const obj1 = { key: "key1" };
  const obj2 = { key: "key2" };
  const array = [obj1, obj2];
  // array copy
  const arrayCopied = [...array];
  console.log(arrayCopied);

  const arrayCopied2 = [...array, obj2];
  console.log(arrayCopied2);
}

{
  // default parameter
  function printMessage(message = "default message") {
    console.log(message);
  }

  printMessage("hello");
  printMessage();
}
