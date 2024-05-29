import Navigo from "navigo";
import { homepage } from "./page/homepage";
import { prodoct } from "./page/product";
import { product2 } from "./page/product2";
import { detailProduct } from "./page/detailProduct";
import { login } from "./page/login";
import { register} from "./page/register"
const router = new Navigo('/', true);
router.on('/', homepage).on('/product', prodoct).on('/product/:id' , detailProduct).on('/login', login).on('/register', register)
.resolve()