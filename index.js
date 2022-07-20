// deno-lint-ignore-file
import {Application, Router} from "https://deno.land/x/oak@v10.6.0/mod.ts"
import { Handlebars } from "https://deno.land/x/handlebars@v0.8.0/mod.ts"

const env = Deno.env.toObject();


const PORT = env.PORT || 8000;

const HOST = env.HOST || 'localhost';

const handle = new Handlebars({defaultLayout: ''})

const router = new Router();


router.get('/', async context => {
    const body = await handle.renderView('/')
    context.response.body = body
})


const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`App is listening on Port: ${PORT} or open ${HOST}:${PORT}`);

await app.listen(`${HOST}:${PORT}`)