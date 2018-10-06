class Foo<T> {
  foo: T;
}

const FooNumber = Foo as { new (): Foo<number> };
