import Navigo from "navigo";
import { homepage } from "./page/homepage";
import { prodoct } from "./page/product";
import { product2 } from "./page/product2";
const router = new Navigo('/', true);
router.on('/', homepage).on('/product', prodoct).on('/product2', product2)
.resolve()