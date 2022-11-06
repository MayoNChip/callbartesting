import { useEffect, useRef, useState } from "react";
import NavbarLayout from "../../components/layout/NavbarLayout";
import { trpc } from "../../utils/trpc";
import autoAnimate from "@formkit/auto-animate";
import { Alert } from "flowbite-react";

const index = () => {
  const tests = trpc.tests.getAll.useQuery();
  const [show, setShow] = useState(false);
  const [activeId, setActiveId] = useState("");
  const parent = useRef(null);

  const textChange = (id: string) => {
    setActiveId((prev) => (prev === id ? "" : id));
  };

  const openAccordion = (testId: string) => {
    console.log(testId);
  };

  console.log(tests.data);

  const reveal = (testId: string) => {
    activeId && activeId === testId ? setShow(true) : setShow(false);
    setActiveId((prev) => (prev === testId ? prev : testId));
    // setShow(!show)
  };

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div className="mx-auto my-10 h-[500px] w-5/6 rounded-md p-4 shadow-md">
      <h1 className="">TestsPage</h1>
      <div className="h-4/5 w-full space-y-10">
        {tests.data &&
          tests.data.map((test) => {
            return (
              <div
                key={test.id}
                onClick={() => reveal(test.id)}
                ref={parent}
                className="h-50px group w-full cursor-pointer rounded-md bg-gray-100 p-2 shadow-md"
              >
                <h1>{test.description}</h1>

                {show && <div>content</div>}
              </div>
            );
          })}

        <div id="accordion-collapse" data-accordion="collapse">
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-t-xl border border-b-0 border-gray-200 p-5 text-left font-medium text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
            >
              <span>What is Flowbite?</span>
              <svg
                data-accordion-icon
                className="h-6 w-6 shrink-0 rotate-180"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="border border-b-0 border-gray-200 p-5 font-light dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out this guide to learn how to{" "}
                <a
                  href="/docs/getting-started/introduction/"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  get started
                </a>{" "}
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
        <Alert color="info">Hello</Alert>
      </div>
    </div>
  );
};

export default index;
