# Type Alias vs Interface in TypeScript

# ভূমিকা (Introduction)

TypeScript-এ Type Alias এবং Interface খুব গুরুত্বপূর্ণ। এগুলো আমাদের Data-এর ধরন বুঝতে সাহায্য করে। এর মাধ্যমে আমরা সহজে এবং সুন্দরভাবে Code লিখতে পারি।

# Type Alias কী?

Type Alias হলো কোনো Data Type-এর একটি নাম দেওয়া। এটি তৈরি করতে   type ব্যবহার করা হয়।

উদাহরণ:

ts
type Student = {
  name: string;
  age: number;
};

এখানে Student হলো একটি Type Alias। একজন Student-এর নাম এবং বয়স থাকবে।

# Interface কী?

Interface হলো একটি নিয়ম বা কাঠামো। এটি বলে দেয় একটি Object-এর মধ্যে কী কী তথ্য থাকবে। এটি তৈরি করতে interface ব্যবহার করা হয়।

উদাহরণ:

ts
interface Teacher {
  name: string;
  subject: string;
}


এখানে Teacher-এর নাম এবং বিষয় থাকতে হবে।

# Type Alias এবং Interface-এর পার্থক্য

দুটিই Object-এর তথ্য সাজাতে সাহায্য করে। তবে এদের কিছু পার্থক্য আছে।

Type Alias দিয়ে String, Number এবং Union Type তৈরি করা যায়। অন্যদিকে Interface মূলত Object-এর কাঠামো তৈরি করতে ব্যবহার করা হয়।

উদাহরণ:
ts
type ID = string | number;

Interface-কে extends ব্যবহার করে বড় করা যায়। আবার Type Alias-কে & ব্যবহার করে একসঙ্গে যুক্ত করা যায়।

Object-এর জন্য Interface এবং বিভিন্ন ধরনের Type তৈরি করতে Type Alias ব্যবহার করা যায়।

# উপসংহার (Conclusion)

Type Alias এবং Interface দুটিই TypeScript-এর গুরুত্বপূর্ণ বিষয়। এগুলো Code সুন্দর ও সহজ করতে সাহায্য করে। কাজের ধরন অনুযায়ী যেকোনো একটি ব্যবহার করা যায়।