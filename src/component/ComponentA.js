import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ComponentB from "./ComponentB";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
// import Link from "next/link";

function ComponentA() {
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();

  // return <Button></Button>;
  return (
    <>
      <div className="flex justify-center h-screen w-screen">
        <div className="flex-none  text-white w-2/3 bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-600  flex flex-col justify-center items-start pl-16">
          <h1 className="text-3xl">Todo App</h1>
          <p className="">Manage your work every day</p>
        </div>
        <div className="flex-none w-1/3 bg-white flex justify-center items-center">
          <Form />
        </div>
      </div>
    </>
  );
}

function Form() {
  return (
    <form className="flex w-2/3 flex-col gap-4 bg-transparent">
      <div>
        {" "}
        <h1 className="text-2xl font-bold">Welcome back!</h1>
        <h1 className="mb-4">Login to Get Started</h1>
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Email Address" />
        </div>
        <TextInput
          id="email2"
          type="email"
          placeholder="Enter your email"
          required
          shadow
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Password" />
        </div>
        <TextInput
          id="password2"
          type="password"
          required
          shadow
          placeholder="Enter password"
        />
      </div>

      <div className="inline-block">
        <Label htmlFor="agree">don't have an account?</Label>
        <a
          href="#"
          class="font-medium text-green-700 dark:text-green-800 hover:underline ml-1"
        >
          Register here
        </a>
      </div>
      <button
        type="button"
        class="focus:outline-none  w-1/5 pb-2 pt-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Login
      </button>
      <div className="inline-block">
        <Checkbox id="agree" className="mr-3" />
        <Label htmlFor="agree">I agree with the</Label>
      </div>
    </form>
  );
}

export default ComponentA;
