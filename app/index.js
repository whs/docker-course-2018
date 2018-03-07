const Koa = require("koa");

const app = new Koa();
app.use(ctx => {
  if (ctx.request.url === "/") {
    ctx.body = `<h1>${process.env.TEXT || "Hello world"}</h1>`;
    ctx.set("Content-Type", "text/html;charset=utf-8");
  } else if (ctx.request.url === "/_hc/") {
    ctx.status = 200;
  } else {
    ctx.body = "404";
    ctx.status = 404;
  }
});

app.listen(3000);
console.log("http://localhost:3000");
