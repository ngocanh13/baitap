import { authService } from "./services/authService"
export const login = () => {
    const render = (template) => {
        document.getElementById('app').innerHTML = template;
    };
    render(` <section class="bg-white dark:bg-gray-900">
       
  <div class="container flex items-center justify-center min-h-screen px-6 mx-auto">
      <form class="w-full max-w-md">
          <div class="flex justify-center mx-auto">
              <img class="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="">
          </div>
         
          <div class="relative flex items-center mt-6">
              <span class="absolute">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
              </span>

              <input  autocomplete="on" id="email" type="email" class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address">
          </div>

          <div class="relative flex items-center mt-4">
              <span class="absolute">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
              </span>

              <input autocomplete="on" id="password" type="password" class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password">
          </div>
          <div class="flex">
          <span id="errors" class="text-red-500 mt-5 font-bold"></span>
          </div>
          <div class="mt-6">
              <button type="button" id="btn-login" class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Đăng Nhập
              </button>

          </div>
      </form>
  </div>
</section>`)
    function login() {
        location.replace("/")
    }
    document.getElementById('btn-login').addEventListener('click', async () => {
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        const errors = document.getElementById('errors')
        if (!email || !password) {
            errors.innerHTML = 'Bạn chưa nhập đủ thông tin'
            return
        }
        errors.innerHTML = ''
        const emailREG = /^\S+@\S+\.\S+$/

        if (!emailREG.test(email)) {
            errors.innerHTML = 'Email không đúng định dạng !'
            return
        }
        errors.innerHTML = ''
        const res = await authService.login({
            email: email,
            password: password
        })
        if (res.status === 200) {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            login();
        }
    });

}
