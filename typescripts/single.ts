namespace Singleton {
  // .. 其他初始化的代码
  const name = 'singleton'
  export function someMethod() {
    console.log(name)
  }
}

// 使用
Singleton.someMethod();
