interface HelloData {
  name: string;
}

export function sayHello(data: HelloData): void {
  console.log("Hello world!! " + data.name);
}
