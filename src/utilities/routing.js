import page from "page";

export const setupRouting = () => {
  page("/", () => {
    console.log("main page");
  });
  page("/tags", () => {
    console.log("tags page");
  });
  page("/about", () => {
    console.log("about page");
  });
  page("*", () => {
    console.log("not found page");
  });

  page.start();
};

export const removeRouting = () => {
  page.stop();
};
