# Type Narrowing in TypeScript

## ভূমিকা (Introduction)

TypeScript-এ Type Narrowing একটি গুরুত্বপূর্ণ বিষয়। এর সাহায্যে আমরা বুঝতে পারি কোনো Data কী ধরনের। যেমন, কোনো Data String নাকি Number। এতে Code লিখতে সুবিধা হয় এবং ভুল কম হয়।

## Type Narrowing কী?

Type Narrowing মানে হলো কোনো Data-এর ধরন পরীক্ষা করে সেটিকে আরও ভালোভাবে চেনা।

যেমন:

```ts
function showValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  return value.toString();
}
```

এখানে `typeof` দিয়ে Data-এর ধরন পরীক্ষা করা হয়েছে। String হলে বড় হাতের অক্ষর করা হয়েছে। Number হলে সেটিকে String বানানো হয়েছে।

## Type Narrowing-এর তিনটি উপায়

**১. typeof Operator**

এটি দিয়ে String, Number বা Boolean চেনা যায়।

```ts
typeof "Hello"; // string
typeof 10;      // number
typeof true;    // boolean
```

**২. instanceof Operator**

এটি দিয়ে কোনো Object নির্দিষ্ট Class থেকে তৈরি হয়েছে কি না বোঝা যায়।

```ts
const today = new Date();

if (today instanceof Date) {
  console.log("This is a Date");
}
```

**৩. in Operator**

এটি দিয়ে কোনো Object-এর মধ্যে নির্দিষ্ট Property আছে কি না দেখা যায়।

```ts
const student = {
  name: "Rahim",
  age: 20
};

if ("name" in student) {
  console.log("Name is available");
}
```

## উপসংহার (Conclusion)

Type Narrowing আমাদের Data-এর ধরন বুঝতে সাহায্য করে। `typeof`, `instanceof` এবং `in` দিয়ে সহজে Data পরীক্ষা করা যায়। এটি ব্যবহার করলে Code নিরাপদ হয় এবং ভুল কম হয়।
