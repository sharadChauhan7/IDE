export const lang = [
  { value: "javascript", label: "Javascript" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "c", label: "C" },
  { value: "cpp", label: "C++" },
];
export const theme = [
  { value: "vs-dark", label: "Dark" },
  { value: "vs-light", label: "Light" },
];

export const boilerPlate = {
  javascript: `// Javascript code
console.log('Hello World');`,

  python: `# Python code
print('Hello World')`,

  java: `// Java code
public class Main{
    public static void main(String[] args){
         System.out.println("Hello World");
    }
}`,

  c: `// C code
#include <stdio.h>
int main(){
    printf("Hello World");
    return 0;
}`,

  cpp: `// C++ code
#include <iostream>
using namespace std;
int main(){
    cout<<"Hello World";
        return 0;
}`,
};
