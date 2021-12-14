interface HelloData {
  name: string;
}

export function sayHello(data: HelloData): string {
  return "Hello world!! " + data.name;
}
